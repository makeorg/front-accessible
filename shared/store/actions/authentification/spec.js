/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import { UserService } from 'Shared/api/UserService';
import { Tracking } from 'Shared/services/Tracking';
import * as actions from './index';

// mocks
jest.mock('Shared/api/UserService')

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Authentification Actions', () => {

  beforeEach(() => {
    store.clearActions();
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
      const token = { foo: 'bar' };
      const user = { email: 'baz@make.org', password: 'foo' };

      const newStore = mockStore({
        proposal: { canSubmit: false },
        pannel: { isPannelOpen: false },
        authentification: { isLoggedIn: false }
      });

      // mocks
      UserService.login.mockResolvedValue(token);
      UserService.me.mockResolvedValue(user);

      // spy
      jest.spyOn(Tracking, 'trackLoginEmailSuccess');

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_SUCCESS, token },
        { type: actionTypes.GET_INFO, user }
      ];

      ;
      return newStore.dispatch(actions.login(user.email, user.password)).then(() => {
        expect(Tracking.trackLoginEmailSuccess).toBeCalled();
        expect(newStore.getActions()).toEqual(expectedActions);
      });
    });

    it('creates an action to login when failure', () => {
      const user = { email: 'baz@make.org', password: 'foo' };

      const error = 'login.email_doesnot_exist';
      const proposalContent = 'foo';
      const questionId = 'bar';
      const newStore = mockStore({
        proposal: { content: proposalContent },
        sequence: { question: { questionId } }
      });

      UserService.login.mockRejectedValue();

      // spy
      jest.spyOn(Tracking, 'trackLoginEmailFailure');


      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_FAILURE, error }
      ];

      return newStore.dispatch(actions.login(user.email, user.password)).then(() => {
        expect(Tracking.trackLoginEmailFailure).toBeCalled()
        expect(newStore.getActions()).toEqual(expectedActions)
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

      // mock
      UserService.loginSocial.mockResolvedValue(token);
      UserService.me.mockResolvedValue(user);

      // spy
      jest.spyOn(Tracking, 'trackAuthentificationSocialSuccess');

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider: provider },
        { type: actionTypes.LOGIN_SOCIAL_SUCCESS, token },
        { type: actionTypes.GET_INFO, user }
      ];

      return store.dispatch(actions.loginSocial(provider, socialToken)).then(() => {
        expect(Tracking.trackAuthentificationSocialSuccess).toBeCalled()
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('creates an action to login social when failure', () => {
      const proposalContent = 'foo';
      const questionId = 'bar';
      const newStore = mockStore({
        proposal: { content: proposalContent },
        sequence: { question: { questionId } }
      });
      const socialToken = 'fooToken';
      const provider = 'barProvider';

      UserService.loginSocial.mockRejectedValue();

      // spy
      jest.spyOn(Tracking, 'trackAuthentificationSocialFailure');

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider },
        { type: actionTypes.LOGIN_SOCIAL_FAILURE }
      ];

      return newStore.dispatch(actions.loginSocial(provider, socialToken)).then(() => {
        expect(Tracking.trackAuthentificationSocialFailure).toBeCalled()
        expect(newStore.getActions()).toEqual(expectedActions)
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

      // mock
      UserService.me.mockResolvedValue(user);

      // spy
      jest.spyOn(Tracking, 'trackClickClosePannel');


      const expectedActions = [
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.PANNEL_CLOSE },
        { type: actionTypes.FORGOT_PASSWORD_INIT }
      ];

      return store.dispatch(actions.getUser()).then(() => {
        expect(Tracking.trackClickClosePannel).toBeCalled()
        expect(store.getActions()).toEqual(expectedActions)
      });
    });

    it('creates an action to getUser when pannel is closed', () => {
      const user = { firstname: 'baz' };
      const store = mockStore({
        pannel: { isPannelOpen: false }
      });

      // mock
      UserService.me.mockResolvedValue(user);

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

      // mock
      UserService.getUserToken.mockResolvedValue(token);
      UserService.me.mockResolvedValue(user);

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
