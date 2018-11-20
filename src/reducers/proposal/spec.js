/* @flow */

import * as actionCreators from '../../actions/proposal';
import proposal from './index';

describe('Proposal reducer', () => {
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
        operationId: null,
        error: null
      };

      const expectedState = {
        isTyping: true,
        isSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: length,
        operationId: null,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });
  });

  describe('Proposal submit action reducers', () => {
    it('propose request', () => {
      const content = 'il faut foo';
      const operationId = 'foo-bar';

      const action = actionCreators.proposeRequest(content, operationId);
      const previousState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: 10,
        operationId: null,
        error: null
      };

      const expectedState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: content,
        length: 10,
        operationId: operationId,
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
        operationId: 'bar-operation-id',
        error: null
      };

      const expectedState = {
        isTyping: false,
        isSubmitSuccess: true,
        canSubmit: false,
        content: '',
        length: 8,
        operationId: null,
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
        operationId: 'bar-operation-id',
        error: null
      };

      const expectedState = {
        isTyping: false,
        isSubmitSuccess: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        operationId: 'bar-operation-id',
        error: 'foo-error'
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });
  });
});
