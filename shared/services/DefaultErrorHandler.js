import { Logger } from './Logger';

let unexpectedError = () => {
  Logger.logError('you should handle unexpected errors');
};

export const setUnexpectedError = (func: (apiServiceError: Object) => void) => {
  unexpectedError = func;
};

export const defaultUnexpectedError = apiServiceError => {
  Logger.logError(apiServiceError);
  unexpectedError(apiServiceError);
};
