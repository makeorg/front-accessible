/* @flow */
import ApiService from './ApiService';

const PATH_QUALIFICATION = '/proposals/:proposalId/qualification';
const PATH_UNQUALIFICATION = '/proposals/:proposalId/unqualification';

export default class QualificationService {
  static qualify(proposalId: string, voteKey: string, qualificationKey: string): Promise<Object> {
    return ApiService.callApi(PATH_QUALIFICATION.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({
        voteKey,
        qualificationKey
      })
    });
  }

  static unqualify(proposalId: string, voteKey: string, qualificationKey: string): Promise<Object> {
    return ApiService.callApi(PATH_UNQUALIFICATION.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({
        voteKey,
        qualificationKey
      })
    });
  }
}
