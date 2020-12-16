import axios from 'axios';
import { env } from 'Shared/env';
import { env as processEnv } from 'Shared/process';
import { ApiServiceError } from 'Shared/api/ApiService/ApiServiceError';
import { v4 as uuidv4 } from 'uuid';

const LOG_INFO = 'info';
const LOG_WARNING = 'warn';
const LOG_ERROR = 'error';

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
    name: error.name,
    fileName: error.fileName,
    lineNumber: error.lineNumber,
    columnNumber: error.columnNumber,
    stack: error.stack,
    status: error.status,
    responseData: error.data,
    url: error.url,
    method: error.method,
    logId: error.logId,
  });

  formatError = (error: Error) => ({
    message: error.message,
    name: error.name,
    fileName: error.fileName,
    lineNumber: error.lineNumber,
    columnNumber: error.columnNumber,
    stack: error.stack,
    logId: uuidv4(),
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
        logId: uuidv4(),
      };
    }
    if (typeof data === 'object') {
      return {
        ...data,
        logId: data.logId || uuidv4(),
      };
    }

    try {
      return {
        message: JSON.stringify(data),
        logId: uuidv4(),
      };
    } catch (e) {
      return {
        message: e.message,
        logId: uuidv4(),
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

  log = (data, level) => {
    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.log(level, data);
    }

    return axios({
      method: 'POST',
      url: '/api/logger',
      proxy: {
        port: processEnv.PORT,
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
