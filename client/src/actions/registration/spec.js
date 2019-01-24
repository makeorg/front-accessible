/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actionTypes from 'Src/constants/actionTypes';
import UserService from 'Src/api/UserService';
import * as actions from './index';
import Tracking from 'Src/services/Tracking';

// mocks
jest.mock('Src/api/UserService')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Registration Actions', () => {
  beforeEach(function () {
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
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
      user: user
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
    const store = mockStore({
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

    return store.dispatch(actions.register(user)).then(() => {
      expect(Tracking.trackSignupEmailSuccess).toBeCalled()
      expect(store.getActions()).toEqual(expectedActions)
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
