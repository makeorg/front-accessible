/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateForgotPassword } from 'Shared/store/types';

export function forgotPassword(
  state: StateForgotPassword = initialState.user.forgotPassword,
  action: Object
) {
  switch (action.type) {
    case actionTypes.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        errors: [],
        isSuccess: false,
      };
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        errors: [],
        isSuccess: true,
      };
    case actionTypes.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        errors: action.errors,
      };
    case actionTypes.FORGOT_PASSWORD_INIT:
      return {
        ...state,
        errors: [],
        isSuccess: false,
      };
    default:
      return state;
  }
}
