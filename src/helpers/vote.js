/* @flow */

export const getVoteIndex = (voteKey: string, proposalId: string) => (
  `${voteKey}_${proposalId}`
);

const getNewVoteState = (prevState: Object, vote: Object) => {
  const newVotes = prevState.votes.map((oldVote) => {
    if (oldVote.voteKey === vote.voteKey) {
      return vote;
    }

    return oldVote;
  });

  return newVotes;
};

export const doVote = (prevState: Object, vote: Object) => ({
  hasVoted: true,
  votedKey: vote.voteKey,
  votes: getNewVoteState(prevState, vote),
  qualifications: vote.qualifications
});

export const doUnvote = (prevState: Object, vote: Object) => ({
  hasVoted: false,
  votedKey: '',
  votes: getNewVoteState(prevState, vote),
  qualifications: []
});
