/* @flow */

import * as actionTypes from 'Constants/actionTypes';
import { PROPOSAL_BAIT_TEXT } from 'Constants/proposal';

const initialState: Object = {
  isTyping: false,
  canSubmit: false,
  isSubmitSuccess: false,
  content: '',
  length: PROPOSAL_BAIT_TEXT.length,
  operationId: null,
  error: null
};

export default function proposal(state: Object = initialState, action: Object) {
  switch (action.type) {
    case actionTypes.PROPOSE_TYPING:
      return {
        ...state,
        isTyping: true,
        isSubmitSuccess: false,
        content: action.content,
        length: action.length,
        canSubmit: action.canSubmit
      };
    case actionTypes.PROPOSE_REQUEST:
      return {
        ...state,
        isTyping: false,
        operationId: action.operationId
      };
    case actionTypes.PROPOSE_SUCCESS:
      return {
        ...state,
        ...initialState,
        isSubmitSuccess: true
      };
    case actionTypes.PROPOSE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
