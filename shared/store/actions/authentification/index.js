/* @flow */

import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/api/UserService';
import * as actionTypes from 'Shared/store/actionTypes';
import { pannelClose } from 'Shared/store/actions/pannel';
import { submitProposal } from 'Shared/store/actions/proposal';
import { Tracking } from 'Shared/services/Tracking';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = (error: string) => ({
  type: actionTypes.LOGIN_FAILURE,
  error,
});
export const loginSuccess = () => ({
  type: actionTypes.LOGIN_SUCCESS,
});
export const loginSocialRequest = (provider: string) => ({
  type: actionTypes.LOGIN_SOCIAL_REQUEST,
  provider,
});
export const loginSocialFailure = () => ({
  type: actionTypes.LOGIN_SOCIAL_FAILURE,
});
export const loginSocialSuccess = () => ({
  type: actionTypes.LOGIN_SOCIAL_SUCCESS,
});
export const setUserInfo = (user: Object) => ({
  type: actionTypes.GET_INFO,
  user,
});
export const logout = () => ({ type: actionTypes.LOGOUT });

export const getUser = () => (dispatch: Function, getState: Function) => {
  const { isPannelOpen } = getState().pannel;
  return UserService.me().then(user => {
    dispatch(setUserInfo(user));
    if (isPannelOpen) {
      dispatch(pannelClose());
    }

    Promise.resolve();
  });
};

export const login = (email: string, password: string) => (
  dispatch: Function,
  getState: Function
) => {
  dispatch(loginRequest());
  return UserService.login(email, password)
    .then(() => {
      dispatch(loginSuccess());
      Tracking.trackLoginEmailSuccess();

      return dispatch(getUser()).then(() => {
        const { canSubmit, content } = getState().proposal;
        if (canSubmit) {
          dispatch(submitProposal(content));
        }
      });
    })
    .catch(() => {
      dispatch(loginFailure(i18n.t('login.email_doesnot_exist')));
      Tracking.trackLoginEmailFailure();
    });
};

export const loginSocial = (provider: string, socialToken: string) => (
  dispatch: Function,
  getState: Function
) => {
  dispatch(loginSocialRequest(provider));
  return UserService.loginSocial(provider, socialToken)
    .then(() => {
      dispatch(loginSocialSuccess());
      Tracking.trackAuthentificationSocialSuccess(provider);

      return dispatch(getUser()).then(() => {
        const { canSubmit, content } = getState().proposal;

        if (canSubmit) {
          dispatch(submitProposal(content));
        }
      });
    })
    .catch(() => {
      dispatch(loginSocialFailure());
      Tracking.trackAuthentificationSocialFailure(provider);
    });
};
