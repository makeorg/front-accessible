// @flow
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { getBaitText } from 'Shared/constants/proposal';
import {
  type Proposal as ProposalType,
  type ProposalsType,
} from 'Shared/types/proposal';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const propose = async (
  content: string,
  questionId: string,
  success: () => void,
  unexpectedError: () => void
): Promise<void> => {
  const proposalContent = getBaitText() + content;

  ProposalApiService.propose(proposalContent, questionId)
    .then(success)
    .catch(apiServiceError => {
      defaultUnexpectedError(apiServiceError);
      unexpectedError();
    });
};

const getProposal = async (proposalId: string): Promise<?ProposalType> => {
  try {
    const response = await ProposalApiService.getProposal(proposalId);

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const getPopularProposals = async (
  questionId: string
): Promise<?ProposalsType> => {
  try {
    const response = await ProposalApiService.getPopularProposals(questionId);

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

const searchProposals = async (
  country: string,
  language: string,
  questionId?: string,
  tagsIds?: string,
  seed?: ?number,
  limit?: number = 20,
  skip?: number = 0,
  sortTypeKey?: string,
  content?: string,
  ideaIds?: string,
  order?: string
): Promise<?ProposalsType> => {
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
      content,
      ideaIds,
      order
    );

    return response.data;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);

    return null;
  }
};

export const ProposalService = {
  propose,
  getProposal,
  getPopularProposals,
  searchProposals,
};
