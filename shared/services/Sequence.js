/* @flow */
import { QuestionService } from 'Shared/api/QuestionService';
import { type SequenceType } from 'Shared/types/sequence';
import { type ProposalType } from 'Shared/types/proposal';

export const startSequence = async (
  questionId: string,
  includedProposalIds: string[]
) => {
  const response: SequenceType = await QuestionService.startSequence(
    questionId,
    includedProposalIds
  );

  const { proposals } = response;

  // Order proposal by included first
  const orderedProposals: ProposalType[] = proposals.sort(
    (firstProposal, secondProposal) => {
      const indexOfFirst = includedProposalIds.indexOf(firstProposal.id);
      const indexOfSecond = includedProposalIds.indexOf(secondProposal.id);

      if (indexOfFirst === -1) {
        return 1;
      }

      if (indexOfSecond === -1) {
        return -1;
      }

      return indexOfFirst - indexOfSecond;
    }
  );

  return orderedProposals;
};
