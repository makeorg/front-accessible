import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { QuestionService } from './QuestionService';
import { logger } from '../logger';

const cache = require('memory-cache');

jest.mock('memory-cache');
jest.mock('fs');
jest.mock('Shared/api/QuestionApiService');

jest.mock('../logger', () => ({
  logger: { log: jest.fn() },
}));

describe('Question Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getQuestion', () => {
    it('return content from cache', async () => {
      jest.spyOn(cache, 'get');

      cache.get.mockReturnValueOnce('fooCache');

      const result = await QuestionService.getQuestion('foo');

      expect(cache.get).toHaveBeenCalledWith('QUESTION_foo');

      expect(result).toBe('fooCache');
    });

    it('return content from Api and put it in cache', async () => {
      jest.spyOn(cache, 'put');

      QuestionApiService.getDetail.mockReturnValueOnce({ data: 'QuestionFoo' });

      const result = await QuestionService.getQuestion('foo');

      expect(cache.put).toHaveBeenCalledWith(
        'QUESTION_foo',
        'QuestionFoo',
        300000
      );

      expect(result).toBe('QuestionFoo');
    });

    it('throw error when fetching content from Api and log it', async () => {
      jest.spyOn(logger, 'log');
      const error = {
        response: {
          status: 500,
        },
        message: 'error',
      };
      QuestionApiService.getDetail.mockRejectedValue(error);

      const result = await QuestionService.getQuestion('foo');

      expect(cache.put).not.toHaveBeenCalled();
      expect(logger.log).toHaveBeenCalledWith('error', error);

      expect(result).toBeNull();
    });
  });
});
