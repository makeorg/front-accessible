import axios from 'axios';
import ApiService from '../api/ApiService';

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

  logError = (data) => {
    this.log({ message: data }, LOG_ERROR);
  }

  logInfo = (data) => {
    this.log({ message: data }, LOG_INFO);
  }

  logWarning = (data) => {
    this.log({ message: data }, LOG_WARNING);
  }

  log = (data, level) => (
    axios.post('/api/logger', {
      level: level || 'error',
      data: { ...data, ...{ sessionId: ApiService.sessionId } }
    }).then(() => {})
      .catch(() => {})
  )
}

export default new Logger();
