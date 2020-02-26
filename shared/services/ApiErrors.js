// @flow
import { Logger } from 'Shared/services/Logger';
import { type TypeErrorObject } from 'Shared/types/api';
import { i18n } from 'Shared/i18n';

/**
 * Map errors from API to internal error message
 *
 * @param {TypeErrorObject[]} errors an array of error map object {field: 'value', key: 'key of the error', message: 'error message to display'}
 */
export const mapErrors = (
  internalErrors: TypeErrorObject[],
  apiErrors: TypeErrorObject[]
) => {
  const errors: TypeErrorObject[] = apiErrors.map(
    (apiError: TypeErrorObject) => {
      const apiErrorField = apiError.field.toLowerCase();
      const apiErrorMessage = i18n.t(`common.form.messages.${apiError.key}`);
      const errorMatch = internalErrors.find(
        (internalError: TypeErrorObject) =>
          apiErrorField === internalError.field &&
          apiError.key === internalError.key
      );

      if (typeof errorMatch !== 'undefined') {
        return {
          field: errorMatch.field,
          key: errorMatch.key,
          message: errorMatch.message,
        };
      }

      Logger.logError(
        `Unexpected error: "field": "${apiErrorField}", "key": "${
          apiError.key
        }", "message": "${apiError.message}"`
      );

      return {
        field: apiErrorField,
        key: apiError.key,
        message: apiErrorMessage,
      };
    }
  );

  return errors;
};
