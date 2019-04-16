/* @flow */

import { i18n } from 'Shared/i18n';
import { type ErrorObject } from 'Shared/types/form';

export const errorTranslation = (message: string) => {
  const translatedError = i18n.t(message);
  if (translatedError === undefined) {
    return message;
  }

  return translatedError;
};

export const fieldErrors = (field: string, errors: ErrorObject[]) => {
  if (errors.length === 0) {
    return null;
  }
  const fieldError = errors.find(error => error.field === field);

  if (fieldError === undefined) {
    return null;
  }

  return Object.keys(fieldError).length === 0
    ? undefined
    : errorTranslation(fieldError.message);
};
