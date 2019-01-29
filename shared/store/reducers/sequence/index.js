/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';

const initialState: Object = {
  isSequenceCollapsed: false,
  firstProposal: null,
  question: null,
  questionConfiguration: null,
  votedProposalIds: []
};

export default function sequence(state: Object = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.SEQUENCE_COLLAPSE:
      return {
        ...state,
        isSequenceCollapsed: true
      };
    case actionTypes.SEQUENCE_EXPAND:
      return {
        ...state,
        isSequenceCollapsed: false
      };
    case actionTypes.QUESTION_LOAD:
      return {
        ...state,
        question: action.payload.question
      };
    case actionTypes.QUESTION_CONFIGURATION_LOAD:
      return {
        ...state,
        questionConfiguration: action.payload.questionConfiguration
      };
    case actionTypes.SEQUENCE_PROPOSAL_VOTE:
      return {
        ...state,
        votedProposalIds: [...state.votedProposalIds, ...[action.payload.proposalId]]
      };
    case actionTypes.SEQUENCE_PROPOSAL_UNVOTE:
      return {
        ...state,
        votedProposalIds: state.votedProposalIds.filter(item => item !== action.payload.proposalId)
      };
    default:
      return state;
  }
}
