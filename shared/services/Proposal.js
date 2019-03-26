/* @flow */
import { ProposalService } from 'Shared/api/ProposalService';
import { getBaitText } from 'Shared/constants/proposal';

export const propose = async (content: string, questionId: string) => {
  const proposalContent = getBaitText() + content;

  return ProposalService.propose(proposalContent, questionId);
};
