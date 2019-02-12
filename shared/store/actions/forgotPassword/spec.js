/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actionTypes from 'Shared/store/actionTypes';
import UserService from 'Shared/api/UserService';
import * as actions from './index';

jest.mock('Shared/api/UserService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('ForgotPassword Actions', () => {
  beforeEach(() => {
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  describe('Forgot password Actions', () => {
    it('Creates an action forgotPasswordRequest', () => {
      const email = 'foo@example.com';
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_REQUEST,
        email
      };

      expect(actions.forgotPasswordRequest(email)).toEqual(expectedAction);
    });

    it('Creates an action forgotPasswordSuccess', () => {
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_SUCCESS
      };

      expect(actions.forgotPasswordSuccess()).toEqual(expectedAction);
    });

    it('Creates an action forgotPasswordFailure', () => {
      const errors = ['fooError'];
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_FAILURE,
        errors
      };

      expect(actions.forgotPasswordFailure(errors)).toEqual(expectedAction);
    });

    it('Creates an action forgotPasswordInit', () => {
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_INIT
      };

      expect(actions.forgotPasswordInit()).toEqual(expectedAction);
    });

    it('Creates an action to forgot password when success', () => {
      const email = 'foo@example.com';
      UserService.forgotPassword.mockResolvedValue()

      const expectedActions = [
        { type: actionTypes.FORGOT_PASSWORD_REQUEST, email },
        { type: actionTypes.FORGOT_PASSWORD_SUCCESS }
      ];

      return store.dispatch(actions.forgotPassword(email)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('Creates an action to forgot password when failure', () => {
      const errorMessage = 'account does not exist';

      const errors = [errorMessage];
      const email = 'foo@example.com';

      UserService.forgotPassword.mockRejectedValue(errors);

      const expectedActions = [
        { type: actionTypes.FORGOT_PASSWORD_REQUEST, email },
        { type: actionTypes.FORGOT_PASSWORD_FAILURE, errors }
      ];

      return store.dispatch(actions.forgotPassword(email)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });
  });
});
