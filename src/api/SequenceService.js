/* @flow */

import ApiService from './ApiService';

const PATH_START_SEQUENCE = '/sequences/start/:sequenceId';
const PATH_OPERATION_BY_ID = '/operations/:operationId';

export default class SequenceService {
  static startSequence(operationId: string): Promise<Object> {
    return ApiService.callApi(PATH_OPERATION_BY_ID.replace(':operationId', operationId), {
      method: 'GET'
    }).then((operation) => {
      const operationCountryConfiguration = operation.countriesConfiguration
        .find(countryConfiguration => countryConfiguration.countryCode === ApiService.country);

      return ApiService
        .callApi(PATH_START_SEQUENCE.replace(':sequenceId', operationCountryConfiguration.landingSequenceId), {
          method: 'GET'
        });
    });
  }
}
