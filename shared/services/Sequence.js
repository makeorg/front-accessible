/* @flow */
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { type ProposalType } from 'Shared/types/proposal';
import { Logger } from './Logger';
import { defaultUnexpectedError } from './DefaultErrorHandler';

type Accumulator = {
  unique: ProposalType[],
  duplicates: ProposalType[],
  voted: ProposalType[],
};

type SequenceByZoneResponse = {
  proposals: ProposalType[],
  key: string,
  label: string,
};

const getOrderedProposals = (
  proposals: ProposalType[],
  includedProposalIds: string[]
) => {
  const sortedProposals = proposals.sort((firstProposal, secondProposal) => {
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
  });

  return sortedProposals;
};

// remove duplicates and voted
const removeDuplicatedAndVotedProposals = (
  accumulator: Accumulator,
  proposal: ProposalType,
  includedProposalIds: string[]
) => {
  if (accumulator.unique.find(item => item.id === proposal.id) !== undefined) {
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

const logCornerCases = (
  questionId,
  duplicates: ProposalType[],
  voted: ProposalType[],
  unique: ProposalType[]
) => {
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
};

const startSequenceByZone = async (
  questionId: string,
  includedProposalIds: string[],
  zone: string
): Promise<?SequenceByZoneResponse> => {
  try {
    const { data } = await QuestionApiService.startSequenceByZone(
      questionId,
      includedProposalIds,
      zone
    );
    const orderedProposals = getOrderedProposals(
      data.proposals,
      includedProposalIds
    );
    const { unique, duplicates, voted } = orderedProposals.reduce(
      removeDuplicatedAndVotedProposals,
      {
        unique: [],
        duplicates: [],
        voted: [],
      }
    );

    logCornerCases(questionId, duplicates, voted, unique);

    const response = {
      proposals: unique,
    };

    return response;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    return null;
  }
};

const startSequenceByKeyword = async (
  questionId: string,
  includedProposalIds: string[],
  keyword: string
): Promise<?(ProposalType[])> => {
  try {
    const { data } = await QuestionApiService.startSequenceByKeyword(
      questionId,
      includedProposalIds,
      keyword
    );
    const orderedProposals = getOrderedProposals(
      data.proposals,
      includedProposalIds
    );
    const { unique, duplicates, voted } = orderedProposals.reduce(
      removeDuplicatedAndVotedProposals,
      {
        unique: [],
        duplicates: [],
        voted: [],
      }
    );

    logCornerCases(questionId, duplicates, voted, unique);

    const response = {
      proposals: unique,
      label: data.label,
      key: data.key,
    };

    return response;
  } catch (apiServiceError) {
    defaultUnexpectedError(apiServiceError);
    return null;
  }
};

export const SequenceService = {
  startSequenceByZone,
  startSequenceByKeyword,
};
