// @flow
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { getBaitText } from 'Shared/constants/proposal';

/**
 * Propose
 *
 * @param {string} content
 * @param {string} questionId
 */
export const propose = async (content: string, questionId: string) => {
  const proposalContent = getBaitText() + content;

  return ProposalApiService.propose(proposalContent, questionId);
};
