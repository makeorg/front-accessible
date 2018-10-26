export const getVoteIndex = (voteKey, proposalIndex) => {
  if (proposalIndex === null) {
    return null;
  }

  return `${voteKey}_${proposalIndex}`;
};
