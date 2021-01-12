// @flow

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateSequence } from 'Shared/store/types';

export function sequence(
  state: StateSequence = initialState.sequence,
  action: Object
) {
  switch (action.type) {
    case actionTypes.SEQUENCE_UPDATE_CARD_STATE: {
      const { cards } = state;
      cards[action.payload.index] = {
        ...cards[action.payload.index],
        state: action.payload.newCardState,
      };
      return {
        ...state,
        cards,
      };
    }
    case actionTypes.SEQUENCE_LOAD_CARDS:
      return {
        ...state,
        cards: action.payload.cards,
      };
    case actionTypes.SEQUENCE_RESET_VOTED_PROPOSALS:
      return {
        ...state,
        votedProposalIds: {
          ...state.votedProposalIds,
          [action.payload.questionSlug]: [],
        },
      };
    case actionTypes.SEQUENCE_LOAD_PROPOSALS:
      return {
        ...state,
        proposals: action.payload.proposals,
      };
    case actionTypes.SEQUENCE_UNLOAD_PROPOSALS:
      return {
        ...state,
        proposals: [],
      };
    case actionTypes.SEQUENCE_PROPOSAL_VOTE: {
      const oldProposalList =
        state.votedProposalIds[action.payload.questionSlug] || [];
      const newProposalList = [...oldProposalList, action.payload.proposalId];

      return {
        ...state,
        votedProposalIds: {
          ...state.votedProposalIds,
          [action.payload.questionSlug]: newProposalList,
        },
      };
    }
    case actionTypes.SEQUENCE_PROPOSAL_UNVOTE: {
      if (!state.votedProposalIds[action.payload.questionSlug]) {
        return state;
      }
      const newProposalList = state.votedProposalIds[
        action.payload.questionSlug
      ].filter(item => item !== action.payload.proposalId);

      return {
        ...state,
        votedProposalIds: {
          ...state.votedProposalIds,
          [action.payload.questionSlug]: newProposalList,
        },
      };
    }
    case actionTypes.SEQUENCE_RESET_INDEX:
      return {
        ...state,
        currentIndex: 0,
      };
    case actionTypes.SEQUENCE_SET_INDEX:
      return {
        ...state,
        currentIndex: action.payload.index || 0,
      };
    case actionTypes.SEQUENCE_INCREMENT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
      };
    case actionTypes.SEQUENCE_DECREMENT_INDEX:
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    default:
      return state;
  }
}
