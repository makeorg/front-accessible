// @flow
import { i18n } from 'Shared/i18n';
import { type ErrorObjectType } from 'Shared/types/api';
import { defaultApiError } from 'Shared/errors/Messages';
import { mapErrors } from 'Shared/services/ApiErrors';
import { Logger } from 'Shared/services/Logger';

export const setEmptyStringToNull = (
  initialValue: string | number | null
): string | number | null => {
  if (typeof initialValue === 'number') {
    return initialValue;
  }

  if (!initialValue || !initialValue.trim()) {
    return null;
  }

  return initialValue.trim();
};

export const setNullToEmptyString = (
  initialValue: string | number | null
): string | number => {
  if (typeof initialValue === 'number') {
    return initialValue;
  }

  return !initialValue ? '' : initialValue;
};

export const errorTranslation = (message: string): string => {
  const translatedError = i18n.t(message);
  if (translatedError === undefined) {
    return message;
  }

  return translatedError;
};

export const getFieldError = (
  field: string,
  errors: ErrorObjectType[]
): ErrorObjectType => {
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
  internalErrors: ErrorObjectType[],
  serviceErrors: any,
  logId: ?string
) => {
  switch (true) {
    case !Array.isArray(serviceErrors):
      Logger.logError({
        message: `Unexpected error (array expected): ${serviceErrors}`,
        logId,
      });
      return Array(defaultApiError);
    default:
      return mapErrors(internalErrors, serviceErrors, logId);
  }
};

export const transformFieldValueToProfileValue = (
  initialValue: string | number
): string | number | null => setEmptyStringToNull(initialValue);

export const transformProfileToFormData = (profile: Object) => {
  const formData = { ...profile };

  Object.keys(formData).forEach(key => {
    formData[key] = setNullToEmptyString(formData[key]);
  });

  return formData;
};
