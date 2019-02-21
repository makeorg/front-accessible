import axios from 'axios';
import { Logger } from 'Shared/services/Logger';
import { ApiServiceShared, API_URL, handleErrors } from './ApiService.shared';

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
      axios.mockResolvedValue({ data: 'success' });
      const response = await ApiServiceShared.callApi('/url');
      expect(response).toBe('success');
    });

    it('must handle promise', async () => {
      axios.mockRejectedValue({ message: 'error' });
      try {
        await ApiServiceShared.callApi('/url');
      } catch (error) {
        expect(error).toBe('error');
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
      expect(() => handleErrors(error)).toThrow('200');
    });

    it('status 400', () => {
      const error = {
        response: {
          status: 400,
          data: 'error 400',
        },
      };
      expect(() => handleErrors(error)).toThrow('error 400');
    });

    it('status 500', () => {
      jest.spyOn(Logger, 'logError');
      const error = {
        response: {
          status: 500,
        },
      };
      expect(() => handleErrors(error)).toThrow('500');
      expect(Logger.logError).toHaveBeenNthCalledWith(1, 'Api Response');
    });
  });
});
