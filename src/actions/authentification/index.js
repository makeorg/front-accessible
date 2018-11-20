/* @flow */

import i18next from 'i18next';
import UserService from '../../api/UserService';
import * as actionTypes from '../../constants/actionTypes';
import { USER_LOCAL_STORAGE_KEY, TOKEN_LOCAL_STORAGE_KEY } from '../../constants/user';
import { pannelClose } from '../pannel';
import { submitProposal } from '../proposal';
import Tracking from '../../services/Tracking';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = (error: string) => ({ type: actionTypes.LOGIN_FAILURE, error });
export const loginSuccess = (token: Object) => ({ type: actionTypes.LOGIN_SUCCESS, token });
export const loginSocialRequest = (provider: string) => ({ type: actionTypes.LOGIN_SOCIAL_REQUEST, provider });
export const loginSocialFailure = () => ({ type: actionTypes.LOGIN_SOCIAL_FAILURE });
export const loginSocialSuccess = (token: Object) => ({ type: actionTypes.LOGIN_SOCIAL_SUCCESS, token });
export const setUserInfo = (user: Object) => ({ type: actionTypes.GET_INFO, user });
export const setUserToken = (token: Object) => ({ type: actionTypes.GET_TOKEN, token });
export const logout = () => ({ type: actionTypes.LOGOUT });

export const getUser = () => (dispatch: Function, getState: Function) => {
  const { isPannelOpen } = getState().pannel;
  return UserService.me()
    .then((user) => {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
      dispatch(setUserInfo(user));
      if (isPannelOpen) {
        dispatch(pannelClose());
      }

      Promise.resolve();
    });
};

export const getToken = () => (dispatch: Function, getState: Function) => {
  const { content } = getState().proposal;

  return UserService.getUserToken()
    .then((token) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
      dispatch(setUserToken(token));
      return dispatch(getUser()).then(() => dispatch(submitProposal(content)));
    });
};

export const login = (email: string, password: string) => (dispatch: Function, getState: Function) => {
  const { canSubmit } = getState().proposal;

  dispatch(loginRequest());
  return UserService.login(email, password)
    .then((token) => {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
      dispatch(loginSuccess(token));
      Tracking.trackLoginEmailSuccess();

      return dispatch(getUser()).then(() => {
        if (canSubmit) {
          const { content } = getState().proposal;

          dispatch(submitProposal(content));
        }
      });
    })
    .catch(() => {
      dispatch(loginFailure(i18next.t('login.email_doesnot_exist')));
      Tracking.trackLoginEmailFailure();
    });
};

export const loginSocial = (provider: string, socialToken: string) => (dispatch: Function, getState: Function) => {
  const { canSubmit } = getState().proposal;

  dispatch(loginSocialRequest(provider));
  return UserService.loginSocial(provider, socialToken)
    .then((token) => {
      dispatch(loginSocialSuccess(token));
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, JSON.stringify(token));
      Tracking.trackAuthentificationSocialSuccess(provider);

      return dispatch(getUser()).then(() => {
        if (canSubmit) {
          const { content } = getState().proposal;
          dispatch(submitProposal(content));
        }
      });
    })
    .catch(() => {
      dispatch(loginSocialFailure());
      Tracking.trackAuthentificationSocialFailure(provider);
    });
};
