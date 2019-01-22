/* @flow */

/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actionTypes from 'Constants/actionTypes';
import UserService from 'Api/UserService';
import * as actions from './index';
import Tracking from 'Services/Tracking';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Sequence Actions', () => {
  let sandbox;
  let trackingService;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
    trackingService = sandbox.mock(Tracking);
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('Creates SEQUENCE_COLLAPSE when calling action', () => {
    const expectedActions = [{
      type: actionTypes.SEQUENCE_COLLAPSE
    }];

    store.dispatch(actions.sequenceCollapse());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates SEQUENCE_EXPAND when calling action', () => {
    const expectedActions = [{
      type: actionTypes.SEQUENCE_EXPAND
    }];

    store.dispatch(actions.sequenceExpand());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates SEQUENCE_PROPOSAL_VOTE when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId }
    }];

    store.dispatch(actions.voteProposal(proposalId));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates SEQUENCE_PROPOSAL_UNVOTE when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_UNVOTE,
      payload: { proposalId }
    }];

    store.dispatch(actions.unvoteProposal(proposalId));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Track sequence vote when first vote', () => {
    const store = mockStore({
      sequence: { votedProposalIds: [] }
    });
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;

    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId }
    }];

    trackingService
      .expects('trackVote')
      .once()
      .withArgs(proposalId, voteKey, index);

    trackingService
      .expects('trackFirstVote')
      .once()
      .withArgs(proposalId, voteKey, index);

    store.dispatch(actions.sequenceVote(proposalId, voteKey, index));
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('Track sequence vote when second vote', () => {
    const store = mockStore({
      sequence: { votedProposalIds: ['fooId'] }
    });
    const proposalId = 'foo';
    const voteKey = 'bar';
    const index = 0;

    const expectedActions = [{
      type: actionTypes.SEQUENCE_PROPOSAL_VOTE,
      payload: { proposalId }
    }];

    trackingService
      .expects('trackVote')
      .once()
      .withArgs(proposalId, voteKey, index);

    trackingService
      .expects('trackFirstVote')
      .never();

    store.dispatch(actions.sequenceVote(proposalId, voteKey, index));
    expect(store.getActions()).to.deep.equal(expectedActions);
  });
});
