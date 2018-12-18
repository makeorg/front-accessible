/* @flow */
import sequence from './index';
import * as actionCreators from 'Actions/sequence';

describe('Sequence reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isSequenceCollapsed: false,
      question: null,
      questionConfiguration: null
    };

    expect(sequence(undefined, {})).to.eql(expectedState);
  });

  it('Collapse sequence reducer', () => {
    const action = { type: 'SEQUENCE_COLLAPSE' };
    const previousState = {
      isSequenceCollapsed: false
    };

    const expectedState = {
      isSequenceCollapsed: true
    };

    expect(sequence(previousState, action)).to.eql(expectedState);
  });

  it('Expand sequence reducer', () => {
    const action = { type: 'SEQUENCE_EXPAND' };
    const previousState = {
      isSequenceCollapsed: true
    };

    const expectedState = {
      isSequenceCollapsed: false
    };

    expect(sequence(previousState, action)).to.eql(expectedState);
  });
});
