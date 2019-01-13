/* @flow */
import * as actionTypes from 'Constants/actionTypes';

const initalState = {
  newPassword: undefined,
  resetToken: undefined,
  userId: undefined,
  errorMessage: undefined,
  error: false,
  updated: false
};
export function passwordRecovery(
  state: Object = initalState,
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
        userId: action.payload.userId
      };
    case actionTypes.PASSWORD_RECOVERY_FAILURE:
      return {
        ...state,
        updated: false,
        errorMessage: action.payload.errorMessage,
        error: true
      };
    case actionTypes.PASSWORD_RECOVERY_SUCCESS:
      return {
        ...state,
        ...initalState,
        updated: true
      };
    default:
      return state;
  }
}
