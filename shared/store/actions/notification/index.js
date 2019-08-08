import {
  NOTIFICATION_CLOSE,
  NOTIFICATION_LOGIN_SUCCESS,
  NOTIFICATION_LOGOUT_SUCCESS,
  NOTIFICATION_REGISTER_SUCCESS,
  NOTIFICATION_ACCOUNT_DELETION_SUCCESS,
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

export const showRegisterSuccess = () => (dispatch: Function) => {
  dispatch({ type: NOTIFICATION_REGISTER_SUCCESS });
};
