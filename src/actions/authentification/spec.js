/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Authentification Actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('Login Actions', () => {
    it('creates an action loginRequest', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_REQUEST,
      };

      expect(actions.loginRequest()).to.eql(expectedAction);
    });

    it('Creates an action loginFailure', () => {
      const error = 'fooError';
      const expectedAction = {
        type: actionTypes.LOGIN_FAILURE,
        error
      };

      expect(actions.loginFailure(error)).to.eql(expectedAction);
    });

    it('creates an action loginSuccess', () => {
      const token = { foo: 'bar' };
      const expectedAction = {
        type: actionTypes.LOGIN_SUCCESS,
        token
      };

      expect(actions.loginSuccess(token)).to.eql(expectedAction);
    });

    it('creates an action to login when success', () => {
      const token = { foo: 'bar' };
      const user = { firstname: 'baz' };
      const proposalIdResponse = { proposalId: 'baz' };
      const proposalContent = 'foo';
      const operationId = 'bar';
      const store = mockStore({
        proposal: {canSubmit: false},
        pannel: {isPannelOpen: false},
        authentification: {isLoggedIn: false}
      });

      fetchMock
        .post('path:/oauth/make_access_token', token)
        .post('path:/tracking/front', 204)
        .get('path:/user/me', user);

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_SUCCESS, token },
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.login('foo', 'bar')).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('creates an action to login when failure', () => {
      const error = undefined;
      const proposalContent = 'foo';
      const operationId = 'bar';
      const store = mockStore({
        proposal: {content: proposalContent},
        appConfig: {operationId}
      });

      fetchMock
        .post('path:/tracking/front', 204)
        .post('path:/oauth/make_access_token', 401)

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_FAILURE, error }
      ];

      return store.dispatch(actions.login()).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });
  });

  describe('login Social Actions', () => {
    it('creates an action loginSocialRequest', () => {
      const provider = 'fooProvider';
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_REQUEST,
        provider
      };

      expect(actions.loginSocialRequest(provider)).to.eql(expectedAction);
    });

    it('creates an action loginSocialFailure', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_FAILURE
      };

      expect(actions.loginSocialFailure()).to.eql(expectedAction);
    });

    it('creates an action loginSocialSuccess', () => {
      const token = 'fooToken';
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_SUCCESS,
        token
      };

      expect(actions.loginSocialSuccess(token)).to.eql(expectedAction);
    });

    it('creates an action to login social when success', () => {
      const store = mockStore({
        proposal: { canSubmit: false },
        authentification: { isLoggedIn: false },
        pannel: {isPannelOpen: false}
      });
      const token = { foo: 'bar' };
      const user = { firstname: 'baz' };
      const provider = 'fooProvider';
      const socialToken = 'fooToken';

      fetchMock
        .post('path:/user/login/social', token)
        .get('path:/user/me', user)
        .post('path:/tracking/front', 204)
      ;

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider: provider },
        { type: actionTypes.LOGIN_SOCIAL_SUCCESS, token },
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.loginSocial(provider, socialToken)).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('creates an action to login social when failure', () => {
      const proposalContent = 'foo';
      const operationId = 'bar';
      const store = mockStore({
        proposal: {content: proposalContent },
        appConfig: { operationId }
      });
      const barProvider = 'barProvider';

      fetchMock
        .post('path:/user/login/social', 401)
        .post('path:/tracking/front', 204)

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider: barProvider },
        { type: actionTypes.LOGIN_SOCIAL_FAILURE }
      ];

      return store.dispatch(actions.loginSocial(barProvider)).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });
  });

  describe('user info and logout Actions', () => {
    it('creates an action to get token information', () => {
      const token = {
        foo: 'abc',
        bar: 'dar'
      };
      const expectedAction = {
        type: actionTypes.GET_TOKEN,
        token
      };

      expect(actions.setUserToken(token)).to.eql(expectedAction);
    });

    it('creates an action to get user informations', () => {
      const user = {
        firstname: 'foo',
        lastname: 'bar'
      };
      const expectedAction = {
        type: actionTypes.GET_INFO,
        user
      };

      expect(actions.setUserInfo(user)).to.eql(expectedAction);
    });

    it('creates an action to logout a user', () => {
      const expectedAction = {
        type: actionTypes.LOGOUT
      };

      expect(actions.logout()).to.eql(expectedAction);
    });

    it('creates an action to getUser when pannel is open', () => {
      const user = { firstname: 'baz' };
      const store = mockStore({
        pannel: {
          isPannelOpen: true
        }
      });

      fetchMock
        .get('path:/user/me', user)
        .post('path:/tracking/front', 204);

      const expectedActions = [
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.PANNEL_CLOSE },
        { type: actionTypes.FORGOT_PASSWORD_INIT }
      ];

      return store.dispatch(actions.getUser()).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('creates an action to getUser when pannel is closed', () => {
      const user = { firstname: 'baz' };
      const store = mockStore({
        pannel: {
          isPannelOpen: false
        }
      });

      fetchMock
        .get('path:/user/me', user);

      const expectedActions = [
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.getUser()).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('creates an action to getToken', () => {
      const token = {foo: 'Bar'};
      const user = { firstname: 'bazaaaa' };
      const proposalContent = 'il faut blabla';
      const operationId = 'fooOperationId'
      const store = mockStore({
        appConfig: {operationId},
        proposal: {content: proposalContent},
        pannel: {isPannelOpen: false},
        authentification: {isLoggedIn: false}
      });

      fetchMock
        .get('path:/oauth/access_token', token)
        .get('path:/user/me', user)
        .post('path:/tracking/front', 204);

      const expectedActions = [
        { type: actionTypes.GET_TOKEN, token },
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.PROPOSE_REQUEST, content: proposalContent, operationId},
      ];

      return store.dispatch(actions.getToken()).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });
  });
});
