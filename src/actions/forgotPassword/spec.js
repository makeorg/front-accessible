/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import i18next from 'i18next';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actionTypes from 'Constants/actionTypes';
import UserService from 'Api/UserService';
import * as actions from './index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('ForgotPassword Actions', () => {
  let sandbox;
  beforeEach(() => {
    store.clearActions();
    sandbox = sinon.createSandbox();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Forgot password Actions', () => {
    it('Creates an action forgotPasswordRequest', () => {
      const email = 'foo@example.com';
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_REQUEST,
        email
      };

      expect(actions.forgotPasswordRequest(email)).to.eql(expectedAction);
    });

    it('Creates an action forgotPasswordSuccess', () => {
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_SUCCESS
      };

      expect(actions.forgotPasswordSuccess()).to.eql(expectedAction);
    });

    it('Creates an action forgotPasswordFailure', () => {
      const errors = ['fooError'];
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_FAILURE,
        errors
      };

      expect(actions.forgotPasswordFailure(errors)).to.eql(expectedAction);
    });

    it('Creates an action forgotPasswordInit', () => {
      const expectedAction = {
        type: actionTypes.FORGOT_PASSWORD_INIT
      };

      expect(actions.forgotPasswordInit()).to.eql(expectedAction);
    });

    it('Creates an action to forgot password when success', () => {
      const email = 'foo@example.com';

      const userServiceForgotPasswordMock = sandbox.stub(UserService, 'forgotPassword');
      userServiceForgotPasswordMock.withArgs(email).returns(Promise.resolve());

      const expectedActions = [
        { type: actionTypes.FORGOT_PASSWORD_REQUEST, email },
        { type: actionTypes.FORGOT_PASSWORD_SUCCESS }
      ];

      return store.dispatch(actions.forgotPassword(email)).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('Creates an action to forgot password when failure', () => {
      const errorMessage = 'account does not exist';
      const i18nextStub = sandbox.stub(i18next, 't');
      i18nextStub.withArgs('login.email_doesnot_exist').returns(errorMessage);

      const errors = [errorMessage];
      const email = 'foo@example.com';

      const userServiceForgotPasswordMock = sandbox.stub(UserService, 'forgotPassword');
      userServiceForgotPasswordMock.withArgs(email).returns(Promise.reject(errors));

      const expectedActions = [
        { type: actionTypes.FORGOT_PASSWORD_REQUEST, email },
        { type: actionTypes.FORGOT_PASSWORD_FAILURE, errors }
      ];

      return store.dispatch(actions.forgotPassword(email)).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });
  });
});
