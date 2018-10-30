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
