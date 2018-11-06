import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import i18next from 'i18next';
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('ForgotPassword Actions', () => {
  let sandbox;

  beforeEach(() => {
    store.clearActions();
    fetchMock.reset();
    fetchMock.restore();
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
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

      fetchMock
        .post('path:/user/reset-password/request-reset', 204);

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

      fetchMock
        .post('path:/user/reset-password/request-reset', 404)

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
