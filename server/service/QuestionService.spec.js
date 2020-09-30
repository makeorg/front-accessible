import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { ApiServiceError } from 'Shared/api/ApiService/ApiServiceError';
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

      const result = await QuestionService.getQuestion('foo', 'FR');

      expect(cache.get).toHaveBeenCalledWith('QUESTION_foo');

      expect(result).toBe('fooCache');
    });

    it('return content from Api and put it in cache', async () => {
      jest.spyOn(cache, 'put');

      QuestionApiService.getDetail.mockReturnValueOnce({
        data: {
          questionId: 'QuestionFoo',
          countries: ['FR'],
          operation: { questions: [] },
        },
      });

      const result = await QuestionService.getQuestion('foo', 'FR');

      expect(cache.put).toHaveBeenCalledWith(
        'QUESTION_foo',
        {
          questionId: 'QuestionFoo',
          countries: ['FR'],
          country: 'FR',
          operation: { questions: [] },
        },
        300000
      );

      expect(result).toMatchObject({
        countries: ['FR'],
        country: 'FR',
        operation: { questions: [] },
        questionId: 'QuestionFoo',
      });
    });

    it('throw error when fetching content from Api and log it', async () => {
      jest.spyOn(logger, 'log');
      const error = new ApiServiceError(
        'error',
        500,
        undefined,
        undefined,
        undefined,
        'error-id'
      );

      QuestionApiService.getDetail.mockRejectedValue(error);

      const result = await QuestionService.getQuestion('foo');

      expect(cache.put).not.toHaveBeenCalled();
      expect(logger.log).toHaveBeenCalledWith('error', {
        name: 'api-service-error',
        message: 'error in server/service/QuestionService/getQuestion: error',
        logId: 'error-id',
        status: 500,
        columnNumber: undefined,
        fileName: undefined,
        lineNumber: undefined,
        method: undefined,
        responseData: undefined,
        url: undefined,
        stack: expect.any(String),
      });

      expect(result).toBeNull();
    });
  });
});
