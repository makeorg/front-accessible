/* @flow */

import ApiService from './ApiService';

const PATH_START_SEQUENCE = '/sequences/start/:sequenceId';

export default class SequenceService {
  static startSequence(sequenceId: string): Promise<Object> {
    return ApiService
      .callApi(PATH_START_SEQUENCE.replace(':sequenceId', sequenceId), {
        method: 'GET'
      });
  }
}
