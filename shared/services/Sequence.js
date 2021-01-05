/* @flow */
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type SequenceType } from 'Shared/types/sequence';
import { type ProposalType } from 'Shared/types/proposal';
import { Logger } from './Logger';
import { defaultUnexpectedError } from './DefaultErrorHandler';

const startSequence = async (
  questionId: string,
  includedProposalIds: string[],
  zone?: string
): Promise<?(ProposalType[])> => {
  const getProposals = await (async (): Promise<ProposalType[] | null> => {
    try {
      const response = await QuestionApiService.startSequence(
        questionId,
        includedProposalIds,
        zone
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

      if (indexOfFirst !== -1 && indexOfSecond !== -1) {
        return indexOfFirst > indexOfSecond ? 1 : -1;
      }

      if (indexOfFirst !== -1) {
        return -1;
      }

      if (indexOfSecond !== -1) {
        return 1;
      }

      return 0;
    }
  );

  // remove duplicates and voted
  type Accumulator = {
    unique: ProposalType[],
    duplicates: ProposalType[],
    voted: ProposalType[],
  };
  const reducer = (accumulator: Accumulator, proposal: ProposalType) => {
    if (
      accumulator.unique.find(item => item.id === proposal.id) !== undefined
    ) {
      accumulator.duplicates.push(proposal);
    } else if (
      proposal.votes.some(vote => vote.hasVoted === true) &&
      !includedProposalIds.includes(proposal.id)
    ) {
      accumulator.voted.push(proposal);
    } else {
      accumulator.unique.push(proposal);
    }

    return accumulator;
  };

  // toDo: remove reducer when API deduplicate proposals and return only unvoted proposals
  const { unique, duplicates, voted } = orderedProposals.reduce(reducer, {
    unique: [],
    duplicates: [],
    voted: [],
  });
  if (duplicates.length > 0) {
    Logger.logWarning(
      `start sequence return duplicate proposals for questionId=${questionId} : ${JSON.stringify(
        duplicates
      )}`
    );
  }
  if (voted.length > 0) {
    Logger.logWarning(
      `start sequence return voted proposals for questionId=${questionId} : ${JSON.stringify(
        voted
      )}`
    );
  }
  if (unique.length === 0) {
    Logger.logError(`Empty sequence - questionId: ${questionId}`);
  }

  return unique;
};

export const SequenceService = {
  startSequence,
};
