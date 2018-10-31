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

  describe('login Actions', () => {
    it('creates an action loginRequest', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_REQUEST,
      };

      expect(actions.loginRequest()).to.eql(expectedAction);
    });

    it('creates an action loginFailure', () => {
      const error = 'fooError';
      const expectedAction = {
        type: actionTypes.LOGIN_FAILURE,
        error
      };

      expect(actions.loginFailure(error)).to.eql(expectedAction);
    });

    it('creates an action loginSuccess', () => {
      const token = 'fooToken';
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
        proposal: {
          content: proposalContent,
          operationId
        },
        authentification: {
          isLoggedIn: false
        }
      });

      fetchMock
        .post('path:/oauth/make_access_token', token)
        .post('path:/proposals', proposalIdResponse)
        .get('path:/user/me', user);

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_SUCCESS, token },
        { type: actionTypes.PROPOSE_REQUEST, content: proposalContent, operationId},
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.PANNEL_CLOSE },
        { type: actionTypes.FORGOT_PASSWORD_INIT }
      ];

      return store.dispatch(actions.login('foo', 'bar')).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('creates an action to login when failure', () => {
      const error = undefined;
      const proposalContent = 'foo';
      const operationId = 'bar';
      const store = mockStore({ proposal: {content: proposalContent, operationId }});

      fetchMock
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
      const proposalContent = 'foo';
      const operationId = 'bar';
      const store = mockStore({
        proposal: { content: proposalContent, operationId },
        authentification: { isLoggedIn: false }
      });
      const token = { foo: 'bar' };
      const user = { firstname: 'baz' };
      const fooProvider = 'fooProvider';

      fetchMock
        .post('path:/user/login/social', token)
        .get('path:/user/me', user);

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider: fooProvider },
        { type: actionTypes.LOGIN_SOCIAL_SUCCESS, token },
        { type: actionTypes.PROPOSE_REQUEST, content: proposalContent, operationId},
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.PANNEL_CLOSE },
        { type: actionTypes.FORGOT_PASSWORD_INIT }
      ];

      return store.dispatch(actions.loginSocial(fooProvider)).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
    });

    it('creates an action to login social when failure', () => {
      const proposalContent = 'foo';
      const operationId = 'bar';
      const store = mockStore({ proposal: {content: proposalContent, operationId }});
      const barProvider = 'barProvider';

      fetchMock
        .post('path:/user/login/social', 401)

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
    it('creates an action to get user informations', () => {
      const user = {
        firstname: 'foo',
        lastname: 'bar'
      };
      const expectedAction = {
        type: actionTypes.GET_INFO,
        user
      };

      expect(actions.getUserInfo(user)).to.eql(expectedAction);
    });

    it('creates an action to logout a user', () => {
      const expectedAction = {
        type: actionTypes.LOGOUT
      };

      expect(actions.logout()).to.eql(expectedAction);
    });
  });
});
