import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Notification Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Creates NOTIFICATION_CLOSE when calling action', () => {
    const expectedActions = [{ type: actionTypes.NOTIFICATION_CLOSE }];

    store.dispatch(actions.clearNotification());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates NOTIFICATION_LOGIN_SUCCESS when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.NOTIFICATION_LOGIN_SUCCESS,
      },
    ];

    store.dispatch(actions.showLoginSuccess());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates NOTIFICATION_LOGOUT_SUCCESS when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.NOTIFICATION_LOGOUT_SUCCESS,
      },
    ];

    store.dispatch(actions.showLogoutSuccess());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates NOTIFICATION_REGISTER_SUCCESS when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.NOTIFICATION_REGISTER_SUCCESS,
      },
    ];

    store.dispatch(actions.showRegisterSuccess());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
