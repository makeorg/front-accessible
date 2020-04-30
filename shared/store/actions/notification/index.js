import {
  NOTIFICATION_CLOSE,
  NOTIFICATION_LOGIN_SUCCESS,
  NOTIFICATION_LOGOUT_SUCCESS,
  NOTIFICATION_REGISTER_SUCCESS,
  NOTIFICATION_ACCOUNT_DELETION_SUCCESS,
  NOTIFICATION_UNEXPECTED_ERROR,
  NOTIFICATION_NETWORK_ERROR,
  NOTIFICATION_VOTE_ONLY,
} from 'Shared/store/actionTypes';

export const clearNotification = () => ({ type: NOTIFICATION_CLOSE });

export const showLoginSuccess = () => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_LOGIN_SUCCESS });
};

export const showAccountDeletionSuccess = () => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_ACCOUNT_DELETION_SUCCESS });
};

export const showLogoutSuccess = () => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_LOGOUT_SUCCESS });
};

export const showRegisterSuccess = (user: Object) => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_REGISTER_SUCCESS, user });
};

export const showUnexpectedError = () => (dispatch: Function) => {
  if (
    typeof window !== 'undefined' &&
    window &&
    window.navigator &&
    window.navigator.onLine === false
  ) {
    dispatch({ type: NOTIFICATION_NETWORK_ERROR });
  } else {
    dispatch({ type: NOTIFICATION_UNEXPECTED_ERROR });
  }
};

export const showNetworkError = () => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_NETWORK_ERROR });
};

export const showVoteOnlyBanner = () => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_VOTE_ONLY });
};
