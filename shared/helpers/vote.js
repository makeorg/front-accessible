/* @flow */

export const getVoteKey = (voteKey: string, proposalId: string) =>
  `${voteKey}_${proposalId}`;

export const getNewVoteState = (votes: Object, vote: Object) => {
  const newVotes = votes.map(oldVote => {
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
    animateVote: false,
    pendingVoteKey,
  };
};

export const startAnimatingVoteState = (
  prevState: Object,
  pendingVoteKey: string
): Object => {
  return {
    ...prevState,
    pending: true,
    animateVote: true,
    pendingVoteKey,
  };
};

export const finishPendingState = (prevState: Object): Object => {
  return {
    ...prevState,
    pending: false,
    animateVote: false,
    pendingVoteKey: '',
  };
};

export const doVote = (prevState: Object, vote: Object) => ({
  ...finishPendingState(prevState),
  hasVoted: true,
  votedKey: vote.voteKey,
  votes: getNewVoteState(prevState.votes, vote),
  qualifications: vote.qualifications,
});

export const doUnvote = (prevState: Object, vote: Object) => ({
  ...finishPendingState(prevState),
  hasVoted: false,
  votedKey: '',
  votes: getNewVoteState(prevState.votes, vote),
  qualifications: [],
});
