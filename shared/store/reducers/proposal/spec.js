/* @flow */

import * as actionCreators from 'Shared/store/actions/proposal';
import { proposal } from './index';

describe('Proposal reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      hasProposed: false,
      error: undefined,
      data: undefined,
    };

    expect(proposal(undefined, {})).toEqual(expectedState);
  });

  describe('Proposal submit success action reducers', () => {
    it('Propose success', () => {
      const action = actionCreators.proposeSuccess('foo-proposal-id');
      const previousState = {
        hasProposed: false,
        error: undefined,
        data: undefined,
      };

      const expectedState = {
        hasProposed: true,
        error: undefined,
        data: undefined,
      };

      expect(proposal(previousState, action)).toEqual(expectedState);
    });
  });
});
