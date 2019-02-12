/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProposalService from 'Shared/api/ProposalService';
import * as actionTypes from 'Shared/store/actionTypes';
import * as actions from './index';

// mocks
jest.mock('Shared/api/ProposalService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Proposal Actions', () => {
  beforeEach(() => {
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  it('Creates PROPOSE_TYPING when calling action', () => {
    const proposalContent = 'foo';
    const proposalLength = 3;
    const proposalCanBeSubmitted = false;

    const expectedActions = [{
      type: actionTypes.PROPOSE_TYPING,
      payload: {
        content: proposalContent,
        length: proposalLength,
        canSubmit: proposalCanBeSubmitted
      }
    }];

    store.dispatch(actions.proposeTyping(proposalContent, proposalLength, proposalCanBeSubmitted));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Creates PROPOSE_REQUEST when calling action', () => {
    const proposalContent = 'foo';
    const proposalQuestionId = 'bar';

    const expectedActions = [{
      type: actionTypes.PROPOSE_REQUEST,
      payload: {
        content: proposalContent,
        questionId: proposalQuestionId
      }
    }];

    store.dispatch(actions.proposeRequest(proposalContent, proposalQuestionId));
    expect(store.getActions()).toEqual(expectedActions)
  });

  it('creates PROPOSE_SUCCESS when calling action', () => {
    const expectedActions = [{
      type: actionTypes.PROPOSE_SUCCESS
    }];

    store.dispatch(actions.proposeSuccess());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates PROPOSE_FAILURE when calling action', () => {
    const error = 'baz';
    const expectedActions = [{
      type: actionTypes.PROPOSE_FAILURE,
      error
    }];

    store.dispatch(actions.proposeFailure(error));
    expect(store.getActions()).toEqual(expectedActions)
  });

  it('Creates an action to proposal Typing', () => {
    const proposalContent = 'foo';
    const proposalLength = 3;
    const proposalCanBeSubmitted = false;

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_TYPING,
        payload: {
          content: proposalContent,
          length: proposalLength,
          canSubmit: proposalCanBeSubmitted
        }
      }
    ];

    store.dispatch(actions.typingProposal(proposalContent, proposalLength, proposalCanBeSubmitted));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates an action to proposal Submit when user is not logged in', () => {
    const questionId = 123;
    const storeWithQuestion = mockStore({
      authentification: { isLoggedIn: false },
      sequence: { question: { questionId } }
    });
    const proposalContent = 'foo';

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_REQUEST,
        payload: {
          content: proposalContent,
          questionId
        }
      }
    ];

    return storeWithQuestion.dispatch(actions.submitProposal(proposalContent, questionId)).then(() => {
      expect(storeWithQuestion.getActions()).toEqual(expectedActions);
    });
  });

  it('creates an action to proposal Submit when user is logged in', () => {
    const questionId = 'bar';
    const storeWithQuestion = mockStore({
      authentification: { isLoggedIn: true },
      sequence: { question: { questionId } }
    });
    const proposalContent = 'foo';
    const proposalIdResponse = { proposalId: 'baz' };

    // mocks
    ProposalService.propose.mockResolvedValue(proposalIdResponse);

    const expectedActions = [{ type: actionTypes.PROPOSE_SUCCESS }];

    return storeWithQuestion.dispatch(actions.submitProposal(proposalContent, questionId)).then(() => {
      expect(storeWithQuestion.getActions()).toEqual(expectedActions);
    });
  });

  it('creates an action to proposal Submit failure', () => {
    const questionId = 'bar';
    const storeWithQuestion = mockStore({
      authentification: { isLoggedIn: true },
      sequence: { question: { questionId } }
    });
    const proposalContent = 'foo';

    // mocks
    ProposalService.propose.mockRejectedValue('fooError');

    const expectedActions = [
      {
        type: actionTypes.PROPOSE_FAILURE,
        error: 'fooError'
      }
    ];

    return storeWithQuestion.dispatch(actions.submitProposal(proposalContent, questionId)).then(() => {
      expect(storeWithQuestion.getActions()).toEqual(expectedActions);
    });
  });
});
