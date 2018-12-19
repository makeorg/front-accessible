/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProposalService from 'Api/ProposalService';
import * as actionTypes from 'Constants/actionTypes';
import * as actions from './index';

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
    const proposalQuestionId = 'bar';

    const expectedActions = [{
      type: actionTypes.PROPOSE_REQUEST,
      content: proposalContent,
      questionId: proposalQuestionId
    }];

    store.dispatch(actions.proposeRequest(proposalContent, proposalQuestionId));
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
    const questionId = 123;
    const store = mockStore({
      authentification: { isLoggedIn: false },
      sequence: { question: { questionId } }
    });
    const proposalContent = 'foo';

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_REQUEST,
        content: proposalContent,
        questionId
      }
    ];

    return store.dispatch(actions.submitProposal(proposalContent, questionId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });

  it('creates an action to proposal Submit when user is logged in', () => {
    const questionId = 'bar';
    const store = mockStore({
      authentification: {isLoggedIn: true },
      sequence: { question: { questionId } }
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

    return store.dispatch(actions.submitProposal(proposalContent, questionId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });

  it('creates an action to proposal Submit failure', () => {
    const questionId = 'bar';
    const store = mockStore({
      authentification: {isLoggedIn: true },
      sequence: { question: { questionId } }
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

    return store.dispatch(actions.submitProposal(proposalContent, questionId)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
});
