/* @flow */

import { ApiService } from './ApiService';

export const PATH_VOTE = '/proposals/:proposalId/vote';
export const PATH_UNVOTE = '/proposals/:proposalId/unvote';

export class VoteApiService {
  static vote(
    proposalId: string,
    voteKey: string,
    proposalKey: string
  ): Promise<Object> {
    return ApiService.callApi(PATH_VOTE.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({ voteKey, proposalKey }),
      proposalId,
    });
  }

  static unvote(
    proposalId: string,
    voteKey: string,
    proposalKey: string
  ): Promise<Object> {
    return ApiService.callApi(PATH_UNVOTE.replace(':proposalId', proposalId), {
      method: 'POST',
      body: JSON.stringify({ voteKey, proposalKey }),
      proposalId,
    });
  }
}
