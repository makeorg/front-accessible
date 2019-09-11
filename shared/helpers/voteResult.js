// @flow
import { type Vote as TypeVote } from 'Shared/types/proposal';
import { BadArgumentError } from 'Shared/errors';
import {
  VOTE_AGREE_KEY,
  VOTE_DISAGREE_KEY,
  VOTE_NEUTRAL_KEY,
} from 'Shared/constants/vote';

/**
 * calculate total number of vote
 *
 * @param {TypeVote[]} votes
 */
export const getTotalVotesCount = (votes: TypeVote[]): number => {
  if (!votes.length) {
    throw new BadArgumentError('votes cannot be an empty array');
  }

  return votes
    .map(vote => vote.count)
    .reduce((total, voteCount) => total + voteCount);
};

/**
 * calculate the percent by vote key
 *
 * @param {TypeVote} votes
 * @param {number} votesCount
 */
export const getVotesPercent = (votes: TypeVote[], votesCount: number) => {
  const agreeVote: ?Object = votes.find(
    vote => vote.voteKey === VOTE_AGREE_KEY
  );
  const disagreeVote: ?Object = votes.find(
    vote => vote.voteKey === VOTE_DISAGREE_KEY
  );
  const neutralVote: ?Object = votes.find(
    vote => vote.voteKey === VOTE_NEUTRAL_KEY
  );

  return {
    [VOTE_AGREE_KEY]:
      agreeVote && votesCount
        ? Math.round((agreeVote.count / votesCount) * 100)
        : 0,
    [VOTE_DISAGREE_KEY]:
      disagreeVote && votesCount
        ? Math.round((disagreeVote.count / votesCount) * 100)
        : 0,
    [VOTE_NEUTRAL_KEY]:
      neutralVote && votesCount
        ? Math.round((neutralVote.count / votesCount) * 100)
        : 0,
  };
};
