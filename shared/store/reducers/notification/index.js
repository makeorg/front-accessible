/* @flow */
import {
  NOTIFICATION_CLOSE,
  NOTIFICATION_LOGIN_SUCCESS,
  NOTIFICATION_LOGOUT_SUCCESS,
  NOTIFICATION_REGISTER_SUCCESS,
} from 'Shared/store/actionTypes';
import {
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
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
    default:
      return state;
  }
}
