/* @flow */

import ApiService from './ApiService';

const PATH_PROPOSAL_PROPOSE = '/proposals';

export default class ProposalService {
  static propose(content: string, questionId: string): Promise<Object> {
    return ApiService.callApi(PATH_PROPOSAL_PROPOSE, {
      method: 'POST',
      body: JSON.stringify({
        content,
        questionId,
        country: ApiService.country,
        language: ApiService.language
      })
    });
  }
}
