// @flow
import { type VoteType } from 'Shared/types/vote';

export const getVoteKey = (voteKey: string, proposalId: string) =>
  `${voteKey}_${proposalId}`;

export const getSameKey = (wantedKey: string, voteKey: string) => {
  if (wantedKey === voteKey) {
    return true;
  }
  return false;
};

export const getVoteButtonClass = (
  voteKey: string,
  animateVote: string,
  pendingVoteKey: string,
  isVoted: boolean
) => {
  if (animateVote === voteKey) {
    return `${voteKey} animated`;
  }

  if (isVoted) {
    return `${voteKey} voted`;
  }

  return voteKey;
};

export const updateAndGetVotes = (
  votesToUpdate: VoteType[],
  vote: VoteType
): VoteType[] => {
  return votesToUpdate.map(oldVote =>
    oldVote.voteKey === vote.voteKey ? vote : oldVote
  );
};
