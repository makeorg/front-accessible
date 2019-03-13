/* @flow */

import {
  getBaitText,
  MIN_PROPOSAL_LENGTH,
  MAX_PROPOSAL_LENGTH,
} from 'Shared/constants/proposal';
import { type ProposalType } from 'Shared/types/proposal';
import { ProposalService } from 'Shared/api/ProposalService';
import { Logger } from 'Shared/services/Logger';

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

  return length >= MIN_PROPOSAL_LENGTH && length <= MAX_PROPOSAL_LENGTH;
};

/**
 * Sort proposal by voted first
 * @param  {Array<Object>} proposals
 * @return {Array<Object>}
 */
export const sortProposalsByVoted = (proposals: Array<Object>): Array<Object> =>
  proposals.sort((first, second) => {
    const firstHasVoted = first.votes.some(vote => vote.hasVoted);
    const secondHasVoted = second.votes.some(vote => vote.hasVoted);

    return Number(secondHasVoted) - Number(firstHasVoted);
  });

/**
 * Search the first no voted proposal
 * @type {Object|undefined}
 */
export const searchFirstUnvotedProposal = (proposals: Array<ProposalType>) =>
  proposals.find(proposal =>
    proposal.votes.every(vote => vote.hasVoted === false)
  );

export const searchProposals = async (
  questionId: string,
  TagIdsArray: string[]
) => {
  const tagsIds = TagIdsArray.length ? TagIdsArray.join(',') : undefined;

  try {
    const response = await ProposalService.searchProposals(questionId, tagsIds);

    return response.results;
  } catch (error) {
    Logger.logError('searchProposals error', error);
    return [];
  }
};
