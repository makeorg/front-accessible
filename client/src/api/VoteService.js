/* @flow */

import ApiService from './ApiService';

const PATH_VOTE = '/proposals/:proposalId/vote';
const PATH_UNVOTE = '/proposals/:proposalId/unvote';

export default class VoteService {
  static vote(proposalId: string, voteKey: string): Promise<Object> {
    return ApiService.callApi(PATH_VOTE.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({ voteKey })
    });
  }

  static unvote(proposalId: string, voteKey: string): Promise<Object> {
    return ApiService.callApi(PATH_UNVOTE.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({ voteKey })
    });
  }
}
