/* @flow */
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type SequenceType } from 'Shared/types/sequence';
import { type ProposalType } from 'Shared/types/proposal';
import { Logger } from './Logger';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const startSequence = async (
  questionId: string,
  includedProposalIds: string[]
): Promise<?(ProposalType[])> => {
  const getProposals = await (async (): Promise<ProposalType[] | null> => {
    try {
      const response = await QuestionApiService.startSequence(
        questionId,
        includedProposalIds
      );
      const sequence: SequenceType = response.data;
      const { proposals } = sequence;

      return proposals;
    } catch (apiServiceError) {
      defaultUnexpectedError(apiServiceError);

      return null;
    }
  });
  const proposals = await getProposals();
  if (!proposals) {
    return null;
  }

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

  // remove duplicates and voted
  const reducer = (accumulator: ProposalType[], proposal: ProposalType) => {
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
  const uniqueUnvotedProposals: ProposalType[] = orderedProposals.reduce(
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

export const SequenceService = {
  startSequence,
};
