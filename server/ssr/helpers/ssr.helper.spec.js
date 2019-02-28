import { logger } from '../../logger';
import { logError } from './ssr.helper';

jest.mock('../../logger', () => ({
  logger: { log: jest.fn() },
}));

describe('ssr helper', () => {
  describe('logError', () => {
    it('default case', () => {
      logError('value');
      expect(logger.log).toHaveBeenNthCalledWith(1, 'error', 'value');
    });

    it('must return stack', () => {
      const stack = { stack: 'value' };
      logError(stack);
      expect(logger.log).toHaveBeenNthCalledWith(1, 'error', 'value');
    });
  });
});
