import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import { LoginSuccessMessage } from 'Client/app/Notifications/Banner/LoginSuccess';
import { TagsTip } from 'Client/app/Notifications/Tip/Tags';
import {
  LOGIN_SUCCESS_MESSAGE,
  NOTIFICATION_LEVEL_SUCCESS,
  NOTIFICATION_LEVEL_INFORMATION,
  FIRST_VOTE_TIP,
  TAGS_TIP,
} from 'Shared/constants/notifications';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Notification Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Creates CLOSE_NOTIFICATION_BANNER when calling action', () => {
    const expectedActions = [{ type: actionTypes.CLOSE_NOTIFICATION_BANNER }];

    store.dispatch(actions.clearNotificationBanner());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates CLOSE_NOTIFICATION_TIP when calling action', () => {
    const expectedActions = [{ type: actionTypes.CLOSE_NOTIFICATION_TIP }];

    store.dispatch(actions.clearNotificationTip());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates DISMISS_NOTIFICATION when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.DISMISS_NOTIFICATION,
        payload: { id: FIRST_VOTE_TIP },
      },
    ];

    store.dispatch(actions.dismissNotification(FIRST_VOTE_TIP));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates DISPLAY_NOTIFICATION_BANNER when calling action', () => {
    const tagContent = <LoginSuccessMessage />;
    const tagToDismiss = true;

    const expectedActions = [
      {
        type: actionTypes.DISPLAY_NOTIFICATION_BANNER,
        payload: {
          id: LOGIN_SUCCESS_MESSAGE,
          content: tagContent,
          level: NOTIFICATION_LEVEL_SUCCESS,
          toDismiss: tagToDismiss,
        },
      },
    ];

    store.dispatch(
      actions.displayNotificationBanner(
        LOGIN_SUCCESS_MESSAGE,
        tagContent,
        NOTIFICATION_LEVEL_SUCCESS,
        tagToDismiss
      )
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates DISPLAY_NOTIFICATION_TIP when calling action', () => {
    const tagContent = <TagsTip />;
    const tagToDismiss = true;

    const expectedActions = [
      {
        type: actionTypes.DISPLAY_NOTIFICATION_TIP,
        payload: {
          id: TAGS_TIP,
          content: tagContent,
          level: NOTIFICATION_LEVEL_INFORMATION,
          toDismiss: tagToDismiss,
        },
      },
    ];

    store.dispatch(
      actions.displayNotificationTip(
        TAGS_TIP,
        tagContent,
        NOTIFICATION_LEVEL_INFORMATION,
        tagToDismiss
      )
    );

    expect(store.getActions()).toEqual(expectedActions);
  });
});
