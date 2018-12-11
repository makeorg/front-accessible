/* @flow */

import { PROPOSAL_BAIT_TEXT, MIN_PROPOSAL_LENGTH, MAX_PROPOSAL_LENGTH } from 'Constants/proposal';

export const getProposalLength = (content: string = '') => {
  if (content === '') {
    return PROPOSAL_BAIT_TEXT.length;
  }

  return (PROPOSAL_BAIT_TEXT + content).length;
};

export const getIsProposalValidLength = (length: number = 0) => {
  if (length === 0) {
    return false;
  }

  return (length >= MIN_PROPOSAL_LENGTH && length <= MAX_PROPOSAL_LENGTH);
};
