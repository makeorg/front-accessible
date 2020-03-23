// @flow
import { VoteApiService } from 'Shared/api/VoteApiService';
import { type VoteType } from 'Shared/types/vote';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const vote = async (
  proposalId: string,
  voteKey: string,
  proposalKey: string
): Promise<?VoteType> => {
  try {
    const response = await VoteApiService.vote(
      proposalId,
      voteKey,
      proposalKey
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const unvote = async (
  proposalId: string,
  voteKey: string,
  proposalKey: string
): Promise<?VoteType> => {
  try {
    const response = await VoteApiService.unvote(
      proposalId,
      voteKey,
      proposalKey
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const VoteService = {
  vote,
  unvote,
};
