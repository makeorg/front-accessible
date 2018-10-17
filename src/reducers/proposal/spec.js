import * as actionCreators from '../../actions/proposal';
import proposal from './index';

describe('proposal reducer', () => {
  describe('typing action reducers', () => {
    it('typing a proposal', () => {
      const content = 'il faut foo';
      const length = 11;
      const canSubmit = true;
      const action = actionCreators.typing(content, length, canSubmit);
      const previousState = {
        needAuthentification: false,
        canSubmit: false,
        content: null,
        length: 0,
        operationId: null,
        error: null
      };

      const expectedState = {
        needAuthentification: false,
        canSubmit: true,
        content: content,
        length: length,
        operationId: null,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });
  });

  describe('proposal submit action reducers', () => {
    it('propose request', () => {
      const content = 'il faut foo';
      const operationId = 'foo-bar';

      const action = actionCreators.proposeRequest(content, operationId);
      const previousState = {
        needAuthentification: false,
        canSubmit: true,
        content: content,
        length: 10,
        operationId: null,
        error: null
      };

      const expectedState = {
        needAuthentification: true,
        canSubmit: true,
        content: content,
        length: 10,
        operationId: operationId,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });

    it('propose success', () => {
      const action = actionCreators.proposeSuccess('foo-proposal-id');
      const previousState = {
        needAuthentification: true,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        operationId: 'bar-operation-id',
        error: null
      };

      const expectedState = {
        needAuthentification: false,
        canSubmit: false,
        content: null,
        length: 8,
        operationId: null,
        error: null
      };

      expect(proposal(previousState, action)).to.eql(expectedState);
    });

    it('propose failure', () => {
      const action = actionCreators.proposeFailure('foo-error');
      const previousState = {
        needAuthentification: false,
        canSubmit: true,
        content: 'il faut foo',
        length: 10,
        operationId: 'bar-operation-id',
        error: null
      };

      const expectedState = {
        needAuthentification: false,
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
