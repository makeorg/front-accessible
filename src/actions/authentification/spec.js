/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actionTypes from 'Constants/actionTypes';
import UserService from 'Api/UserService';
import Tracking from 'Services/Tracking';
import * as actions from './index';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Authentification Actions', () => {
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

  describe('Login Actions', () => {
    it('creates an action loginRequest', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_REQUEST,
      };

      expect(actions.loginRequest()).toEqual(expectedAction);
    });

    it('Creates an action loginFailure', () => {
      const error = 'fooError';
      const expectedAction = {
        type: actionTypes.LOGIN_FAILURE,
        error
      };

      expect(actions.loginFailure(error)).toEqual(expectedAction);
    });

    it('creates an action loginSuccess', () => {
      const token = { foo: 'bar' };
      const expectedAction = {
        type: actionTypes.LOGIN_SUCCESS,
        token
      };

      expect(actions.loginSuccess(token)).toEqual(expectedAction);
    });

    it('creates an action to login when success', () => {
      const proposalIdResponse = { proposalId: 'baz' };
      const proposalContent = 'foo';
      const questionId = 'bar';
      const token = { foo: 'bar' };
      const user = { email: 'baz@make.org', password: 'foo' };

      const store = mockStore({
        proposal: { canSubmit: false },
        pannel: { isPannelOpen: false },
        authentification: { isLoggedIn: false }
      });

      sandbox
        .stub(UserService, 'login')
        .withArgs(user.email, user.password).returns(Promise.resolve(token));

      sandbox
        .stub(UserService, 'me')
        .returns(Promise.resolve(user));

      sandbox
        .stub(Tracking, 'trackLoginEmailSuccess')
        .returns(Promise.resolve());

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_SUCCESS, token },
        { type: actionTypes.GET_INFO, user }
      ];

      ;
      return store.dispatch(actions.login(user.email, user.password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('creates an action to login when failure', () => {
      const user = { email: 'baz@make.org', password: 'foo' };

      const error = undefined;
      const proposalContent = 'foo';
      const questionId = 'bar';
      const store = mockStore({
        proposal: { content: proposalContent },
        sequence: { question: { questionId } }
      });

      sandbox
        .stub(UserService, 'login')
        .withArgs(user.email, user.password)
        .returns(Promise.reject('fooError'));

      sandbox
        .stub(Tracking, 'trackLoginEmailFailure')
        .returns(Promise.resolve());


      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_FAILURE, error }
      ];

      return store.dispatch(actions.login(user.email, user.password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
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

      expect(actions.loginSocialRequest(provider)).toEqual(expectedAction);
    });

    it('creates an action loginSocialFailure', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_FAILURE
      };

      expect(actions.loginSocialFailure()).toEqual(expectedAction);
    });

    it('creates an action loginSocialSuccess', () => {
      const token = 'fooToken';
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_SUCCESS,
        token
      };

      expect(actions.loginSocialSuccess(token)).toEqual(expectedAction);
    });

    it('creates an action to login social when success', () => {
      const store = mockStore({
        proposal: { canSubmit: false },
        authentification: { isLoggedIn: false },
        pannel: { isPannelOpen: false }
      });
      const token = { foo: 'bar' };
      const user = { firstname: 'baz' };
      const provider = 'fooProvider';
      const socialToken = 'fooToken';

      sandbox
        .stub(UserService, 'loginSocial')
        .withArgs(provider, socialToken)
        .returns(Promise.resolve(token));

      sandbox
        .stub(UserService, 'me')
        .returns(Promise.resolve(user));

      sandbox
        .stub(Tracking, 'trackAuthentificationSocialSuccess')
        .returns(Promise.resolve());


      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider: provider },
        { type: actionTypes.LOGIN_SOCIAL_SUCCESS, token },
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.loginSocial(provider, socialToken)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('creates an action to login social when failure', () => {
      const proposalContent = 'foo';
      const questionId = 'bar';
      const store = mockStore({
        proposal: { content: proposalContent },
        sequence: { question: { questionId } }
      });
      const socialToken = 'fooToken';
      const provider = 'barProvider';

      sandbox.stub(UserService, 'loginSocial')
        .withArgs(provider, socialToken).returns(Promise.reject('fooError'));


      sandbox.stub(Tracking, 'trackAuthentificationSocialFailure')
        .returns(Promise.resolve());

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider },
        { type: actionTypes.LOGIN_SOCIAL_FAILURE }
      ];

      return store.dispatch(actions.loginSocial(provider, socialToken)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
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

      expect(actions.setUserToken(token)).toEqual(expectedAction);
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

      expect(actions.setUserInfo(user)).toEqual(expectedAction);
    });

    it('creates an action to logout a user', () => {
      const expectedAction = {
        type: actionTypes.LOGOUT
      };

      expect(actions.logout()).toEqual(expectedAction);
    });

    it('creates an action to getUser when pannel is open', () => {
      const user = { firstname: 'baz' };
      const store = mockStore({
        pannel: { isPannelOpen: true }
      });

      sandbox
        .stub(UserService, 'me')
        .returns(Promise.resolve(user));
      sandbox
        .stub(Tracking, 'trackClickClosePannel')
        .returns(Promise.resolve());

      const expectedActions = [
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.PANNEL_CLOSE },
        { type: actionTypes.FORGOT_PASSWORD_INIT }
      ];

      return store.dispatch(actions.getUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('creates an action to getUser when pannel is closed', () => {
      const user = { firstname: 'baz' };
      const store = mockStore({
        pannel: { isPannelOpen: false }
      });

      sandbox
        .stub(UserService, 'me')
        .returns(Promise.resolve(user));

      const expectedActions = [
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.getUser()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('creates an action to getToken', () => {
      const token = { foo: 'Bar' };
      const user = { firstname: 'baz' };
      const content = 'il faut blabla';
      const questionId = 'fooQuestionId'
      const store = mockStore({
        proposal: { content },
        pannel: { isPannelOpen: false },
        authentification: { isLoggedIn: false },
        sequence: { question: { questionId } }
      });

      sandbox
        .stub(UserService, 'getUserToken')
        .returns(Promise.resolve(token));

      sandbox
        .stub(UserService, 'me')
        .returns(Promise.resolve(user));

      const expectedActions = [
        { type: actionTypes.GET_TOKEN, token },
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.getToken()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
    });
  });
});
