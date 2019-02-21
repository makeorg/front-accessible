/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import { UserService } from 'Shared/api/UserService';
import { Tracking } from 'Shared/services/Tracking';
import * as actions from './index';

// mocks
jest.mock('Shared/api/UserService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Registration Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Creates PROPOSE_TYPING when calling action', () => {
    const expectedActions = [{
      type: actionTypes.REGISTER_REQUEST
    }];

    store.dispatch(actions.registerRequest());
    expect(store.getActions()).toEqual(expectedActions)
  });

  it('Creates REGISTER_SUCCESS when calling action', () => {
    const user = { firstname: 'foo' };
    const expectedActions = [{
      type: actionTypes.REGISTER_SUCCESS,
      user
    }];

    store.dispatch(actions.registerSuccess(user));
    expect(store.getActions()).toEqual(expectedActions)
  });

  it('Creates REGISTER_FAILURE when calling action', () => {
    const errors = ['fooError'];
    const expectedActions = [{
      type: actionTypes.REGISTER_FAILURE,
      errors
    }];

    store.dispatch(actions.registerFailure(errors));
    expect(store.getActions()).toEqual(expectedActions)
  });

  it('creates an action to register when success', () => {
    const newStore = mockStore({
      proposal: { canSubmit: false },
      authentification: { isLoggedIn: false }
    });

    const token = { foo: 'bar' };
    const user = {
      email: 'foo@example.com',
      password: 'baz'
    };

    // mocks
    UserService.register.mockResolvedValue(user);
    UserService.login.mockResolvedValue(token);
    // spy
    jest.spyOn(Tracking, 'trackSignupEmailSuccess');

    const expectedActions = [
      { type: actionTypes.REGISTER_REQUEST },
      { type: actionTypes.REGISTER_SUCCESS, user },
      { type: actionTypes.LOGIN_SUCCESS, token },
      { type: actionTypes.PANNEL_CLOSE },
      { type: actionTypes.FORGOT_PASSWORD_INIT }
    ];

    return newStore.dispatch(actions.register(user)).then(() => {
      expect(Tracking.trackSignupEmailSuccess).toBeCalled()
      expect(newStore.getActions()).toEqual(expectedActions)
    });
  });

  it('creates an action to register when failure', () => {
    const user = {
      email: 'foo@example.com',
      password: 'baz'
    };
    const errors = ['fooError'];

    // mock
    UserService.register.mockRejectedValue(['fooError']);
    // spy
    jest.spyOn(Tracking, 'trackSignupEmailSuccess');

    const expectedActions = [
      { type: actionTypes.REGISTER_REQUEST },
      { type: actionTypes.REGISTER_FAILURE, errors }
    ];

    return store.dispatch(actions.register(user)).then(() => {
      expect(Tracking.trackSignupEmailSuccess).toBeCalled()
      expect(store.getActions()).toEqual(expectedActions)
    });
  });
});
