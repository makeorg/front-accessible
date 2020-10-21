/* @flow */
import React from 'react';
import { LoginSuccessMessage } from 'Client/app/Notifications/Banner/LoginSuccess';
import {
  LOGIN_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
} from 'Shared/constants/notifications';
import { notifications } from './index';

describe('Notification reducer', () => {
  it('Return the initial state', () => {
    const expectedState = { banner: {}, tip: {}, dismissed: [] };

    expect(notifications(undefined, {})).toEqual(expectedState);
  });

  it('Close & Clear Notification', () => {
    const action = { type: 'CLOSE_NOTIFICATION_BANNER' };
    const previousState = {
      banner: {
        id: LOGIN_SUCCESS_MESSAGE,
        level: NOTIFICATION_LEVEL_SUCCESS,
        content: <LoginSuccessMessage />,
      },
    };

    const expectedState = { banner: {} };

    expect(notifications(previousState, action)).toEqual(expectedState);
  });
});
