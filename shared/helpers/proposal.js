/* @flow */

import {
  getBaitText,
  MIN_PROPOSAL_LENGTH,
  MAX_PROPOSAL_LENGTH,
  PROPOSALS_LISTING_LIMIT,
} from 'Shared/constants/proposal';
import { type ApiSearchProposalsResponseType } from 'Shared/types/api';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { Logger } from 'Shared/services/Logger';

export const getProposalLength = (content: string = '') => {
  if (content === '') {
    return getBaitText().length;
  }

  return (getBaitText() + content).length;
};

export const proposalHasValidLength = (length: number = 0) => {
  if (length === 0) {
    return false;
  }

  return length >= MIN_PROPOSAL_LENGTH && length <= MAX_PROPOSAL_LENGTH;
};

/**
 * Sort proposal by voted first
 * @param  {TypeProposal[]} proposals
 * @return {TypeProposal[]}
 */
export const sortProposalsByVoted = (
  proposals: TypeProposal[]
): TypeProposal[] =>
  proposals.sort((first, second) => {
    const firstHasVoted = first.votes.some(vote => vote.hasVoted);
    const secondHasVoted = second.votes.some(vote => vote.hasVoted);

    return Number(secondHasVoted) - Number(firstHasVoted);
  });

/**
 * Search the first no voted proposal
 * @type {Object|undefined}
 */
export const searchFirstUnvotedProposal = (proposals: TypeProposal[]) =>
  proposals.find(proposal =>
    proposal.votes.every(vote => vote.hasVoted === false)
  );

export const searchProposals = async (
  questionId: string,
  TagIdsArray: string[] = [],
  seed: ?number = undefined,
  page: number = 0
): ApiSearchProposalsResponseType | Object => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;
  const tagsIds = TagIdsArray.length ? TagIdsArray.join(',') : undefined;
  try {
    const response = await ProposalApiService.searchProposals(
      questionId,
      tagsIds,
      seed,
      limit,
      skip
    );

    return response;
  } catch (error) {
    Logger.logError('searchProposals error', error);
    return {};
  }
};
