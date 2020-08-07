/* @flow */

import * as actionTypes from 'Shared/store/actionTypes';

export const modalClose = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_CLOSE });
};
export const modalShowLogin = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_LOGIN });
};

export const modalShowRegister = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_REGISTER });
};

export const modalShowForgotPassword = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.MODAL_SHOW_FORGOT_PASSWORD });
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
