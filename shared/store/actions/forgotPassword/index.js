// @flow
import { i18n } from 'Shared/i18n';
import * as actionTypes from 'Shared/store/actionTypes';
import { UserService } from 'Shared/api/UserService';
import { type ErrorObject } from 'Shared/types/form';

export const forgotPasswordRequest = (email: string) => ({
  type: actionTypes.FORGOT_PASSWORD_REQUEST,
  email,
});
export const forgotPasswordSuccess = () => ({
  type: actionTypes.FORGOT_PASSWORD_SUCCESS,
});
export const forgotPasswordFailure = (errors: ErrorObject[]) => ({
  type: actionTypes.FORGOT_PASSWORD_FAILURE,
  errors,
});
export const forgotPasswordInit = () => ({
  type: actionTypes.FORGOT_PASSWORD_INIT,
});

export const forgotPassword = (email: string) => (dispatch: Function) => {
  dispatch(forgotPasswordRequest(email));
  return UserService.forgotPassword(email)
    .then(() => {
      dispatch(forgotPasswordSuccess());
    })
    .catch(errors => {
      const error: ErrorObject = {
        field: 'email',
        message: i18n.t('login.email_doesnot_exist'),
      };
      const errorMessages = errors === 404 ? [error] : errors;
      dispatch(forgotPasswordFailure(errorMessages));
    });
};
