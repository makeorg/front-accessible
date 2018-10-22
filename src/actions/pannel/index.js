import * as actionTypes from '../../constants/actionTypes';

export const pannelClose = () => dispatch => dispatch({ type: actionTypes.PANNEL_CLOSE });
export const pannelShowLogin = () => dispatch => dispatch({ type: actionTypes.PANNEL_SHOW_LOGIN });
export const pannelShowRegister = () => dispatch => dispatch({ type: actionTypes.PANNEL_SHOW_REGISTER });
export const pannelShowForgotPassword = () => dispatch => dispatch({ type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD });
