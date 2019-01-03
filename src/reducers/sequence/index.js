/* @flow */

import * as actionTypes from 'Constants/actionTypes';

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
        question: action.question
      };
    case actionTypes.QUESTION_CONFIGURATION_LOAD:
      return {
        ...state,
        questionConfiguration: action.questionConfiguration
      };
    case actionTypes.SEQUENCE_PROPOSAL_VOTE:
      return {
        ...state,
        votedProposalIds: [...state.votedProposalIds, ...[action.proposalId]]
      };
    case actionTypes.SEQUENCE_PROPOSAL_UNVOTE:
      return {
        ...state,
        votedProposalIds: state.votedProposalIds.filter(item => item !== action.proposalId)
      };
    default:
      return state;
  }
}
