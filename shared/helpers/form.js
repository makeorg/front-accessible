// @flow
import { i18n } from 'Shared/i18n';
import { type TypeErrorObject } from 'Shared/types/api';
import { defaultApiError } from 'Shared/errors/Messages';
import { mapErrors } from 'Shared/services/ApiErrors';
import { Logger } from 'Shared/services/Logger';

export const errorTranslation = (message: string): string => {
  const translatedError = i18n.t(message);
  if (translatedError === undefined) {
    return message;
  }

  return translatedError;
};

export const getFieldError = (
  field: string,
  errors: TypeErrorObject[]
): TypeErrorObject => {
  let fieldError = errors.find(error => error.field === field);

  if (fieldError === undefined) {
    fieldError = {
      field: '',
      key: '',
      message: '',
    };
  }
  return fieldError;
};

export const getErrorMessages = (
  internalErrors: TypeErrorObject[],
  serviceErrors: any
) => {
  switch (true) {
    case !Array.isArray(serviceErrors):
      Logger.logError(`Unexpected error (array expected): ${serviceErrors}`);
      throw Array(defaultApiError);
    default:
      throw mapErrors(internalErrors, serviceErrors);
  }
};

export const setEmptyStringToNull = (initialValue: string): string | null => {
  let value = initialValue;
  if (initialValue === '') {
    value = null;
  }

  return value;
};

export const setNullToEmptyString = (initialValue: string): string => {
  let value = initialValue;
  if (initialValue === null) {
    value = '';
  }

  return value;
};
