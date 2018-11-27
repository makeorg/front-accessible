/* @flow */

import { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from '../constants/vote';

export const getResultBarIndex = (proposalVoteKey: string, proposalId: string) => (
  `ResultBar_${proposalVoteKey}_${proposalId}`
);

export const getTooltipIndex = (proposalVoteKey: string, proposalId: string) => (
  `Tooltip_${proposalVoteKey}_${proposalId}`
);

export const getVotesCount = (votes: Array<Object>) => (
  votes.map(vote => vote.count).reduce((total, voteCount) => total + voteCount)
);

export const getVotesPercent = (votes: Array<Object>, votesCount: number) => {
  const agreeVote: ?Object = votes.find(vote => vote.voteKey === VOTE_AGREE_KEY);
  const disagreeVote: ?Object = votes.find(vote => vote.voteKey === VOTE_DISAGREE_KEY);
  const neutralVote: ?Object = votes.find(vote => vote.voteKey === VOTE_NEUTRAL_KEY);

  return {
    [VOTE_AGREE_KEY]: (agreeVote) ? Math.round((agreeVote.count / votesCount) * 100) : 0,
    [VOTE_DISAGREE_KEY]: (disagreeVote) ? Math.round((disagreeVote.count / votesCount) * 100) : 0,
    [VOTE_NEUTRAL_KEY]: (neutralVote) ? Math.round((neutralVote.count / votesCount) * 100) : 0
  };
};
