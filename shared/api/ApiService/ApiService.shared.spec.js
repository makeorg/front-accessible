import axios from 'axios';
import { Logger } from 'Shared/services/Logger';
import {
  ApiServiceShared,
  handleErrors,
  ApiServiceError,
} from './ApiService.shared';
import { API_URL } from './configuration';

describe('ApiServiceShared', () => {
  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'x-hostname': 'localhost',
    'x-make-app-name': undefined,
    'x-make-location': 'core',
  };

  beforeEach(() => {
    axios.mockClear();
  });

  describe('callApi', () => {
    it('with post method and headers', () => {
      const url = '/tracking/front';
      const options = { method: 'POST' };

      ApiServiceShared.callApi(url, options);
      expect(axios).toHaveBeenNthCalledWith(1, API_URL + url, {
        data: undefined,
        headers,
        method: 'POST',
        withCredentials: true,
        httpsAgent: undefined,
      });
    });

    it('with get method and headers', () => {
      const url = '/tracking/front';
      const options = { method: 'GET', params: { value: 'value' } };

      ApiServiceShared.callApi(url, options);
      expect(axios).toHaveBeenNthCalledWith(1, API_URL + url, {
        data: undefined,
        params: { value: 'value' },
        headers,
        method: 'GET',
        withCredentials: true,
      });
    });

    it('must return data', async () => {
      const result = { data: 'success' };
      axios.mockResolvedValue(result);
      const response = await ApiServiceShared.callApi('/url');
      expect(response).toBe(result);
    });

    it('must handle promise', async () => {
      axios.mockRejectedValue({ message: 'error' });
      try {
        await ApiServiceShared.callApi('/url');
      } catch (error) {
        expect(error).toEqual(Error('error'));
      }
    });
  });

  describe('handleErrors', () => {
    it('default status', () => {
      const error = {
        response: {
          status: 200,
        },
      };
      expect(() => handleErrors(error)).toThrow(
        new ApiServiceError('', 200, 'none')
      );
    });

    it('status 400', () => {
      const error = {
        response: {
          status: 400,
          data: 'error 400',
        },
      };
      expect(() => handleErrors(error, 'http://test', 'GET')).toThrow(
        new ApiServiceError('', 400, 'error data')
      );
    });

    it('status 500', () => {
      jest.spyOn(Logger, 'logError');
      const error = {
        message: 'error message',
        response: {
          data: 'error data',
          status: 500,
          headers: {
            'x-headers': 'foo',
          },
        },
      };
      expect(() => handleErrors(error, null, 'GET')).toThrow(
        new ApiServiceError('error message', 500, 'error data')
      );
      expect(Logger.logError).toHaveBeenNthCalledWith(
        1,
        'API call error - error message - {"status":"500","url":"none","method":"GET","responseData":"error data"}'
      );
    });
  });
});
