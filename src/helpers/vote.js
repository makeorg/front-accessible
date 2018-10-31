export const getVoteIndex = (voteKey, proposalIndex) => {
  if (proposalIndex === null) {
    return null;
  }

  return `${voteKey}_${proposalIndex}`;
};

const getNewVoteState = (prevState, vote) => {
  const newVotes = prevState.votes.map((oldVote) => {
    if (oldVote.voteKey === vote.voteKey) {
      return vote;
    }

    return oldVote;
  });

  return newVotes;
};

export const doVote = (prevState, vote) => ({
  hasVoted: true,
  votedKey: vote.voteKey,
  votes: getNewVoteState(prevState, vote),
  qualifications: vote.qualifications
});

export const doUnvote = (prevState, vote) => ({
  hasVoted: false,
  votedKey: null,
  votes: getNewVoteState(prevState, vote),
  qualifications: null
});
