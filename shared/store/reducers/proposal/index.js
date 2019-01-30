/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { getBaitText } from 'Shared/constants/proposal';

export default function proposal(state: Object = initialState.proposal, action: Object) {
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
