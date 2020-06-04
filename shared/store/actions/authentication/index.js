/* @flow */

import { i18n } from 'Shared/i18n';
import { type Dispatch } from 'redux';
import { type ErrorObjectType } from 'Shared/types/api';
import * as actionTypes from 'Shared/store/actionTypes';
import { modalClose } from 'Shared/store/actions/modal';
import {
  trackLoginEmailSuccess,
  trackLoginEmailFailure,
  trackAuthenticationSocialSuccess,
  trackAuthenticationSocialFailure,
} from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import { Logger } from 'Shared/services/Logger';
import { UserService } from 'Shared/services/User';
import { type UserType, type UserProfileType } from 'Shared/types/user';
import { type OrganisationProfileType } from 'Shared/types/organisation';
import { type PersonalityProfileType } from 'Shared/types/personality';
import {
  showLoginSuccess,
  showLogoutSuccess,
  showAccountDeletionSuccess,
  showRegisterSuccess,
} from '../notification';

export const loginRequest = () => ({ type: actionTypes.LOGIN_REQUEST });
export const loginFailure = (error: ErrorObjectType) => ({
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
export const setUserInfo = (
  user: UserType,
  profile: UserProfileType | null
) => ({
  type: actionTypes.GET_INFO,
  user: {
    ...user,
    profile,
  },
});

export const logoutSuccess = () => ({ type: actionTypes.LOGOUT });

export const getUser = (afterRegistration?: boolean) => async (
  dispatch: Dispatch,
  getState: () => StateRoot
) => {
  const { isOpen: isModalOpen } = getState().modal;
  const user = await UserService.current();
  const profile:
    | UserProfileType
    | OrganisationProfileType
    | PersonalityProfileType = user
    ? await UserService.getProfileByUserType(user.userId, user.userType)
    : null;
  if (user) {
    dispatch(setUserInfo(user, profile));
  }
  if (isModalOpen) {
    dispatch(modalClose());
  }
  if (afterRegistration) {
    return dispatch(showRegisterSuccess(user));
  }

  return null;
};

export const login = (email: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginRequest());
  const success = (): void => {
    dispatch(loginSuccess());
    trackLoginEmailSuccess();
    dispatch(getUser());
    dispatch(showLoginSuccess());
  };
  const errors = (): void => {
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
  };

  UserService.login(email, password, success, errors);
};

export const loginSocial = (provider: string, socialToken: string) => (
  dispatch: Dispatch
) => {
  dispatch(loginSocialRequest(provider));
  if (!socialToken) {
    dispatch(loginSocialFailure());
    trackAuthenticationSocialFailure(provider);
    Logger.logInfo(`No token from ${provider} callBack auth`);

    return Promise.resolve();
  }

  const success = () => {
    dispatch(loginSocialSuccess());
    dispatch(getUser());
    dispatch(showLoginSuccess());
  };
  const failure = () => {
    dispatch(loginSocialFailure());
    trackAuthenticationSocialFailure(provider);
  };

  return UserService.loginSocial(provider, socialToken, success, failure).then(
    auth => {
      if (auth) {
        trackAuthenticationSocialSuccess(
          provider,
          auth.account_creation.toString()
        );
      }
    }
  );
};

export const logout = (afterAccountDeletion?: boolean) => (
  dispatch: Dispatch
) => {
  const success = () => {
    dispatch(logoutSuccess());
    if (afterAccountDeletion) {
      return dispatch(showAccountDeletionSuccess());
    }
    return dispatch(showLogoutSuccess());
  };

  return UserService.logout(success);
};
