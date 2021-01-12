import { Logger as SharedLogger } from 'Shared/services/Logger';
import { getLoggerInstance } from '../../logger';

const log = async (level, error) => {
  const logger = await getLoggerInstance();
  logger.log(level, SharedLogger.normalizeData(error));
};

export const logError = error => {
  log('error', error);
};

export const logInfo = info => {
  log('info', info);
};

export const logWarning = warning => {
  log('warning', warning);
};
