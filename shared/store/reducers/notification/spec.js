/* @flow */

import {
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
  REGISTER_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
} from 'Shared/constants/notification';
import { notification } from './index';

describe('Notification reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {};

    expect(notification(undefined, {})).toEqual(expectedState);
  });

  it('Show Login Success Notification', () => {
    const action = { type: 'NOTIFICATION_LOGIN_SUCCESS' };
    const previousState = {
      level: NOTIFICATION_LEVEL_INFORMATION,
      contentType: undefined,
    };

    const expectedState = {
      level: NOTIFICATION_LEVEL_SUCCESS,
      contentType: LOGIN_SUCCESS_MESSAGE,
    };

    expect(notification(previousState, action)).toEqual(expectedState);
  });

  it('Show Logout Success Notification', () => {
    const action = { type: 'NOTIFICATION_LOGOUT_SUCCESS' };
    const previousState = {
      level: NOTIFICATION_LEVEL_INFORMATION,
      contentType: undefined,
    };

    const expectedState = {
      level: NOTIFICATION_LEVEL_SUCCESS,
      contentType: LOGOUT_SUCCESS_MESSAGE,
    };

    expect(notification(previousState, action)).toEqual(expectedState);
  });

  it('Show Register Success Notification', () => {
    const action = { type: 'NOTIFICATION_REGISTER_SUCCESS' };
    const previousState = {
      level: NOTIFICATION_LEVEL_INFORMATION,
      contentType: undefined,
    };

    const expectedState = {
      level: NOTIFICATION_LEVEL_SUCCESS,
      contentType: REGISTER_SUCCESS_MESSAGE,
    };

    expect(notification(previousState, action)).toEqual(expectedState);
  });

  it('Close & Clear Notification', () => {
    const action = { type: 'NOTIFICATION_CLOSE' };
    const previousState = {
      level: NOTIFICATION_LEVEL_SUCCESS,
      contentType: REGISTER_SUCCESS_MESSAGE,
    };

    const expectedState = {};

    expect(notification(previousState, action)).toEqual(expectedState);
  });
});
