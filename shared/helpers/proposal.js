/* @flow */

import {
  getBaitText,
  MIN_PROPOSAL_LENGTH,
  MAX_PROPOSAL_LENGTH,
  PROPOSALS_LISTING_LIMIT,
} from 'Shared/constants/proposal';
import { type ApiSearchProposalsResponseType } from 'Shared/types/api';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import {
  ProposalApiService,
  SORT_ALGORITHM,
} from 'Shared/api/ProposalApiService';
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
  country: string,
  language: string,
  content: string,
  page: number = 0,
  limit?: number = PROPOSALS_LISTING_LIMIT,
  seed: ?number = null,
  questionId?: string,
  tagsIds?: string,
  sortTypeKey?: string
): ApiSearchProposalsResponseType | Object => {
  const skip = page * limit;
  try {
    const response = await ProposalApiService.searchProposals(
      country,
      language,
      questionId,
      tagsIds,
      seed,
      limit,
      skip,
      sortTypeKey,
      content
    );

    return response;
  } catch (error) {
    Logger.logError(Error(error));
    return {};
  }
};

export const searchTaggedProposals = async (
  country: string,
  language: string,
  questionId: string,
  TagIdsArray: string[] = [],
  seed: ?number = undefined,
  page: number = 0,
  sortTypeKey?: string = SORT_ALGORITHM.TAGGED_FIRST.value
): ApiSearchProposalsResponseType | Object => {
  const limit = PROPOSALS_LISTING_LIMIT;
  const skip = page * limit;
  const tagsIds = TagIdsArray.length ? TagIdsArray.join(',') : undefined;
  try {
    const response = await ProposalApiService.searchProposals(
      country,
      language,
      questionId,
      tagsIds,
      seed,
      limit,
      skip,
      sortTypeKey
    );

    return response;
  } catch (error) {
    Logger.logError(Error(error));
    return {};
  }
};
