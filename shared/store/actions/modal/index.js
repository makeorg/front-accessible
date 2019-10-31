/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';
import {
  trackClickCloseModal,
  trackDisplaySigninForm,
  trackDisplaySignupForm,
  trackDisplayForgotPasswordForm,
} from 'Shared/services/Tracking';

export const modalClose = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE });
  trackClickCloseModal();
};
export const modalShowLogin = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_LOGIN });
  trackDisplaySigninForm();
};

export const modalShowRegister = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_REGISTER });
  trackDisplaySignupForm();
};

export const modalShowForgotPassword = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_FORGOT_PASSWORD });
  trackDisplayForgotPasswordForm();
};

export const modalShowDepartmentForm = () => {
  return { type: actionTypes.MODAL_SHOW_DEPARTMENT_FORM };
  // We could ask tracking there ?
};

export const showSessionExpirationModal = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_SESSION_EXPIRATION });
};
export const closeSessionExpirationModal = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE_SESSION_EXPIRATION });
};
