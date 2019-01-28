/* @flow */

import * as actionCreators from 'Shared/store/actions/proposal';
import proposal from './index';

describe('Proposal reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isTyping: false,
      isCurrentSubmitSuccess: false,
      hasProposed: false,
      canSubmit: false,
      content: '',
      length: 20,
      questionId: null,
      error: null
    };

    expect(proposal(undefined, {})).toEqual(expectedState);
  });

  describe('Typing action reducers', () => {
    it('Typing a proposal', () => {
      const content = 'il faut foo';
      const length = 11;
      const canSubmit = true;
      const action = actionCreators.proposeTyping(content, length, canSubmit);
      const previousState = {
        isTyping: false,
        isCurrentSubmitSuccess: false,
        canSubmit: false,
        content: '',
        length: 0,
        questionId: null,
        error: null
      };

      const expectedState = {
        isTyping: true,
        isCurrentSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: length,
        questionId: null,
        error: null
      };

      expect(proposal(previousState, action)).toEqual(expectedState);
    });
  });

  describe('Proposal submit action reducers', () => {
    it('propose request', () => {
      const content = 'il faut foo';
      const questionId = 'foo-bar';

      const action = actionCreators.proposeRequest(content, questionId);
      const previousState = {
        isTyping: false,
        isCurrentSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: 10,
        questionId: null,
        error: null
      };

      const expectedState = {
        isTyping: false,
        isCurrentSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: 10,
        questionId,
        error: null
      };

      expect(proposal(previousState, action)).toEqual(expectedState);
    });

    it('Propose success', () => {
      const action = actionCreators.proposeSuccess('foo-proposal-id');
      const previousState = {
        isTyping: true,
        isCurrentSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        questionId: 'bar-operation-id',
        error: null
      };

      const expectedState = {
        isTyping: false,
        isCurrentSubmitSuccess: true,
        hasProposed: true,
        canSubmit: false,
        content: '',
        length: 20,
        questionId: null,
        error: null
      };

      expect(proposal(previousState, action)).toEqual(expectedState);
    });

    it('propose failure', () => {
      const action = actionCreators.proposeFailure('foo-error');
      const previousState = {
        isTyping: false,
        isCurrentSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        questionId: 'bar-question-id',
        error: null
      };

      const expectedState = {
        isTyping: false,
        isCurrentSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        questionId: 'bar-question-id',
        error: 'foo-error'
      };

      expect(proposal(previousState, action)).toEqual(expectedState);
    });
  });
});
