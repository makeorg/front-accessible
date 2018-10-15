import ApiService from './ApiService';

const PATH_PROPOSAL_PROPOSE = '/proposals';

export default class ProposalService {
  static propose(content, operationId) {
    return ApiService.callApi(PATH_PROPOSAL_PROPOSE, {
      method: 'POST',
      body: JSON.stringify({
        content,
        operationId,
        country: ApiService.country,
        language: ApiService.language
      })
    });
  }
}
