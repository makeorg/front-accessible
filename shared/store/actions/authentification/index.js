/* @flow */

import { i18n } from 'Shared/i18n';
import { type Dispatch } from 'redux';
import { type TypeErrorObject } from 'Shared/types/api';
import { UserApiService } from 'Shared/api/UserApiService';
import * as actionTypes from 'Shared/store/actionTypes';
import { modalClose } from 'Shared/store/actions/modal';
import {
  trackLoginEmailSuccess,
  trackLoginEmailFailure,
  trackAuthentificationSocialSuccess,
  trackAuthentificationSocialFailure,
} from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import {
  showLoginSuccess,
  showLogoutSuccess,
  showAccountDeletionSuccess,
  showRegisterSuccess,
} from '../notification';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = (error: TypeErrorObject) => ({
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

export const getUser = (afterRegistration?: boolean) => (
  dispatch: Dispatch,
  getState: () => StateRoot
) => {
  const { isOpen: isModalOpen } = getState().modal;
  return UserApiService.me().then(user => {
    dispatch(setUserInfo(user));
    if (isModalOpen) {
      dispatch(modalClose());
    }
    if (afterRegistration) {
      return dispatch(showRegisterSuccess(user));
    }
    return dispatch(showLoginSuccess());
  });
};

export const login = (email: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginRequest());
  return UserApiService.login(email, password)
    .then(() => {
      dispatch(loginSuccess());
      trackLoginEmailSuccess();

      dispatch(getUser());
    })
    .catch(() => {
      dispatch(
        loginFailure({
          field: 'email',
          key: 'email_doesnot_exist',
          message: i18n.t('login.email_doesnot_exist', {
            emailLabel: `<label for="email">${i18n.t(
              'common.form.label.email'
            )}</label>`,
            passwordLabel: `<label for="password">${i18n.t(
              'common.form.label.password'
            )}</label>`,
          }),
        })
      );
      trackLoginEmailFailure();
    });
};

export const loginSocial = (provider: string, socialToken: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginSocialRequest(provider));
  return UserApiService.loginSocial(provider, socialToken)
    .then(() => {
      dispatch(loginSocialSuccess());
      trackAuthentificationSocialSuccess(provider);

      dispatch(getUser());
    })
    .catch(() => {
      dispatch(loginSocialFailure());
      trackAuthentificationSocialFailure(provider);
    });
};

export const logout = (afterAccountDeletion?: boolean) => (
  dispatch: Dispatch
) => {
  return UserApiService.logout().then(() => {
    dispatch(logoutSuccess());
    if (afterAccountDeletion) {
      return dispatch(showAccountDeletionSuccess());
    }
    return dispatch(showLogoutSuccess());
  });
};
