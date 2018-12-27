// @flow

import ApiService from './ApiService';

const PATH_QUESTION_DETAIL = '/questions/:questionSlug/details';
const PATH_QUESTION_START_SEQUENCE = '/questions/:questionId/start-sequence';

export default class QuestionService {
  static getDetail(questionSlug) {
    return ApiService.callApi(PATH_QUESTION_DETAIL.replace(':questionSlug', questionSlug), {
      method: 'GET'
    });
  }

  static startSequence(questionId: string, includedProposalIds: ?Array = []): Promise<Object> {
    // remove null value
    const include = includedProposalIds.filter(proposalId => proposalId);

    return ApiService
      .callApi(PATH_QUESTION_START_SEQUENCE.replace(':questionId', questionId), {
        method: 'POST',
        body: JSON.stringify({
          include
        })
      });
  }
}
