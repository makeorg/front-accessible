/* @flow */

import * as actionCreators from 'Shared/store/actions/authentification';
import { authentification } from './index';

describe('Authentification reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isLoggedIn: false,
      errors: [],
      user: undefined,
      token: undefined
    };

    expect(authentification(undefined, {})).toEqual(expectedState);
  });

  describe('Login action reducers', () => {
    it('Login Request', () => {
      const action = actionCreators.loginRequest();
      const previousState = {
        isLoggedIn: false,
        errors: ['foo', 'bar'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: false,
        errors: [],
        user: undefined,
        token: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });

    it('Login Success', () => {
      const action = actionCreators.loginSuccess('fooToken');
      const previousState = {
        isLoggedIn: false,
        errors: ['foo', 'bar'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: true,
        errors: [],
        user: undefined,
        token: 'fooToken'
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });

    it('Login Failure', () => {
      const action = actionCreators.loginFailure('fooError');
      const previousState = {
        isLoggedIn: false,
        errors: ['bazError', 'barError'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: false,
        errors: ['fooError', 'bazError', 'barError'],
        user: undefined,
        token: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });
  });

  describe('Login Social action reducers', () => {
    it('Login Social Request', () => {
      const action = actionCreators.loginSocialRequest();
      const previousState = {
        isLoggedIn: false,
        errors: ['foo', 'bar'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: false,
        errors: [],
        user: undefined,
        token: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });

    it('Login Social Success', () => {
      const action = actionCreators.loginSocialSuccess('fooToken');
      const previousState = {
        isLoggedIn: false,
        errors: ['foo', 'bar'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: true,
        errors: [],
        user: undefined,
        token: 'fooToken'
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });

    it('Login Social Failure', () => {
      const action = actionCreators.loginSocialFailure('fooError');
      const previousState = {
        isLoggedIn: false,
        errors: ['bazError', 'barError'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: false,
        errors: [],
        user: undefined,
        token: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });
  });

  describe('Get user info action reducers', () => {
    it('Get user Info', () => {
      const user = {
        firstname: 'foo',
        lastname: 'bar'
      };
      const action = actionCreators.setUserInfo(user);
      const previousState = {
        isLoggedIn: false,
        errors: ['bazError', 'barError'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: true,
        errors: ['bazError', 'barError'],
        user,
        token: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });
  });

  describe('Get token info action reducers', () => {
    it('Get token Info', () => {
      const token = {
        foo: 'bar'
      };
      const action = actionCreators.setUserToken(token);
      const previousState = {
        isLoggedIn: false,
        errors: ['bazError', 'barError'],
        user: undefined,
        token: undefined
      };

      const expectedState = {
        isLoggedIn: true,
        errors: ['bazError', 'barError'],
        token,
        user: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });
  });

  describe('Logout action reducers', () => {
    it('Logout user', () => {
      const action = actionCreators.logout();
      const previousState = {
        isLoggedIn: true,
        errors: ['bazError', 'barError'],
        user: { firstname: 'foo' },
        token: { token: 'tokenfoo' }
      };

      const expectedState = {
        isLoggedIn: false,
        errors: [],
        user: undefined,
        token: undefined
      };

      expect(authentification(previousState, action)).toEqual(expectedState);
    });
  });
});
