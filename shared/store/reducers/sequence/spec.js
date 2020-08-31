/* @flow */
import * as actionTypes from 'Shared/store/actionTypes';
import { sequence } from './index';

describe('Sequence reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isSequenceCollapsed: false,
      firstProposal: undefined,
      questionSlug: undefined,
      currentIndex: 0,
      votedProposalIds: {},
      proposals: [],
      cards: [],
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

  it('Load Sequence cards reducer', () => {
    const action = {
      type: actionTypes.SEQUENCE_LOAD_CARDS,
      payload: { cards: [{ type: 'card' }] },
    };
    const previousState = {
      cards: [],
    };
    const expectedState = {
      cards: [{ type: 'card' }],
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
