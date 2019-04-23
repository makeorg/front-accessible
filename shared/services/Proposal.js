// @flow
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import * as QuestionService from 'Shared/services/Question';
import { Logger } from 'Shared/services/Logger';
import { getBaitText } from 'Shared/constants/proposal';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';

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

/**
 * Enrich proposals with questions
 *
 * @param {TypeProposal[]} proposals
 *
 * @todo question object must be in proposal response
 */
export const enrichProposalsWithQuestion = async (
  proposals: TypeProposal[]
): Promise<TypeProposal[]> => {
  const questionsIds: string[] = [
    ...new Set(
      proposals.map(proposal => {
        return proposal.questionId;
      })
    ),
  ];

  const questions = await QuestionService.getQuestions(questionsIds);

  if (!questions) {
    Logger.logError(Error(`Questions load fail for ${questionsIds.join(',')}`));
    return proposals;
  }

  const enrichedProposalProposals = proposals.map(proposal => {
    const enrichedProposal = {
      ...proposal,
      question: questions.find(
        question => question.questionId === proposal.questionId
      ),
    };
    return enrichedProposal;
  });

  return enrichedProposalProposals;
};
