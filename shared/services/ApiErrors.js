// @flow
import { Logger } from 'Shared/services/Logger';
import { type ErrorObjectType } from 'Shared/types/api';
import { i18n } from 'Shared/i18n';

/**
 * Map errors from API to internal error message
 *
 * @param {ErrorObjectType[]} errors an array of error map object {field: 'value', key: 'key of the error', message: 'error message to display'}
 */
export const mapErrors = (
  internalErrors: ErrorObjectType[],
  apiErrors: ErrorObjectType[],
  logId: ?string
) => {
  const errors: ErrorObjectType[] = apiErrors.map(
    (apiError: ErrorObjectType) => {
      const apiErrorField = apiError.field.toLowerCase();
      const apiErrorMessage = i18n.t(`common.form.messages.${apiError.key}`);
      const errorMatch = internalErrors.find(
        (internalError: ErrorObjectType) =>
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

      Logger.logError({
        message: `Unexpected error: "field": "${apiErrorField}", "key": "${
          apiError.key
        }", "message": "${apiError.message}"`,
        logId,
      });

      return {
        field: apiErrorField,
        key: apiError.key,
        message: apiErrorMessage,
      };
    }
  );

  return errors;
};
