/* @flow */

import * as actionTypes from 'Src/constants/actionTypes';

export default function forgotPassword(state: Object = { isSuccess: false, errors: [] }, action: Object) {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        errors: [],
        isSuccess: false
      };
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        errors: [],
        isSuccess: true
      };
    case actionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    case actionTypes.FORGOT_PASSWORD_INIT:
      return {
        ...state,
        errors: [],
        isSuccess: false
      };
    default:
      return state;
  }
}
