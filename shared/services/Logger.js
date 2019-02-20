import axios from 'axios';
import { NODE_API_BASE } from 'Shared/api/ApiService';

const LOG_INFO = 'info';
const LOG_WARNING = 'warn';
const LOG_ERROR = 'error';

let instance = null;

class Logger {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  logError = (error) => {
    let data = {};
    if (error instanceof Error) {
      data = {
        message: error.message,
        name: error.name,
        fileName: error.fileName,
        lineNumber: error.lineNumber,
        columnNumber: error.columnNumber,
        stack: error.stack
      };
    } else {
      data = {
        message: error,
        stack: 'no-stack'
      };
    }

    this.log(data, LOG_ERROR);
  }

  logInfo = (data) => {
    this.log({ message: data }, LOG_INFO);
  }

  logWarning = (data) => {
    this.log({ message: data }, LOG_WARNING);
  }

  log = (data, level) => (
    axios({
      method: 'POST',
      url: `${NODE_API_BASE}/api/logger`,
      proxy: {
        port: process.env.PORT
      },
      data: {
        level: level || 'error',
        data: { ...data }
      }
    }).then(() => { })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log('Error on logger', e);
      })
  )
}

export default new Logger();
