/* @flow */

import i18next from 'i18next';
import * as actionTypes from '../../constants/actionTypes';
import UserService from '../../api/UserService';

export const forgotPasswordRequest = (email: string) => ({ type: actionTypes.FORGOT_PASSWORD_REQUEST, email });
export const forgotPasswordSuccess = () => ({ type: actionTypes.FORGOT_PASSWORD_SUCCESS });
export const forgotPasswordFailure = (errors: Array<Object>) => ({ type: actionTypes.FORGOT_PASSWORD_FAILURE, errors });
export const forgotPasswordInit = () => ({ type: actionTypes.FORGOT_PASSWORD_INIT });

export const forgotPassword = (email: string) => (dispatch: Function) => {
  dispatch(forgotPasswordRequest(email));
  return UserService.forgotPassword(email)
    .then(() => {
      dispatch(forgotPasswordSuccess());
    })
    .catch((errors) => {
      const errorMessages = (errors === 404) ? [i18next.t('login.email_doesnot_exist')] : errors;
      dispatch(forgotPasswordFailure(errorMessages));
    });
};
