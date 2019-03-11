/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from 'Shared/store/actionTypes';
import { Tracking } from 'Shared/services/Tracking';

import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Sequence Actions', () => {
  beforeEach(() => {
    jest.spyOn(Tracking, 'track');
    jest.spyOn(Tracking, 'trackVote');
    jest.spyOn(Tracking, 'trackFirstVote');

    store.clearActions();
  });

  afterEach(() => {
    Tracking.track.mockRestore();
    Tracking.trackVote.mockRestore();
    Tracking.trackFirstVote.mockRestore();
  });

  it('Creates SEQUENCE_COLLAPSE when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_COLLAPSE,
      },
    ];

    store.dispatch(actions.sequenceCollapse());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_EXPAND when calling action', () => {
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_EXPAND,
      },
    ];

    store.dispatch(actions.sequenceExpand());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_PROPOSAL_VOTE when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
        payload: { proposalId },
      },
    ];

    store.dispatch(actions.voteProposal(proposalId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_PROPOSAL_UNVOTE when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
        payload: { proposalId },
      },
    ];

    store.dispatch(actions.unvoteProposal(proposalId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Track sequence vote when first vote', () => {
    const questionSlug = 'baz';
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;
    const newStore = mockStore({
      sequence: { votedProposalIds: [], questionId: 'foo' },
      questions: { foo: { question: { slug: questionSlug } } },
    });

    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
        payload: { proposalId },
      },
    ];

    newStore.dispatch(actions.sequenceVote(proposalId, voteKey, index));

    expect(Tracking.trackVote).toHaveBeenNthCalledWith(
      1,
      questionSlug,
      proposalId,
      voteKey,
      index
    );
    expect(Tracking.trackFirstVote).toHaveBeenNthCalledWith(
      1,
      questionSlug,
      proposalId,
      voteKey,
      index
    );
    expect(newStore.getActions()).toEqual(expectedActions);
  });

  it('Track sequence vote when second vote', () => {
    const questionSlug = 'baz';
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;
    const newStore = mockStore({
      sequence: { votedProposalIds: ['fooId'], questionId: 'foo' },
      questions: { foo: { question: { slug: questionSlug } } },
    });

    const expectedActions = [
      {
        type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
        payload: { proposalId },
      },
    ];

    newStore.dispatch(actions.sequenceVote(proposalId, voteKey, index));

    expect(Tracking.trackVote).toHaveBeenNthCalledWith(
      1,
      questionSlug,
      proposalId,
      voteKey,
      index
    );
    expect(Tracking.trackFirstVote).not.toHaveBeenCalled();
    expect(newStore.getActions()).toEqual(expectedActions);
  });
});
