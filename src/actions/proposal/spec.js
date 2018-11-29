/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Proposal Actions', () => {
  beforeEach(() => {
    store.clearActions();
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Creates PROPOSE_TYPING when calling action', () => {
    const proposalContent = 'foo';
    const proposalLength = 3;
    const proposalCanBeSubmitted = false;

    const expectedActions = [{
      type: actionTypes.PROPOSE_TYPING,
      content: proposalContent,
      length: proposalLength,
      canSubmit: proposalCanBeSubmitted
    }];

    store.dispatch(actions.proposeTyping(proposalContent, proposalLength, proposalCanBeSubmitted));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates PROPOSE_REQUEST when calling action', () => {
    const proposalContent = 'foo';
    const proposalOperationId = 'bar';

    const expectedActions = [{
      type: actionTypes.PROPOSE_REQUEST,
      content: proposalContent,
      operationId: proposalOperationId
    }];

    store.dispatch(actions.proposeRequest(proposalContent, proposalOperationId));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates PROPOSE_SUCCESS when calling action', () => {
    const proposalId = 'foo';
    const expectedActions = [{
      type: actionTypes.PROPOSE_SUCCESS,
      proposalId
    }];

    store.dispatch(actions.proposeSuccess(proposalId));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates PROPOSE_FAILURE when calling action', () => {
    const error = 'baz';
    const expectedActions = [{
      type: actionTypes.PROPOSE_FAILURE,
      error
    }];

    store.dispatch(actions.proposeFailure(error));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates an action to proposal Typing', () => {
    const proposalContent = 'foo';
    const proposalLength = 3;
    const proposalCanBeSubmitted = false;

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_TYPING,
        content: proposalContent,
        length: proposalLength,
        canSubmit: proposalCanBeSubmitted
      }
    ];

    store.dispatch(actions.typingProposal(proposalContent, proposalLength, proposalCanBeSubmitted));
    expect(store.getActions()).to.deep.equal(expectedActions);
  });

  it('creates an action to proposal Submit when user is not logged in', () => {
    const operationId = 123;
    const store = mockStore({
      authentification: {isLoggedIn: false },
      appConfig: {operationId}
    });
    const proposalContent = 'foo';

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_REQUEST,
        content: proposalContent,
        operationId: operationId
      }
    ];

    return store.dispatch(actions.submitProposal(proposalContent, operationId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });

  it('creates an action to proposal Submit when user is logged in', () => {
    const operationId = 'bar';
    const store = mockStore({
      authentification: {isLoggedIn: true },
      appConfig: {operationId}
    });
    const proposalContent = 'foo';
    const proposalIdResponse = { proposalId: 'baz' };

    fetchMock
      .post('path:/proposals', proposalIdResponse)
      .post('path:/tracking/front', 204)
    ;

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_SUCCESS,
        proposalId: 'baz'
      }
    ];

    return store.dispatch(actions.submitProposal(proposalContent, operationId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });

  it('creates an action to proposal Submit failure', () => {
    const operationId = 'bar';
    const store = mockStore({
      authentification: {isLoggedIn: true },
      appConfig: {operationId}
    });
    const proposalContent = 'foo';
    const proposalIdResponse = { proposalId: 'baz' };

    fetchMock
      .post('path:/proposals',  401);

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_FAILURE,
        error: 401
      }
    ];

    return store.dispatch(actions.submitProposal(proposalContent, operationId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
});
