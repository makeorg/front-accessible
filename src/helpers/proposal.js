/* @flow */

import { getBaitText, MIN_PROPOSAL_LENGTH, MAX_PROPOSAL_LENGTH } from 'Constants/proposal';

export const getProposalLength = (content: string = '') => {
  if (content === '') {
    return getBaitText().length;
  }

  return (getBaitText() + content).length;
};

export const getIsProposalValidLength = (length: number = 0) => {
  if (length === 0) {
    return false;
  }

  return (length >= MIN_PROPOSAL_LENGTH && length <= MAX_PROPOSAL_LENGTH);
};
