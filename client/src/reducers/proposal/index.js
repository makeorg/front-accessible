/* @flow */

import * as actionTypes from 'Constants/actionTypes';
import { getBaitText } from 'Constants/proposal';

const initialState: Object = {
  isTyping: false,
  canSubmit: false,
  hasProposed: false,
  isCurrentSubmitSuccess: false,
  content: '',
  length: getBaitText().length,
  questionId: null,
  error: null
};

export default function proposal(state: Object = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.PROPOSE_TYPING:
      return {
        ...state,
        isTyping: true,
        isCurrentSubmitSuccess: false,
        content: action.content,
        length: action.length,
        canSubmit: action.canSubmit
      };
    case actionTypes.PROPOSE_REQUEST:
      return {
        ...state,
        isTyping: false,
        questionId: action.questionId
      };
    case actionTypes.PROPOSE_SUCCESS:
      return {
        ...state,
        isTyping: false,
        canSubmit: false,
        isCurrentSubmitSuccess: true,
        content: '',
        length: getBaitText().length,
        hasProposed: true,
        questionId: null,
        error: null
      };
    case actionTypes.PROPOSE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.PROPOSAL_LOAD:
      return {
        ...state,
        proposal: action.proposal
      };
    default:
      return state;
  }
}
