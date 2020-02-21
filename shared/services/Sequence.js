/* @flow */
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type SequenceType } from 'Shared/types/sequence';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { Logger } from './Logger';

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

  // remove duplicates and voted
  const reducer = (accumulator: TypeProposal[], proposal: TypeProposal) => {
    if (
      accumulator.find(item => item.id === proposal.id) === undefined &&
      (proposal.votes.every(vote => vote.hasVoted === false) ||
        includedProposalIds.includes(proposal.id))
    ) {
      accumulator.push(proposal);
    }

    return accumulator;
  };

  // toDo: remove reducer when API deduplicate proposals and return only unvoted proposals
  const uniqueUnvotedProposals: TypeProposal[] = orderedProposals.reduce(
    reducer,
    []
  );
  if (orderedProposals.length !== uniqueUnvotedProposals) {
    Logger.logWarning(
      'start sequence return duplicates or voted proposals: fix that on API'
    );
  }
  if (uniqueUnvotedProposals.length === 0) {
    Logger.logError(`Empty sequence - questionId: ${questionId}`);
  }

  return uniqueUnvotedProposals;
};
