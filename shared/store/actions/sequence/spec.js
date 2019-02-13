/* @flow */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actionTypes from 'Shared/store/actionTypes';
import UserService from 'Shared/api/UserService';
import { Tracking } from 'Shared/services/Tracking';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Sequence Actions', () => {
  beforeEach(() => {
    jest.spyOn(Tracking, 'track');
    jest.spyOn(Tracking, 'trackVote');
    jest.spyOn(Tracking, 'trackFirstVote');

    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  afterEach(() => {
    Tracking.track.mockRestore();
    Tracking.trackVote.mockRestore();
    Tracking.trackFirstVote.mockRestore();
  });

  it('Creates SEQUENCE_COLLAPSE when calling action', () => {
    const expectedActions = [{
      type: actionTypes.SEQUENCE_COLLAPSE
    }];

    store.dispatch(actions.sequenceCollapse());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_EXPAND when calling action', () => {
    const expectedActions = [{
      type: actionTypes.SEQUENCE_EXPAND
    }];

    store.dispatch(actions.sequenceExpand());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_PROPOSAL_VOTE when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId }
    }];

    store.dispatch(actions.voteProposal(proposalId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates SEQUENCE_PROPOSAL_UNVOTE when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
      payload: { proposalId }
    }];

    store.dispatch(actions.unvoteProposal(proposalId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Track sequence vote when first vote', () => {
    const questionSlug = 'baz';
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;
    const store = mockStore({
      sequence: { votedProposalIds: [], question: { slug: questionSlug } }
    });

    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId }
    }];

    store.dispatch(actions.sequenceVote(proposalId, voteKey, index));

    expect(Tracking.trackVote).toHaveBeenNthCalledWith(1, questionSlug, proposalId, voteKey, index);
    expect(Tracking.trackFirstVote).toHaveBeenNthCalledWith(1, questionSlug, proposalId, voteKey, index);
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Track sequence vote when second vote', () => {
    const questionSlug = 'baz';
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;
    const store = mockStore({
      sequence: { question: { slug: questionSlug }, votedProposalIds: ['fooId'] }
    });

    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId }
    }];


    store.dispatch(actions.sequenceVote(proposalId, voteKey, index));

    expect(Tracking.trackVote).toHaveBeenNthCalledWith(1, questionSlug, proposalId, voteKey, index);
    expect(Tracking.trackFirstVote).not.toHaveBeenCalled();
    expect(store.getActions()).toEqual(expectedActions);
  });
});
