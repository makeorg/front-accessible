/* @flow */
import { type Dispatch } from 'redux';
import { type StateRoot } from 'Shared/store/types';
import { type ProposalType } from 'Shared/types/proposal';
import { type SequenceCardType } from 'Shared/types/card';
import { type QualificationType } from 'Shared/types/qualification';
import { TopComponentContextValue } from 'Client/context/TopComponentContext';
import { type VoteType } from 'Shared/types/vote';
import {
  SEQUENCE_DECREMENT_INDEX,
  SEQUENCE_DEMOGRAPHICS_ADD_QUESTION,
  SEQUENCE_DEMOGRAPHICS_PERSIST,
  SEQUENCE_INCREMENT_INDEX,
  SEQUENCE_LOAD_CARDS,
  SEQUENCE_LOAD_PROPOSALS,
  SEQUENCE_PROPOSAL_UNVOTE,
  SEQUENCE_PROPOSAL_VOTE,
  SEQUENCE_RESET_VOTED_PROPOSALS,
  SEQUENCE_SET_INDEX,
  SEQUENCE_UPDATE_CARD_STATE,
} from 'Shared/store/actionTypes';

export const loadSequenceCards = (cards: SequenceCardType[]) => ({
  type: SEQUENCE_LOAD_CARDS,
  payload: { cards },
});

export const updateSequenceCardState = (
  index: number,
  newCardState: Object
) => ({
  type: SEQUENCE_UPDATE_CARD_STATE,
  payload: { index, newCardState },
});

export const resetSequenceVotedProposals = (questionSlug: string) => ({
  type: SEQUENCE_RESET_VOTED_PROPOSALS,
  payload: { questionSlug },
});

export const loadSequenceProposals = (proposals: ProposalType[]) => ({
  type: SEQUENCE_LOAD_PROPOSALS,
  payload: { proposals },
});

export const incrementSequenceIndex = () => (dispatch: Dispatch) =>
  dispatch({ type: SEQUENCE_INCREMENT_INDEX });

export const decrementSequenceIndex = () => (dispatch: Dispatch) =>
  dispatch({ type: SEQUENCE_DECREMENT_INDEX });

export const setSequenceIndex = (index: number) => ({
  type: SEQUENCE_SET_INDEX,
  payload: { index },
});

export const unvote =
  (proposal: ProposalType, newVotes: VoteType[], context: string) =>
  (dispatch: Dispatch, getState: () => StateRoot) => {
    if (context !== TopComponentContextValue.getSequenceProposal()) {
      return;
    }
    const { cards, currentIndex } = getState().sequence;

    dispatch({
      type: SEQUENCE_PROPOSAL_UNVOTE,
      payload: {
        proposalId: proposal.id,
        questionSlug: proposal.question.slug,
      },
    });

    const proposalSequenceCard = cards[currentIndex];

    dispatch(
      updateSequenceCardState(currentIndex, {
        ...proposalSequenceCard.state,
        votes: newVotes,
      })
    );
  };

export const vote =
  (proposal: ProposalType, newVotes: VoteType[], context: string) =>
  (dispatch: Dispatch, getState: () => StateRoot) => {
    if (context !== TopComponentContextValue.getSequenceProposal()) {
      return;
    }
    const { cards, currentIndex } = getState().sequence;

    dispatch({
      type: SEQUENCE_PROPOSAL_VOTE,
      payload: {
        proposalId: proposal.id,
        questionSlug: proposal.question.slug,
      },
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

export const qualify =
  (
    proposalId: string,
    votedKey: string,
    qualification: QualificationType,
    context: string
  ) =>
  (dispatch: Dispatch, getState: () => StateRoot) => {
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

export const persistDemographics = (
  type: string,
  value: string,
  questionSlug: string
) => ({
  type: SEQUENCE_DEMOGRAPHICS_PERSIST,
  payload: { type, value, questionSlug },
});

export const addQuestionToDemographics = (questionSlug: string) => ({
  type: SEQUENCE_DEMOGRAPHICS_ADD_QUESTION,
  payload: { questionSlug },
});
