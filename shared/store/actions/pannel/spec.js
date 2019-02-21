/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Pannel Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Creates PANNEL_CLOSE when calling action', () => {
    const expectedActions = [
      { type: actionTypes.PANNEL_CLOSE },
      { type: actionTypes.FORGOT_PASSWORD_INIT }
    ];

    store.dispatch(actions.pannelClose());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates PANNEL_SHOW_LOGIN when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_LOGIN,
    }];

    store.dispatch(actions.pannelShowLogin());

    expect(store.getActions()).toEqual(expectedActions)
  });

  it('Creates PANNEL_SHOW_REGISTER when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_REGISTER,
    }];

    store.dispatch(actions.pannelShowRegister());

    expect(store.getActions()).toEqual(expectedActions)
  });

  it('Creates PANNEL_SHOW_FORGOT_PASSWORD when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PANNEL_SHOW_FORGOT_PASSWORD,
    }];

    store.dispatch(actions.pannelShowForgotPassword());

    expect(store.getActions()).toEqual(expectedActions)
  });
});
