export const setVoteIndex = (voteKey, proposalIndex) => {
  if (proposalIndex === null || proposalIndex === null) {
    return null;
  }

  return `${voteKey}_${proposalIndex}`;
};
