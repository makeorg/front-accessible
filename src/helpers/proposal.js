import { PROPOSAL_BAIT_TEXT, MIN_PROPOSAL_LENGTH, MAX_PROPOSAL_LENGTH } from '../constants/proposal';

export const getProposalLength = (content = null) => {
  if (content === null) {
    return PROPOSAL_BAIT_TEXT.length;
  }

  return (PROPOSAL_BAIT_TEXT + content).length;
};

export const getIsProposalValidLength = (length = null) => {
  if (length === null) {
    return false;
  }

  return (length >= MIN_PROPOSAL_LENGTH && length <= MAX_PROPOSAL_LENGTH);
};
