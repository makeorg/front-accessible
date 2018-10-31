import { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from '../constants/vote';

export const getResultBarIndex = (proposalVoteKey, proposalId) => {
  if (proposalId === null) {
    return null;
  }

  return `ResultBar_${proposalVoteKey}_${proposalId}`;
};

export const getTooltipIndex = (proposalVoteKey, proposalId) => {
  if (proposalId === null) {
    return null;
  }

  return `Tooltip_${proposalVoteKey}_${proposalId}`;
};

export const getVotesCount = votes => votes.map(vote => vote.count).reduce((total, voteCount) => total + voteCount);

export const getVotesPercent = (votes, votesCount) => ({
  [VOTE_AGREE_KEY]: Math.round((votes.find(vote => vote.voteKey === VOTE_AGREE_KEY).count / votesCount) * 100),
  [VOTE_DISAGREE_KEY]: Math.round((votes.find(vote => vote.voteKey === VOTE_DISAGREE_KEY).count / votesCount) * 100),
  [VOTE_NEUTRAL_KEY]: Math.round((votes.find(vote => vote.voteKey === VOTE_NEUTRAL_KEY).count / votesCount) * 100)
});
