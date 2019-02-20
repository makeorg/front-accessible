/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';

export function registration(state: Object = { user: null, errors: [] }, action: Object) {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        errors: []
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        errors: []
      };
    case actionTypes.REGISTER_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
}
