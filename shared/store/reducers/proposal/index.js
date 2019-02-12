/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { getBaitText } from 'Shared/constants/proposal';
import { type ProposalAction } from 'Shared/types/action';
import { type StateProposal } from 'Shared/store/types';

export default function proposal(state: StateProposal = initialState.proposal, action: ProposalAction) {
  switch (action.type) {
    case actionTypes.PROPOSE_TYPING:
      return {
        ...state,
        isTyping: true,
        isCurrentSubmitSuccess: false,
        content: action.payload.content,
        length: action.payload.length,
        canSubmit: action.payload.canSubmit
      };
    case actionTypes.PROPOSE_REQUEST:
      return {
        ...state,
        isTyping: false,
        content: action.payload.content,
        questionId: action.payload.questionId
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
        questionId: undefined,
        error: undefined
      };
    case actionTypes.PROPOSE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.PROPOSAL_LOAD:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
