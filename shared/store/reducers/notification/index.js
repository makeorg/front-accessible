/* @flow */
import { NOTIFICATION_CLOSE } from 'Src/constants/actionTypes';
import { notificationConstants } from 'Shared/constants/notification';

type NotificationState = {
  contentType?: typeof notificationConstants
}

/*
const initialState = {
  contentType: notificationConstants.ACTIVATION_FAILURE_CONTENT
};
*/
const initialState = { contentType: undefined };
export function notificationReducer(state: NotificationState = initialState, action: Object) {
  switch (action.type) {
    case NOTIFICATION_CLOSE:
      return {};
    default:
      return state;
  }
}
