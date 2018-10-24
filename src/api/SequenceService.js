import ApiService from './ApiService';

const PATH_START_SEQUENCE = '/sequences/start/:sequenceId';

export default class SequenceService {
  static startSequence(operationId) {
    // @todo: get sequenceId from operation
    const sequenceId = operationId;
    return ApiService.callApi(PATH_START_SEQUENCE.replace(':sequenceId', sequenceId), {
      method: 'GET'
    });
  }
}
