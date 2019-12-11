// @flow

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type ProposalAction } from 'Shared/types/action';
import { type StateProposal } from 'Shared/store/types';

export function proposal(
  state: StateProposal = initialState.proposal,
  action: ProposalAction
) {
  switch (action.type) {
    case actionTypes.PROPOSE_SUCCESS:
      return {
        ...state,
        hasProposed: true,
      };
    case actionTypes.PROPOSAL_LOAD:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.PROPOSAL_POPULAR_LOAD:
      return {
        ...state,
        popularProposals: action.payload,
      };
    default:
      return state;
  }
}
