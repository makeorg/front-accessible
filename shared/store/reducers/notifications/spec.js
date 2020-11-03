/* @flow */
import React from 'react';
import { LoginSuccessMessage } from 'Client/app/Notifications/Banner/LoginSuccess';
import { FirstVoteTip } from 'Client/app/Notifications/Tip/FirstVote';
import { TagsTip } from 'Client/app/Notifications/Tip/Tags';
import {
  LOGIN_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
  FIRST_VOTE_TIP,
  TAGS_TIP,
} from 'Shared/constants/notifications';
import { notifications } from './index';

describe('Notification reducer', () => {
  it('Return the initial state', () => {
    const expectedState = { banner: {}, tip: {}, dismissed: [] };

    expect(notifications(undefined, {})).toEqual(expectedState);
  });

  it('Closes & Clears Notification Banner', () => {
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

  it('Closes & Clears Notification Tip', () => {
    const action = { type: 'CLOSE_NOTIFICATION_TIP' };
    const previousState = {
      tip: {
        id: FIRST_VOTE_TIP,
        level: NOTIFICATION_LEVEL_INFORMATION,
        content: <FirstVoteTip />,
      },
    };

    const expectedState = { tip: {} };

    expect(notifications(previousState, action)).toEqual(expectedState);
  });

  it('Dismisses Notification', () => {
    const action = {
      type: 'DISMISS_NOTIFICATION',
      payload: { id: FIRST_VOTE_TIP },
    };
    const previousState = {
      dismissed: [],
    };

    const expectedState = {
      dismissed: [FIRST_VOTE_TIP],
    };

    expect(notifications(previousState, action)).toEqual(expectedState);
  });

  it('Displays Notification Banner', () => {
    const action = {
      type: 'DISPLAY_NOTIFICATION_BANNER',
      payload: {
        id: LOGIN_SUCCESS_MESSAGE,
        level: NOTIFICATION_LEVEL_SUCCESS,
        content: <LoginSuccessMessage />,
        toDismiss: true,
      },
    };

    const previousState = {
      banner: {},
    };

    const expectedState = {
      banner: {
        id: LOGIN_SUCCESS_MESSAGE,
        level: NOTIFICATION_LEVEL_SUCCESS,
        content: <LoginSuccessMessage />,
        toDismiss: true,
      },
    };
    expect(notifications(previousState, action)).toEqual(expectedState);
  });

  it('Displays Notification Tip', () => {
    const action = {
      type: 'DISPLAY_NOTIFICATION_TIP',
      payload: {
        id: TAGS_TIP,
        level: NOTIFICATION_LEVEL_INFORMATION,
        content: <TagsTip />,
        toDismiss: true,
      },
    };

    const previousState = {
      tip: {},
    };

    const expectedState = {
      tip: {
        id: TAGS_TIP,
        level: NOTIFICATION_LEVEL_INFORMATION,
        content: <TagsTip />,
        toDismiss: true,
      },
    };

    expect(notifications(previousState, action)).toEqual(expectedState);
  });
});
