/* @flow */

export const getVoteKey = (voteKey: string, proposalId: string) =>
  `${voteKey}_${proposalId}`;

const getNewVoteState = (prevState: Object, vote: Object) => {
  const newVotes = prevState.votes.map(oldVote => {
    if (oldVote.voteKey === vote.voteKey) {
      return vote;
    }

    return oldVote;
  });

  return newVotes;
};

export const startPendingState = (
  prevState: Object,
  pendingVoteKey: string
): Object => {
  return {
    ...prevState,
    pending: true,
    pendingVoteKey,
  };
};

export const finishPendingState = (prevState: Object): Object => {
  return {
    ...prevState,
    pending: false,
    pendingVoteKey: '',
  };
};

export const doVote = (prevState: Object, vote: Object) => ({
  ...finishPendingState(prevState),
  hasVoted: true,
  votedKey: vote.voteKey,
  votes: getNewVoteState(prevState, vote),
  qualifications: vote.qualifications,
});

export const doUnvote = (prevState: Object, vote: Object) => ({
  ...finishPendingState(prevState),
  hasVoted: false,
  votedKey: '',
  votes: getNewVoteState(prevState, vote),
  qualifications: [],
});
