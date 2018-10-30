import * as actionCreators from '../../actions/forgotPassword';
import forgotPassword from './index';

describe('forgotPassword reducer', () => {
  describe('forgotPassword action reducers', () => {
    it('forgotPassword Request', () => {
      const action = actionCreators.forgotPasswordRequest('foo@example.com');
      const previousState = {
        errors: ['foo', 'bar'],
        isSuccess: true
      };

      const expectedState = {
        errors: [],
        isSuccess: false
      };

      expect(forgotPassword(previousState, action)).to.eql(expectedState);
    });

    it('forgotPassword Success', () => {
      const action = actionCreators.forgotPasswordSuccess();
      const previousState = {
        errors: ['foo', 'bar'],
        isSuccess: false
      };

      const expectedState = {
        errors: [],
        isSuccess: true
      };

      expect(forgotPassword(previousState, action)).to.eql(expectedState);
    });

    it('Login Failure', () => {
      const action = actionCreators.forgotPasswordFailure(['fooError']);
      const previousState = {
        errors: ['bazError', 'barError'],
        isSuccess: false
      };

      const expectedState = {
        errors: ['fooError'],
        isSuccess: false
      };

      expect(forgotPassword(previousState, action)).to.eql(expectedState);
    });
  });
});
