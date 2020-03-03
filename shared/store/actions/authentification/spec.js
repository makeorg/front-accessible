/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import { UserApiService } from 'Shared/api/UserApiService';
import * as Tracking from 'Shared/services/Tracking';
import * as actions from './index';

// mocks
jest.mock('Shared/api/UserApiService');

const middlewares = [thunk];
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
        error,
      };

      expect(actions.loginFailure(error)).toEqual(expectedAction);
    });

    it('creates an action loginSuccess', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_SUCCESS,
      };

      expect(actions.loginSuccess()).toEqual(expectedAction);
    });

    it('creates an action to login when success', () => {
      const user = { email: 'baz@make.org', password: 'foo' };

      const newStore = mockStore({
        proposal: { canSubmit: false },
        modal: { isModalClose: false },
        authentification: { isLoggedIn: false },
      });

      // mocks
      UserApiService.me.mockResolvedValue(user);
      UserApiService.login.mockResolvedValue();

      // spy
      jest.spyOn(Tracking, 'trackLoginEmailSuccess');

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_SUCCESS },
        { type: actionTypes.NOTIFICATION_LOGIN_SUCCESS },
        { type: actionTypes.GET_INFO, user },
      ];

      return newStore
        .dispatch(actions.login(user.email, user.password))
        .then(() => {
          expect(Tracking.trackLoginEmailSuccess).toHaveBeenCalled();
          expect(newStore.getActions()).toEqual(expectedActions);
        });
    });

    it('creates an action to login when failure', () => {
      const user = { email: 'baz@make.org', password: 'foo' };

      const error = {
        field: 'email',
        key: 'email_doesnot_exist',
        message: 'login.email_doesnot_exist',
      };
      const proposalContent = 'foo';
      const questionId = 'bar';
      const newStore = mockStore({
        proposal: { content: proposalContent },
        sequence: { question: { questionId } },
      });

      UserApiService.login.mockRejectedValue();

      // spy
      jest.spyOn(Tracking, 'trackLoginEmailFailure');

      const expectedActions = [
        { type: actionTypes.LOGIN_REQUEST },
        { type: actionTypes.LOGIN_FAILURE, error },
      ];

      return newStore
        .dispatch(actions.login(user.email, user.password))
        .then(() => {
          expect(Tracking.trackLoginEmailFailure).toHaveBeenCalled();
          expect(newStore.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('login Social Actions', () => {
    it('creates an action loginSocialRequest', () => {
      const provider = 'fooProvider';
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_REQUEST,
        provider,
      };

      expect(actions.loginSocialRequest(provider)).toEqual(expectedAction);
    });

    it('creates an action loginSocialFailure', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_FAILURE,
      };

      expect(actions.loginSocialFailure()).toEqual(expectedAction);
    });

    it('creates an action loginSocialSuccess', () => {
      const expectedAction = {
        type: actionTypes.LOGIN_SOCIAL_SUCCESS,
      };

      expect(actions.loginSocialSuccess()).toEqual(expectedAction);
    });

    it('creates an action to login social when success', () => {
      const loginStore = mockStore({
        proposal: { canSubmit: false },
        authentification: { isLoggedIn: false },
        notification: { level: undefined, contentType: undefined },
        modal: { isOpen: true },
      });
      const user = { firstname: 'baz' };
      const successAuth = {
        token_type: 'Bearer',
        access_token: '265f29cb-cc2e-444e-8590-cfe4ff652a0a',
        expires_in: 299,
        refresh_token: '815dfeec-f3e6-4085-b020-c27d7ea4e1aa',
        account_creation: false,
      };
      const provider = 'fooProvider';
      const socialToken = 'fooToken';

      // mock
      UserApiService.me.mockResolvedValue(user);
      UserApiService.loginSocial.mockResolvedValue(successAuth);

      // spy
      jest.spyOn(Tracking, 'trackAuthentificationSocialSuccess');

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider },
        { type: actionTypes.LOGIN_SOCIAL_SUCCESS },
        { type: actionTypes.NOTIFICATION_LOGIN_SUCCESS },
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.MODAL_CLOSE },
      ];

      return loginStore
        .dispatch(actions.loginSocial(provider, socialToken))
        .then(() => {
          expect(
            Tracking.trackAuthentificationSocialSuccess
          ).toHaveBeenCalledWith(provider, successAuth.account_creation);
          expect(loginStore.getActions()).toEqual(expectedActions);
        });
    });

    it('creates an action to login social when failure', () => {
      const proposalContent = 'foo';
      const questionId = 'bar';
      const newStore = mockStore({
        proposal: { content: proposalContent },
        sequence: { question: { questionId } },
      });
      const socialToken = 'fooToken';
      const provider = 'barProvider';

      UserApiService.loginSocial.mockRejectedValue();

      // spy
      jest.spyOn(Tracking, 'trackAuthentificationSocialFailure');

      const expectedActions = [
        { type: actionTypes.LOGIN_SOCIAL_REQUEST, provider },
        { type: actionTypes.LOGIN_SOCIAL_FAILURE },
      ];

      return newStore
        .dispatch(actions.loginSocial(provider, socialToken))
        .then(() => {
          expect(
            Tracking.trackAuthentificationSocialFailure
          ).toHaveBeenCalled();
          expect(newStore.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('user info and logout Actions', () => {
    it('creates an action to get user informations', () => {
      const user = {
        firstname: 'foo',
        lastname: 'bar',
      };
      const expectedAction = {
        type: actionTypes.GET_INFO,
        user,
      };
      expect(actions.setUserInfo(user)).toEqual(expectedAction);
    });

    it('creates an action to logout a user', () => {
      const newStore = mockStore({
        user: { authentification: {} },
      });

      const expectedActions = [
        { type: actionTypes.LOGOUT },
        { type: actionTypes.NOTIFICATION_LOGOUT_SUCCESS },
      ];

      UserApiService.logout.mockResolvedValue();

      return newStore.dispatch(actions.logout()).then(() => {
        expect(newStore.getActions()).toEqual(expectedActions);
      });
    });

    it('creates an action to logout a user after account deletion', () => {
      const newStore = mockStore({
        user: { authentification: {} },
      });

      const expectedActions = [
        { type: actionTypes.LOGOUT },
        { type: actionTypes.NOTIFICATION_ACCOUNT_DELETION_SUCCESS },
      ];

      UserApiService.logout.mockResolvedValue();

      return newStore.dispatch(actions.logout(true)).then(() => {
        expect(newStore.getActions()).toEqual(expectedActions);
      });
    });

    it('creates an action to logout a user successfully', () => {
      const expectedAction = {
        type: actionTypes.LOGOUT,
      };

      expect(actions.logoutSuccess()).toEqual(expectedAction);
    });

    it('creates an action to getUser when modal is open', () => {
      const user = { firstname: 'baz' };
      const newStore = mockStore({
        modal: { isOpen: true },
      });

      // mock
      UserApiService.me.mockResolvedValue(user);

      const expectedActions = [
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.MODAL_CLOSE },
      ];

      return newStore.dispatch(actions.getUser()).then(() => {
        expect(newStore.getActions()).toEqual(expectedActions);
      });
    });

    it('creates an action to getUser when modal is closed', () => {
      const user = { firstname: 'baz' };
      const newStore = mockStore({
        modal: { isOpen: false },
      });

      // mock
      UserApiService.me.mockResolvedValue(user);

      const expectedActions = [{ type: actionTypes.GET_INFO, user }];

      return newStore.dispatch(actions.getUser()).then(() => {
        expect(newStore.getActions()).toEqual(expectedActions);
      });
    });

    it('creates an action to getUser after registration', () => {
      const user = { firstname: 'baz' };
      const newStore = mockStore({
        modal: { isOpen: true },
      });

      // mock
      UserApiService.me.mockResolvedValue(user);

      const expectedActions = [
        { type: actionTypes.GET_INFO, user },
        { type: actionTypes.MODAL_CLOSE },
        { type: actionTypes.NOTIFICATION_REGISTER_SUCCESS, user },
      ];

      return newStore.dispatch(actions.getUser(true)).then(() => {
        expect(newStore.getActions()).toEqual(expectedActions);
      });
    });
  });
});
