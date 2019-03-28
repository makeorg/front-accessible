/* @flow */

import * as actionCreators from 'Shared/store/actions/registration';
import { registration } from './index';

describe('Registration reducer', () => {
  it('Return the initial state', () => {
    const expectedState = { errors: [] };

    expect(registration(undefined, {})).toEqual(expectedState);
  });

  describe('Register action reducers', () => {
    it('Register Request', () => {
      const action = actionCreators.registerRequest();
      const previousState = { errors: ['foo', 'bar'] };

      const expectedState = { errors: [] };

      expect(registration(previousState, action)).toEqual(expectedState);
    });

    it('Register Success', () => {
      const action = actionCreators.registerSuccess();
      const previousState = { errors: ['foo', 'bar'] };

      const expectedState = { errors: [] };

      expect(registration(previousState, action)).toEqual(expectedState);
    });

    it('Register Failure', () => {
      const action = actionCreators.registerFailure(['fooError']);
      const previousState = { errors: [] };

      const expectedState = { errors: ['fooError'] };

      expect(registration(previousState, action)).toEqual(expectedState);
    });
  });
});
