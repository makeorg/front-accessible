/* @flow */
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type SequenceType } from 'Shared/types/sequence';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';

export const startSequence = async (
  questionId: string,
  includedProposalIds: string[]
) => {
  const response: SequenceType = await QuestionApiService.startSequence(
    questionId,
    includedProposalIds
  );

  const { proposals } = response;

  // Order proposal by included first
  const orderedProposals: TypeProposal[] = proposals.sort(
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
