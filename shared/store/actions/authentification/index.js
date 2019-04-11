/* @flow */

import { i18n } from 'Shared/i18n';
import { type Dispatch } from 'redux';
import { UserService } from 'Shared/api/UserService';
import * as actionTypes from 'Shared/store/actionTypes';
import { modalClose } from 'Shared/store/actions/modal';
import { Tracking } from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = (error: Object) => ({
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

export const logoutSuccess = () => ({ type: actionTypes.LOGOUT });

export const getUser = () => (
  dispatch: Dispatch,
  getState: () => StateRoot
) => {
  const { isOpen: isModalOpen } = getState().modal;
  return UserService.me().then(user => {
    dispatch(setUserInfo(user));
    if (isModalOpen) {
      dispatch(modalClose());
    }

    Promise.resolve();
  });
};

export const login = (email: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginRequest());
  return UserService.login(email, password)
    .then(() => {
      dispatch(loginSuccess());
      Tracking.trackLoginEmailSuccess();

      return dispatch(getUser());
    })
    .catch(() => {
      dispatch(
        loginFailure({
          field: 'email',
          message: i18n.t('login.email_doesnot_exist'),
        })
      );
      Tracking.trackLoginEmailFailure();
    });
};

export const loginSocial = (provider: string, socialToken: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginSocialRequest(provider));
  return UserService.loginSocial(provider, socialToken)
    .then(() => {
      dispatch(loginSocialSuccess());
      Tracking.trackAuthentificationSocialSuccess(provider);

      return dispatch(getUser());
    })
    .catch(() => {
      dispatch(loginSocialFailure());
      Tracking.trackAuthentificationSocialFailure(provider);
    });
};

export const logout = () => (dispatch: Dispatch) => {
  return UserService.logout().then(() => {
    return dispatch(logoutSuccess());
  });
};
