/* @flow */

import { i18n } from 'Shared/i18n';
import { type TypeErrorObject } from 'Shared/types/api';

export const errorTranslation = (message: string) => {
  const translatedError = i18n.t(message);
  if (translatedError === undefined) {
    return message;
  }

  return translatedError;
};

//  TODO must be replaced by getFieldError() during these refactoring tasks
//  https://makeorg.atlassian.net/browse/MP-42
//  https://makeorg.atlassian.net/browse/MP-43
export const fieldErrors = (field: string, errors: TypeErrorObject[]) => {
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

export const getFieldError = (
  field: string,
  errors: TypeErrorObject[]
): TypeErrorObject => {
  let fieldError = errors.find(error => error.field === field);

  if (fieldError === undefined) {
    fieldError = {
      field: '',
      message: '',
    };
  }
  return fieldError;
};
