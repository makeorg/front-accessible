import axios from 'axios';
import { env } from 'Shared/env';
import { ApiServiceError } from 'Shared/api/ApiService/ApiServiceError';
import { v4 as uuidv4 } from 'uuid';

const LOG_INFO = 'info';
const LOG_WARNING = 'warn';
const LOG_ERROR = 'error';
const onClientSide = typeof window !== 'undefined' && !!window;

let instance = null;

class LoggerSingleton {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  formatApiServiceError = (error: ApiServiceError) => ({
    message: error.message,
    app_logName: error.name,
    app_fileName: error.fileName,
    app_lineNumber: error.lineNumber,
    app_columnNumber: error.columnNumber,
    stack: error.stack,
    app_status: error.status,
    app_responseData: error.data,
    app_url: error.url,
    app_method: error.method,
    app_logId: error.logId,
    app_requestId: error.requestId,
  });

  formatError = (error: Error) => ({
    message: error.message,
    app_logName: error.name,
    app_fileName: error.fileName,
    app_lineNumber: error.lineNumber,
    app_columnNumber: error.columnNumber,
    app_logId: uuidv4(),
    stack: error.stack,
  });

  normalizeData = data => {
    if (data instanceof ApiServiceError) {
      return this.formatApiServiceError(data);
    }
    if (data instanceof Error) {
      return this.formatError(data);
    }
    if (typeof data === 'string') {
      return {
        message: data,
        stack: 'no-stack',
        app_logId: uuidv4(),
        app_logName: '-',
      };
    }
    if (typeof data === 'object') {
      const formatedData = {
        ...data,
        app_logId: data.app_logId || data.logId || uuidv4(),
        app_logName: data.app_logName || data.name || data.errorName || '-',
        stack: data.stack || '-',
        message: data.message || '-',
      };
      delete formatedData.name;
      delete formatedData.errorName;
      delete formatedData.logId;

      return formatedData;
    }

    try {
      return {
        message: JSON.stringify(data),
        app_logId: uuidv4(),
      };
    } catch (e) {
      return {
        message: e.message,
        app_logId: uuidv4(),
      };
    }
  };

  logError = error => {
    this.log(error, LOG_ERROR);
  };

  logInfo = data => {
    this.log(data, LOG_INFO);
  };

  logWarning = data => {
    this.log(data, LOG_WARNING);
  };

  log = async (data, level) => {
    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.log(level, data);
    }
    if (!onClientSide) {
      // eslint-disable-next-line import/no-cycle
      const { logError, logInfo, logWarning } = await import(
        'Server/ssr/helpers/ssr.helper'
      );

      switch (level) {
        case LOG_INFO:
          logInfo(data);
          break;
        case LOG_WARNING:
          logWarning(data);
          break;
        default:
          logError(data);
      }

      return () => {};
    }

    return axios({
      method: 'POST',
      url: `/api/logger`,
      proxy: {
        port: env.port(),
      },
      data: {
        level: level || 'error',
        data: this.normalizeData(data),
      },
    })
      .then(() => {})
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log('Fail to log error - ', e);
      });
  };
}

export const Logger = new LoggerSingleton();
