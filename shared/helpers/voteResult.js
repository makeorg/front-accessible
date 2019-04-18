/* @flow */
import { type VoteType } from 'Shared/types/proposal';
import {
  VOTE_AGREE_KEY,
  VOTE_DISAGREE_KEY,
  VOTE_NEUTRAL_KEY,
} from 'Shared/constants/vote';

export const getResultBarIndex = (
  proposalVoteKey: string,
  proposalId: string
) => `ResultBar_${proposalVoteKey}_${proposalId}`;

export const getTooltipIndex = (proposalVoteKey: string, proposalId: string) =>
  `Tooltip_${proposalVoteKey}_${proposalId}`;

export const getVotesCount = (votes: VoteType[]) =>
  votes.map(vote => vote.count).reduce((total, voteCount) => total + voteCount);

export const getIsVotedProposal = (votes: VoteType[]) =>
  votes.map(vote => vote.hasVoted).reduce((reducer, hasVoted) => hasVoted);

export const getVotesPercent = (votes: VoteType[], votesCount: number) => {
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
    [VOTE_AGREE_KEY]: agreeVote
      ? Math.round((agreeVote.count / votesCount) * 100)
      : 0,
    [VOTE_DISAGREE_KEY]: disagreeVote
      ? Math.round((disagreeVote.count / votesCount) * 100)
      : 0,
    [VOTE_NEUTRAL_KEY]: neutralVote
      ? Math.round((neutralVote.count / votesCount) * 100)
      : 0,
  };
};

export const getVotePercent = (count: number, total: number) => {
  return Math.round((count / total) * 100);
};
