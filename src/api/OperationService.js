/* @flow */

import ApiService from './ApiService';

const PATH_GET_OPERATIONS = '/operations?slug=:slug';

export default class OperationService {
  static getOperation(operationSlug: string, country: string): Promise<Object> {
    return ApiService
      .callApi(PATH_GET_OPERATIONS.replace(':slug', operationSlug), {
        method: 'GET'
      })
      .then((operations) => {
        if (operations.length > 0) {
          const operation = operations[0];
          const question = operation.countriesConfiguration
            .find(countryConfiguration => countryConfiguration.countryCode === country);

          return question;
        }

        throw new Error(`operation with slug ${operationSlug} doesnot exist`);
      });
  }
}
