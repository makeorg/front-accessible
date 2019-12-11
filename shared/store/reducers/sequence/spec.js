/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import { sequence } from './index';

describe('Sequence reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isSequenceCollapsed: false,
      firstProposal: undefined,
      question: undefined,
      votedProposalIds: {},
    };

    expect(sequence(undefined, {})).toEqual(expectedState);
  });

  it('Collapse sequence reducer', () => {
    const action = { type: actionTypes.SEQUENCE_COLLAPSE };
    const previousState = {
      isSequenceCollapsed: false,
    };

    const expectedState = {
      isSequenceCollapsed: true,
    };

    expect(sequence(previousState, action)).toEqual(expectedState);
  });

  it('Vote into Sequence reducer', () => {
    const action = {
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId: 'fooId', questionSlug: 'fooSlug' },
    };
    const previousState = {
      votedProposalIds: {},
    };

    const expectedState = {
      votedProposalIds: { fooSlug: ['fooId'] },
    };

    expect(sequence(previousState, action)).toEqual(expectedState);
  });

  it('Unvote into Sequence reducer', () => {
    const action = {
      type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
      payload: { proposalId: 'fooId', questionSlug: 'fooSlug' },
    };
    const previousState = {
      votedProposalIds: { fooSlug: ['barId', 'fooId', 'bazId'] },
    };

    const expectedState = {
      votedProposalIds: { fooSlug: ['barId', 'bazId'] },
    };

    expect(sequence(previousState, action)).toEqual(expectedState);
  });
});
