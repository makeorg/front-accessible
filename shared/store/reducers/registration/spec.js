/* @flow */

import * as actionCreators from 'Shared/store/actions/registration';
import { registration } from './index';

describe('Registration reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      errors: [],
      user: null,
    };

    expect(registration(undefined, {})).toEqual(expectedState);
  });

  describe('Register action reducers', () => {
    it('Register Request', () => {
      const action = actionCreators.registerRequest();
      const previousState = {
        errors: ['foo', 'bar'],
        user: null
      };

      const expectedState = {
        errors: [],
        user: null,
      };

      expect(registration(previousState, action)).toEqual(expectedState);
    });

    it('Register Success', () => {
      const user = {
        email: 'foo@example.com',
        password: 'bar',
        firstname: 'baz'
      }
      const action = actionCreators.registerSuccess(user);
      const previousState = {
        errors: ['foo', 'bar'],
        user: null,
      };

      const expectedState = {
        errors: [],
        user: user
      };

      expect(registration(previousState, action)).toEqual(expectedState);
    });

    it('Register Failure', () => {
      const action = actionCreators.registerFailure(['fooError']);
      const previousState = {
        isLoggedIn: false,
        errors: [],
        user: null,
        token: null
      };

      const expectedState = {
        isLoggedIn: false,
        errors: ['fooError'],
        user: null,
        token: null
      };

      expect(registration(previousState, action)).toEqual(expectedState);
    });
  });
});
