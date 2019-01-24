/* @flow */

import * as actionCreators from 'Actions/forgotPassword';
import forgotPassword from './index';

describe('ForgotPassword reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      errors: [],
      isSuccess: false
    };

    expect(forgotPassword(undefined, {})).toEqual(expectedState);
  });


  describe('forgotPassword action reducers', () => {
    it('ForgotPassword Request', () => {
      const action = actionCreators.forgotPasswordRequest('foo@example.com');
      const previousState = {
        errors: ['foo', 'bar'],
        isSuccess: true
      };

      const expectedState = {
        errors: [],
        isSuccess: false
      };

      expect(forgotPassword(previousState, action)).toEqual(expectedState);
    });

    it('ForgotPassword Success', () => {
      const action = actionCreators.forgotPasswordSuccess();
      const previousState = {
        errors: ['foo', 'bar'],
        isSuccess: false
      };

      const expectedState = {
        errors: [],
        isSuccess: true
      };

      expect(forgotPassword(previousState, action)).toEqual(expectedState);
    });

    it('Login Failure', () => {
      const action = actionCreators.forgotPasswordFailure(['fooError']);
      const previousState = {
        errors: ['bazError', 'barError'],
        isSuccess: false
      };

      const expectedState = {
        errors: ['fooError'],
        isSuccess: false
      };

      expect(forgotPassword(previousState, action)).toEqual(expectedState);
    });

    it('Login Init', () => {
      const action = actionCreators.forgotPasswordInit();
      const previousState = {
        errors: [],
        isSuccess: false
      };

      const expectedState = {
        errors: [],
        isSuccess: false
      };

      expect(forgotPassword(previousState, action)).toEqual(expectedState);
    });
  });
});
