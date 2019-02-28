import { logger } from '../../logger';

export function logError(error) {
  if (error && error.stack) {
    const { stack } = error;
    logger.log('error', stack);
  } else {
    logger.log('error', error);
  }
}
