import * as actionTypes from '../../constants/actionTypes';
import { PROPOSAL_BAIT_TEXT } from '../../constants/proposal';

const initialState = {
  isWaiting: false,
  canSubmit: false,
  content: null,
  length: PROPOSAL_BAIT_TEXT.length,
  operationId: null,
  error: null
};

export default function proposal(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PROPOSE_TYPING:
      return {
        ...state,
        content: action.content,
        length: action.length,
        canSubmit: action.canSubmit
      };
    case actionTypes.PROPOSE_REQUEST:
      return {
        ...state,
        operationId: action.operationId,
        isWaiting: true
      };
    case actionTypes.PROPOSE_SUCCESS:
      return {
        ...state,
        ...initialState
      };
    case actionTypes.PROPOSE_FAILURE:
      return {
        ...state,
        error: action.error,
        isWaiting: true
      };
    default:
      return state;
  }
}
