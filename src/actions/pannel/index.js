import * as actionTypes from '../../constants/actionTypes';
import { forgotPasswordInit } from '../forgotPassword';

export const pannelClose = () => (dispatch) => {
  dispatch({ type: actionTypes.PANNEL_CLOSE });
  dispatch(forgotPasswordInit());
};
export const pannelShowLogin = () => dispatch => dispatch({ type: actionTypes.PANNEL_SHOW_LOGIN });
export const pannelShowRegister = () => dispatch => dispatch({ type: actionTypes.PANNEL_SHOW_REGISTER });
export const pannelShowForgotPassword = () => dispatch => dispatch({ type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD });
