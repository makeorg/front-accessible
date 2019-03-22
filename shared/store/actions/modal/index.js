/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import { Tracking } from 'Shared/services/Tracking';
import { forgotPasswordInit } from 'Shared/store/actions/forgotPassword';

export const modalClose = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE });
  dispatch(forgotPasswordInit());
  Tracking.trackClickCloseModal();
};
export const modalShowLogin = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_LOGIN });
  Tracking.trackDisplaySigninForm();
};

export const modalShowRegister = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_REGISTER });
  Tracking.trackDisplaySignupForm();
};

export const modalShowForgotPassword = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_FORGOT_PASSWORD });
  Tracking.trackDisplayForgotPasswordForm();
};
