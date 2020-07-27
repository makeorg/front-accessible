import { v4 as uuidv4 } from 'uuid';
import { logger } from '../../logger';
import { logError } from './ssr.helper';

jest.mock('../../logger', () => ({
  logger: { log: jest.fn() },
}));

jest.mock('uuid');
uuidv4.mockReturnValue('uuid-121212');

describe('ssr helper', () => {
  describe('logError', () => {
    it('default case', () => {
      logError('value');
      expect(logger.log).toHaveBeenNthCalledWith(1, 'error', {
        logId: 'uuid-121212',
        message: 'value',
        stack: 'no-stack',
      });
    });

    it('must return stack', () => {
      const stack = { stack: 'value stack' };
      logError(stack);
      expect(logger.log).toHaveBeenNthCalledWith(2, 'error', {
        logId: 'uuid-121212',
        stack: 'value stack',
      });
    });
  });
});
