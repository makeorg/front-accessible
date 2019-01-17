/* @flow */

import { getBaitText, MIN_PROPOSAL_LENGTH, MAX_PROPOSAL_LENGTH } from 'Constants/proposal';
import type { Proposal } from 'Types/proposal';

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

/**
 * Sort proposal by voted first
 * @param  {Array<Object>} proposals
 * @return {Array<Object>}
 */
export const sortProposalsByVoted = (proposals: Array<Object>): Array<Object> => (
  proposals.sort((first, second) => {
    const firstHasVoted = first.votes.some(vote => vote.hasVoted);
    const secondHasVoted = second.votes.some(vote => vote.hasVoted);

    return Number(secondHasVoted) - Number(firstHasVoted);
  })
);

/**
 * Search the first no voted proposal
 * @type {Object|null}
 */
export const searchFirstUnvotedProposal = (proposals: Array<Proposal>) => (
  proposals.find(proposal => proposal.votes.every(vote => vote.hasVoted === false))
);
