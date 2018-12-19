/* @flow */

import * as actionCreators from 'Actions/proposal';
import proposal from './index';

describe('Proposal reducer', () => {
  it('Return the initial state', () => {
    const expectedState = {
      isTyping: false,
      isSubmitSuccess: false,
      canSubmit: false,
      content: '',
      length: 8,
      questionId: null,
      error: null
    };

    expect(proposal(undefined, {})).to.eql(expectedState);
  });

  describe('Typing action reducers', () => {
    it('Typing a proposal', () => {
      const content = 'il faut foo';
      const length = 11;
      const canSubmit = true;
      const action = actionCreators.proposeTyping(content, length, canSubmit);
      const previousState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: false,
        content: '',
        length: 0,
        questionId: null,
        error: null
      };

      const expectedState = {
        isTyping: true,
        isSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: length,
        questionId: null,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });
  });

  describe('Proposal submit action reducers', () => {
    it('propose request', () => {
      const content = 'il faut foo';
      const questionId = 'foo-bar';

      const action = actionCreators.proposeRequest(content, questionId);
      const previousState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: 10,
        questionId: null,
        error: null
      };

      const expectedState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: 10,
        questionId,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });

    it('Propose success', () => {
      const action = actionCreators.proposeSuccess('foo-proposal-id');
      const previousState = {
        isTyping: true,
        isSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        questionId: 'bar-operation-id',
        error: null
      };

      const expectedState = {
        isTyping: false,
        isSubmitSuccess: true,
        canSubmit: false,
        content: '',
        length: 8,
        questionId: null,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });

    it('propose failure', () => {
      const action = actionCreators.proposeFailure('foo-error');
      const previousState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        questionId: 'bar-question-id',
        error: null
      };

      const expectedState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        questionId: 'bar-question-id',
        error: 'foo-error'
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });
  });
});
