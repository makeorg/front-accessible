/* @flow */

import * as actionCreators from 'Shared/store/actions/proposal';
import { proposalTypeFixture } from 'Shared/types/__fixtures__/proposal.fixture';
import { proposal } from './index';

describe('Proposal reducer', () => {
  let previousState;
  let expectedState;
  beforeEach(() => {
    previousState = {
      hasProposed: false,
      error: undefined,
      data: undefined,
      popularProposals: [],
    };

    expectedState = {
      hasProposed: true,
      error: undefined,
      data: undefined,
      popularProposals: [],
    };
  });

  it('Return the initial state', () => {
    expect(proposal(undefined, {})).toEqual(previousState);
  });

  describe('Proposal submit success action reducers', () => {
    it('Propose success', () => {
      const action = actionCreators.proposeSuccess('foo-proposal-id');
      expect(proposal(previousState, action)).toEqual(expectedState);
    });
  });

  describe('Proposal popularProposals action reducers ', () => {
    const results = [
      {
        total: 1,
        results: [proposalTypeFixture],
      },
    ];
    const action = actionCreators.setPopularProposals(results);
    expectedState = {
      hasProposed: false,
      popularProposals: results,
    };
    expect(proposal(previousState, action)).toEqual(expectedState);
  });
});
