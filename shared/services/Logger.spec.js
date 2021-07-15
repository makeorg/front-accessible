import { ApiServiceError } from 'Shared/api/ApiService/ApiServiceError';
import { Logger } from 'Shared/services/Logger';

describe('Logger Service', () => {
  describe('log normalizer', () => {
    const commonKeys = ['message', 'stack', 'app_logId', 'app_logName'];

    it('Normalize string', async () => {
      const result = Logger.normalizeData('hello world!!');
      expect(Object.keys(result)).toEqual(commonKeys);
      expect(result).toEqual(
        expect.objectContaining({
          message: 'hello world!!',
          stack: 'no-stack',
        })
      );
    });

    it('Normalize ApiServiceError', async () => {
      const error = new ApiServiceError(
        'api message',
        200,
        { one: 'test one', two: 'test two' },
        'http://localhost',
        'POST',
        'LOGID_AAZZEZAL023232A',
        true,
        'REQUESTID_AZERAZE4343EZR'
      );
      error.stack = 'line1 \n line2';
      const result = Logger.normalizeData(error);

      expect(new Set(Object.keys(result))).toEqual(
        new Set([
          ...commonKeys,
          'app_logName',
          'app_columnNumber',
          'app_fileName',
          'app_lineNumber',
          'app_status',
          'app_responseData',
          'app_url',
          'app_method',
          'app_requestId',
        ])
      );
      expect(result).toEqual(
        expect.objectContaining({
          app_columnNumber: undefined,
          app_logName: 'api-service-error',
          app_fileName: undefined,
          app_lineNumber: undefined,
          app_logId: 'LOGID_AAZZEZAL023232A',
          app_method: 'POST',
          app_requestId: 'REQUESTID_AZERAZE4343EZR',
          app_responseData: { one: 'test one', two: 'test two' },
          app_status: 200,
          app_url: 'http://localhost',
          message: 'api message',
          stack: 'line1 \n line2',
        })
      );
    });

    it('Normalize Error', async () => {
      const error = new Error('error message');
      error.stack = 'line1 \n line2';
      error.name = 'error-name';
      const result = Logger.normalizeData(error);
      expect(new Set(Object.keys(result))).toEqual(
        new Set([
          ...commonKeys,
          'app_fileName',
          'app_lineNumber',
          'app_columnNumber',
        ])
      );
      expect(result).toEqual(
        expect.objectContaining({
          app_columnNumber: undefined,
          app_logName: 'error-name',
          app_fileName: undefined,
          app_lineNumber: undefined,
          message: 'error message',
          stack: 'line1 \n line2',
        })
      );
    });

    it('Normalize Object', async () => {
      const obj = {
        message: 'error message',
        other: 'other value',
        num: 1,
        obj: { test: '' },
      };
      const result = Logger.normalizeData(obj);

      expect(new Set(Object.keys(result))).toEqual(
        new Set([...commonKeys, 'other', 'num', 'obj'])
      );
      expect(result).toEqual(
        expect.objectContaining({
          app_logName: '-',
          message: 'error message',
          stack: '-',
          other: 'other value',
          num: 1,
          obj: { test: '' },
        })
      );
    });

    it('Normalize empty Object', async () => {
      const obj = {};
      const result = Logger.normalizeData(obj);

      expect(new Set(Object.keys(result))).toEqual(new Set(commonKeys));
      expect(result).toEqual(
        expect.objectContaining({
          app_logName: '-',
          stack: '-',
          message: '-',
        })
      );
    });
  });
});
