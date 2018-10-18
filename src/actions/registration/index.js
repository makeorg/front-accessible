import UserService from '../../api/UserService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY } from '../../constants/user';
import { closePannel } from '../pannel';
import { login } from '../authentification';

export const registerRequest = () => ({ type: actionTypes.REGISTER_REQUEST });
export const registerSuccess = user => ({ type: actionTypes.REGISTER_SUCCESS, user });
export const registerFailure = errors => ({ type: actionTypes.REGISTER_FAILURE, errors });

export const register = user => (dispatch) => {
  dispatch(registerRequest(user));
  UserService.register(user)
    .then((userResonse) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(userResonse));
      dispatch(registerSuccess(userResonse));
      dispatch(login(user.email, user.password, true));
      dispatch(closePannel());
    })
    .catch((errors) => {
      dispatch(registerFailure(errors));
    });
};
