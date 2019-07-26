/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateUserPasswordRecovery } from 'Shared/store/types';

export function passwordRecovery(
  state: StateUserPasswordRecovery = initialState.user.passwordRecovery,
  action: Object
) {
  switch (action.type) {
    case actionTypes.PASSWORD_RECOVERY_REQUEST:
      return {
        ...state,
        error: false,
        updated: false,
        newPassword: action.payload.newPassword,
        resetToken: action.payload.resetToken,
        userId: action.payload.userId,
      };
    case actionTypes.PASSWORD_RECOVERY_FAILURE:
      return {
        ...state,
        updated: false,
        errorMessage: action.payload.errorMessage,
        error: true,
      };
    case actionTypes.PASSWORD_RECOVERY_SUCCESS:
      return {
        ...state,
        ...initialState.user.passwordRecovery,
        updated: true,
      };
    default:
      return state;
  }
}
