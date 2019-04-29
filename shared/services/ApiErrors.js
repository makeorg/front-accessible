// @flow
import { Logger } from 'Shared/services/Logger';
import {
  type ErrorObject as TypeErrorObject,
  type ErrorMapping as TypeErrorMapping,
} from 'Shared/types/api';

/**
 * Map errors from API to internal error message
 *
 * @param {TypeErrorMapping[]} errorMessageMapping an array of error map object {field: 'value', apiMessage: 'message from API', message: 'internal error key message'}
 *                                            apiMessage can be a RegExp or a string
 * @param {TypeErrorObject[]}  errors              an array of ErrorObject
 */
export const mapErrors = (
  errorsMapping: TypeErrorMapping[],
  errors: TypeErrorObject[]
) => {
  const fieldMatch = (fieldApi, fieldMap) => {
    return fieldMap === 'any' || fieldApi === fieldMap;
  };
  const messageMatch = (messageApi, messageMap) => {
    if (messageMap instanceof RegExp) {
      return messageMap.test(messageApi);
    }
    return messageMap === messageApi;
  };

  const errorsMapped: TypeErrorObject[] = errors.map(
    (apiError: TypeErrorObject) => {
      const errorMatch = errorsMapping.find(
        (errorMapping: TypeErrorMapping) =>
          fieldMatch(apiError.field, errorMapping.field) &&
          messageMatch(apiError.message, errorMapping.apiMessage)
      );

      if (typeof errorMatch !== 'undefined') {
        return {
          field: `${apiError.field}`,
          message: `${errorMatch.message}`,
        };
      }

      Logger.logError(
        `Unexpected error: "${apiError.field}":"${apiError.message}"`
      );

      return {
        field: 'global',
        message: 'common.form.api_error',
      };
    }
  );

  return errorsMapped;
};
