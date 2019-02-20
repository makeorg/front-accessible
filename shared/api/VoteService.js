/* @flow */

import { ApiService } from './ApiService';

const PATH_VOTE = '/proposals/:proposalId/vote';
const PATH_UNVOTE = '/proposals/:proposalId/unvote';

export class VoteService {
  static vote(proposalId: string, voteKey: string, proposalKey: string): Promise<Object> {
    return ApiService.callApi(PATH_VOTE.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({ voteKey, proposalKey })
    });
  }

  static unvote(proposalId: string, voteKey: string, proposalKey: string): Promise<Object> {
    return ApiService.callApi(PATH_UNVOTE.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({ voteKey, proposalKey })
    });
  }
}
