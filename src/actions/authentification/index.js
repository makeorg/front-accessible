import i18next from 'i18next';
import UserService from '../../api/UserService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants/user';
import { pannelClose } from '../pannel';
import { submitProposal } from '../proposal';
import Tracking from '../../services/Tracking';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = error => ({ type: actionTypes.LOGIN_FAILURE, error });
export const loginSuccess = token => ({ type: actionTypes.LOGIN_SUCCESS, token });
export const loginSocialRequest = provider => ({ type: actionTypes.LOGIN_SOCIAL_REQUEST, provider });
export const loginSocialFailure = () => ({ type: actionTypes.LOGIN_SOCIAL_FAILURE });
export const loginSocialSuccess = token => ({ type: actionTypes.LOGIN_SOCIAL_SUCCESS, token });
export const getUserInfo = user => ({ type: actionTypes.GET_INFO, user });
export const logout = () => ({ type: actionTypes.LOGOUT });

export const login = (email, password) => (dispatch, getState) => {
  const { content, canSubmit, operationId } = getState().proposal;

  dispatch(loginRequest());
  return UserService.login(email, password)
    .then((token) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
      dispatch(loginSuccess(token));
      if (canSubmit) dispatch(submitProposal(content, operationId));

      Tracking.trackLoginEmailSuccess();

      return UserService.me();
    })
    .then((user) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      dispatch(getUserInfo(user));
      dispatch(pannelClose());
    })
    .catch(() => {
      dispatch(loginFailure(i18next.t('login.email_doesnot_exist')));
      Tracking.trackLoginEmailFailure();
    });
};

export const loginSocial = (provider, token) => (dispatch, getState) => {
  const { content, canSubmit, operationId } = getState().proposal;

  dispatch(loginSocialRequest(provider));
  return UserService.loginSocial(provider, token)
    .then((accessToken) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(accessToken));
      dispatch(loginSocialSuccess(accessToken));
      Tracking.trackAuthentificationSocialSuccess(provider);

      if (canSubmit) dispatch(submitProposal(content, operationId));

      return UserService.me();
    })
    .then((user) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      dispatch(getUserInfo(user));
      dispatch(pannelClose());
    })
    .catch(() => {
      dispatch(loginSocialFailure());
      Tracking.trackAuthentificationSocialFailure(provider);
    });
};
