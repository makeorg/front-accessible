/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { type Dispatch } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import { type ProposalType } from 'Shared/types/proposal';
import { type QuestionType } from 'Shared/types/question';
import { SequenceService } from 'Shared/services/Sequence';
import { type SequenceCardType } from 'Shared/types/card';
import { type QualificationType } from 'Shared/types/qualification';
import { TopComponentContextValue } from 'Client/context/TopComponentContext';
import { type VoteType } from 'Shared/types/vote';

export const sequenceCollapse = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_COLLAPSE });

export const loadSequenceCards = (cards: SequenceCardType[]) => ({
  type: actionTypes.SEQUENCE_LOAD_CARDS,
  payload: { cards },
});

export const updateSequenceCardState = (
  index: number,
  newCardState: Object
) => ({
  type: actionTypes.SEQUENCE_UPDATE_CARD_STATE,
  payload: { index, newCardState },
});

export const resetSequenceVotedProposals = (questionSlug: string) => ({
  type: actionTypes.SEQUENCE_RESET_VOTED_PROPOSALS,
  payload: { questionSlug },
});

export const loadSequenceProposals = (proposals: ProposalType[]) => ({
  type: actionTypes.SEQUENCE_LOAD_PROPOSALS,
  payload: { proposals },
});

export const unloadSequenceProposals = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_UNLOAD_PROPOSALS });

// toDo: deprecated remove when deprecated sequence removed
export const fetchSequenceProposals = (
  questionId: string,
  includedProposalIds?: string[] = []
) => async (dispatch: any => void) => {
  const proposals = await SequenceService.startSequence(
    questionId,
    includedProposalIds
  );
  if (!proposals) {
    return null;
  }

  return dispatch(loadSequenceProposals(proposals));
};

export const resetSequenceIndex = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_RESET_INDEX });

export const resetFirstProposal = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_RESET_FIRST_PROPOSAL });

export const incrementSequenceIndex = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_INCREMENT_INDEX });

export const decrementSequenceIndex = () => (dispatch: Dispatch) =>
  dispatch({ type: actionTypes.SEQUENCE_DECREMENT_INDEX });

export const setSequenceIndex = (index: number) => ({
  type: actionTypes.SEQUENCE_SET_INDEX,
  payload: { index },
});

export const loadQuestion = (question: QuestionType) => ({
  type: actionTypes.QUESTION_LOAD,
  payload: { question },
});

export const unloadCurrentQuestion = () => ({
  type: actionTypes.QUESTION_UNLOAD,
});

export const unvote = (
  proposal: ProposalType,
  newVotes: VoteType[],
  context: string
) => (dispatch: Dispatch, getState: () => StateRoot) => {
  if (context !== TopComponentContextValue.getSequenceProposal()) {
    return;
  }
  const { cards, currentIndex } = getState().sequence;

  dispatch({
    type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
    payload: { proposalId: proposal.id, questionSlug: proposal.question.slug },
  });

  const proposalSequenceCard = cards[currentIndex];

  dispatch(
    updateSequenceCardState(currentIndex, {
      ...proposalSequenceCard.state,
      votes: newVotes,
    })
  );
};

export const vote = (
  proposal: ProposalType,
  newVotes: VoteType[],
  context: string
) => (dispatch: Dispatch, getState: () => StateRoot) => {
  if (context !== TopComponentContextValue.getSequenceProposal()) {
    return;
  }
  const { cards, currentIndex } = getState().sequence;

  dispatch({
    type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
    payload: { proposalId: proposal.id, questionSlug: proposal.question.slug },
  });

  const proposalSequenceCard = cards[currentIndex];
  dispatch(
    updateSequenceCardState(proposalSequenceCard.index, {
      ...proposalSequenceCard.state,
      votes: newVotes,
    })
  );
};

const getVotesUpdatedWithQualifification = (
  votes: VoteType[],
  votedKey: string,
  qualification: QualificationType
) => {
  const qualificationMatch = qualificationItem =>
    qualificationItem.qualificationKey === qualification.qualificationKey;

  const getUpdatedVote = voteItem => ({
    ...voteItem,
    qualifications: voteItem.qualifications.map(qualificationItem =>
      qualificationMatch(qualificationItem) ? qualification : qualificationItem
    ),
  });

  const newVotes = votes.map(voteItem =>
    voteItem.voteKey === votedKey && voteItem.hasVoted === true
      ? getUpdatedVote(voteItem)
      : voteItem
  );

  return newVotes;
};

export const qualify = (
  proposalId: string,
  votedKey: string,
  qualification: QualificationType,
  context: string
) => (dispatch: Dispatch, getState: () => StateRoot) => {
  if (context !== TopComponentContextValue.getSequenceProposal()) {
    return;
  }
  const { cards, currentIndex } = getState().sequence;
  const proposalSequenceCard = cards[currentIndex];
  const { votes } = proposalSequenceCard.state || { votes: [] };
  const newVotes = getVotesUpdatedWithQualifification(
    votes,
    votedKey,
    qualification
  );

  dispatch(
    updateSequenceCardState(proposalSequenceCard.index, {
      ...proposalSequenceCard.state,
      votes: newVotes,
    })
  );
};

export const unqualify = (
  proposalId: string,
  votedKey: string,
  qualification: QualificationType,
  context: string
) => (dispatch: Dispatch, getState: () => StateRoot) => {
  if (context !== TopComponentContextValue.getSequenceProposal()) {
    return;
  }
  const { cards, currentIndex } = getState().sequence;
  const proposalSequenceCard = cards[currentIndex];
  const { votes } = proposalSequenceCard.state || { votes: [] };
  const newVotes = getVotesUpdatedWithQualifification(
    votes,
    votedKey,
    qualification
  );

  dispatch(
    updateSequenceCardState(proposalSequenceCard.index, {
      ...proposalSequenceCard.state,
      votes: newVotes,
    })
  );
};
