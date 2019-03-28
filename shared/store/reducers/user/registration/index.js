/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateRegistration } from 'Shared/store/types';

export function registration(
  state: StateRegistration = initialState.user.registration,
  action: Object
) {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        errors: [],
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        errors: [],
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
