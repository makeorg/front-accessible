// @flow

import ApiService from './ApiService';

const PATH_QUESTION_DETAIL = '/questions/:questionSlug/details';
const PATH_QUESTION_START_SEQUENCE = '/questions/:questionId/start-sequence';

export default class QuestionService {
  static getDetail(questionSlug: string) {
    return ApiService.callApi(PATH_QUESTION_DETAIL.replace(':questionSlug', questionSlug), {
      method: 'GET'
    });
  }

  static startSequence(questionId: string, includedProposalIds: string[] = []): Promise<Object> {
    let startSequenceUrl = PATH_QUESTION_START_SEQUENCE.replace(':questionId', questionId);
    // remove null value
    const includeParams = includedProposalIds.map(proposalId => (
      proposalId ? `include=${proposalId}` : ''
    )).join('&');

    startSequenceUrl += includeParams ? `?${includeParams}` : '';

    return ApiService.callApi(startSequenceUrl, { method: 'GET' });
  }
}
