/* @flow */
import {
  NOTIFICATION_CLOSE,
  NOTIFICATION_LOGIN_SUCCESS,
  NOTIFICATION_LOGOUT_SUCCESS,
  NOTIFICATION_REGISTER_SUCCESS,
  NOTIFICATION_ACCOUNT_DELETION_SUCCESS,
  NOTIFICATION_SECURE_EXPIRED,
} from 'Shared/store/actionTypes';
import {
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
  ACCOUNT_DELETION_SUCCESS_MESSAGE,
  SECURE_EXPIRED_MESSAGE,
} from 'Shared/constants/notification';

type NotificationState = {
  level?: string,
  contentType?: any,
};

const initialState = { level: undefined, contentType: undefined };
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
        level: NOTIFICATION_LEVEL_SUCCESS,
        contentType: REGISTER_SUCCESS_MESSAGE,
      };
    case NOTIFICATION_SECURE_EXPIRED:
      return {
        ...state,
        level: NOTIFICATION_LEVEL_INFORMATION,
        contentType: SECURE_EXPIRED_MESSAGE,
      };
    default:
      return state;
  }
}
