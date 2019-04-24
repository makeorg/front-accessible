import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { getQuestion, getQuestionConfiguration } from './QuestionService';
import { logger } from '../logger';

const fs = require('fs');
const cache = require('memory-cache');
const { SERVER_DIR } = require('../paths');

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

      const result = await getQuestion('foo');

      expect(cache.get).toHaveBeenCalledWith('QUESTION_foo');

      expect(result).toBe('fooCache');
    });

    it('return content from Api and put it in cache', async () => {
      jest.spyOn(cache, 'put');

      QuestionApiService.getDetail.mockReturnValueOnce('QuestionFoo');

      const result = await getQuestion('foo');

      expect(cache.put).toHaveBeenCalledWith(
        'QUESTION_foo',
        'QuestionFoo',
        300000
      );

      expect(result).toBe('QuestionFoo');
    });

    it('thorw error when fetching content from Api and log it', async () => {
      jest.spyOn(logger, 'log');
      const error = new Error('Api error');
      QuestionApiService.getDetail.mockRejectedValue(error);

      const result = await getQuestion('foo');

      expect(cache.put).not.toHaveBeenCalled();
      expect(logger.log).toHaveBeenCalledWith('error', error);

      expect(result).toBeNull();
    });
  });
  describe('getQuestionConfiguration', () => {
    it('return content from cache', async () => {
      jest.spyOn(cache, 'get');

      cache.get.mockReturnValueOnce('fooCache');

      const result = await getQuestionConfiguration('foo');

      expect(cache.get).toHaveBeenCalledWith(
        `${SERVER_DIR}/staticData/operationsParams/foo.json`
      );
      expect(result).toBe('fooCache');
    });

    it('return content from File, parse it and put it in cache', async () => {
      jest.spyOn(cache, 'put');
      const fileContent = '{\n"toto": "bar"}';
      const expectedResult = { toto: 'bar' };
      fs.readFileSync.mockReturnValueOnce(fileContent);

      const result = await getQuestionConfiguration('foo');

      expect(cache.put).toHaveBeenCalledWith(
        `${SERVER_DIR}/staticData/operationsParams/foo.json`,
        expectedResult,
        300000
      );

      expect(result).toEqual(expectedResult);
    });
  });
});
