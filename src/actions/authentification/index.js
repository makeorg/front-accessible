import UserService from '../../api/UserService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants/user';
import { closePannel } from '../pannel';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = error => ({ type: actionTypes.LOGIN_FAILURE, error });
export const loginSuccess = token => ({ type: actionTypes.LOGIN_SUCCESS, token });
export const loginSocialRequest = provider => ({ type: actionTypes.LOGIN_SOCIAL_REQUEST, provider });
export const loginSocialFailure = () => ({ type: actionTypes.LOGIN_SOCIAL_FAILURE });
export const loginSocialSuccess = token => ({ type: actionTypes.LOGIN_SOCIAL_SUCCESS, token });
export const getUserInfo = user => ({ type: actionTypes.GET_INFO, user });
export const logout = () => ({ type: actionTypes.LOGOUT });

export const login = (email, password) => (dispatch) => {
  dispatch(loginRequest());
  UserService.login(email, password)
    .then((token) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
      dispatch(loginSuccess(token));
      return UserService.me();
    })
    .then((user) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      dispatch(getUserInfo(user));
      dispatch(closePannel());
    })
    .catch(() => {
      dispatch(loginFailure('Nous ne trouvons pas de compte associé à cet email.'));
    });
};

export const loginSocial = (provider, token) => (dispatch) => {
  dispatch(loginSocialRequest());
  UserService.loginSocial(provider, token)
    .then((accessToken) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(accessToken));
      dispatch(loginSocialSuccess(accessToken));

      return UserService.me();
    })
    .then((user) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      dispatch(getUserInfo(user));
      dispatch(closePannel());
    })
    .catch(() => {
      dispatch(loginSocialFailure());
    });
};
