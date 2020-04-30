/* @flow */
import {
  NOTIFICATION_CLOSE,
  NOTIFICATION_LOGIN_SUCCESS,
  NOTIFICATION_LOGOUT_SUCCESS,
  NOTIFICATION_REGISTER_SUCCESS,
  NOTIFICATION_ACCOUNT_DELETION_SUCCESS,
  NOTIFICATION_SECURE_EXPIRED,
  NOTIFICATION_UNEXPECTED_ERROR,
  NOTIFICATION_NETWORK_ERROR,
  NOTIFICATION_VOTE_ONLY,
} from 'Shared/store/actionTypes';
import {
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
  NOTIFICATION_LEVEL_ALERT,
  ACCOUNT_DELETION_SUCCESS_MESSAGE,
  SECURE_EXPIRED_MESSAGE,
  REGISTER_SUCCESS_VALIDATE_MESSAGE,
  UNEXPECTED_ERROR_MESSAGE,
  NETWORK_ERROR_MESSAGE,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notification';

type NotificationState = {
  level?: string,
  contentType?: any,
  replacements?: Object,
};

const initialState = {
  level: undefined,
  contentType: undefined,
  replacements: undefined,
};
export function notification(
  state: NotificationState = initialState,
  action: Object
) {
  switch (action.type) {
    case NOTIFICATION_CLOSE:
      return {};
    case NOTIFICATION_ACCOUNT_DELETION_SUCCESS:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_SUCCESS,
        contentType: ACCOUNT_DELETION_SUCCESS_MESSAGE,
      };
    case NOTIFICATION_LOGIN_SUCCESS:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_SUCCESS,
        contentType: LOGIN_SUCCESS_MESSAGE,
      };
    case NOTIFICATION_LOGOUT_SUCCESS:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_SUCCESS,
        contentType: LOGOUT_SUCCESS_MESSAGE,
      };
    case NOTIFICATION_REGISTER_SUCCESS:
      return {
        ...state,
        level: action.user.emailVerified
          ? NOTIFICATION_LEVEL_SUCCESS
          : NOTIFICATION_LEVEL_ALERT,
        contentType: action.user.emailVerified
          ? REGISTER_SUCCESS_MESSAGE
          : REGISTER_SUCCESS_VALIDATE_MESSAGE,
        replacements: { email: action.user.email },
      };
    case NOTIFICATION_SECURE_EXPIRED:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_INFORMATION,
        contentType: SECURE_EXPIRED_MESSAGE,
      };
    case NOTIFICATION_UNEXPECTED_ERROR:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_ALERT,
        contentType: UNEXPECTED_ERROR_MESSAGE,
      };
    case NOTIFICATION_NETWORK_ERROR:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_ALERT,
        contentType: NETWORK_ERROR_MESSAGE,
      };
    case NOTIFICATION_VOTE_ONLY:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_INFORMATION,
        contentType: VOTE_ONLY_MESSAGE,
      };
    default:
      return state;
  }
}
