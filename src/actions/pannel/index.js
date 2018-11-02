import * as actionTypes from '../../constants/actionTypes';
import { forgotPasswordInit } from '../forgotPassword';
import Tracking from '../../services/Tracking';

export const pannelClose = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_CLOSE });
  dispatch(forgotPasswordInit());
  Tracking.trackClickClosePannel();
};
export const pannelShowLogin = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_LOGIN });
  Tracking.trackDisplayLoginPannel();
};

export const pannelShowRegister = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_REGISTER });
  Tracking.trackDisplaySignupPannel();
};

export const pannelShowForgotPassword = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD });
  Tracking.trackDisplayForgotPasswordPannel();
};
