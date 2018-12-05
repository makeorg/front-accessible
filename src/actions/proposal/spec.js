/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProposalService from '../../api/ProposalService';

import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Proposal Actions', () => {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  afterEach(function () {
      sandbox.restore();
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

    const proposalServiceRegisterMock = sandbox.stub(ProposalService, 'propose');
    proposalServiceRegisterMock.returns(Promise.resolve(proposalIdResponse));

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

    const proposalServiceRegisterMock = sandbox.stub(ProposalService, 'propose');
    proposalServiceRegisterMock.returns(Promise.reject('fooError'));

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_FAILURE,
        error: 'fooError'
      }
    ];

    return store.dispatch(actions.submitProposal(proposalContent, operationId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
});
