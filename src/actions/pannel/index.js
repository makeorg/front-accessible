import * as actionTypes from '../../constants/actionTypes';

export const closePannel = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_CLOSE });
};

export const showLogin = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_LOGIN });
};

export const showRegister = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_REGISTER });
};

export const showForgotPassword = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD });
};
