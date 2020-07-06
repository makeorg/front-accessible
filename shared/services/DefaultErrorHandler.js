import { Logger } from './Logger';

let unexpectedError = error => {
  const message = 'You should handle unexpected errors';
  try {
    const errorAsString = JSON.stringify(error);
    Logger.logError(`${message}: ${errorAsString}`);
  } catch (e) {
    Logger.logError(message);
  }
};

export const setUnexpectedError = (func: (apiServiceError: Object) => void) => {
  unexpectedError = func;
};

export const defaultUnexpectedError = apiServiceError => {
  Logger.logError(apiServiceError);
  unexpectedError(apiServiceError);
};
