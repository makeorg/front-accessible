/* @flow */

import * as actionTypes from '../../constants/actionTypes';
import { forgotPasswordInit } from '../forgotPassword';
import Tracking from '../../services/Tracking';

export const pannelClose = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.PANNEL_CLOSE });
  dispatch(forgotPasswordInit());
  Tracking.trackClickClosePannel();
};
export const pannelShowLogin = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_LOGIN });
  Tracking.trackDisplaySigninForm();
};

export const pannelShowRegister = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_REGISTER });
  Tracking.trackDisplaySignupForm();
};

export const pannelShowForgotPassword = () => (dispatch: Function) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD });
  Tracking.trackDisplayForgotPasswordForm();
};
