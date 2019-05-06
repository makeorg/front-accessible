import httpMocks from 'node-mocks-http';
import { homeApi } from './home';

const fs = require('fs');
const cache = require('memory-cache');
const { SERVER_DIR } = require('../paths');

jest.mock('memory-cache');
jest.mock('fs');

describe('Home Api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('resonse Header in Home api', () => {
    it('set Header for Access Allow Origin and content Type', () => {
      const request = httpMocks.createRequest({});
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'setHeader');
      cache.get.mockReturnValueOnce('fooCache');

      homeApi(request, response, () => {});
      expect(response.setHeader.mock.calls).toEqual([
        ['Access-Control-Allow-Origin', '*'],
        ['Content-Type', 'application/json'],
      ]);
    });
  });

  describe('fetch response from cache', () => {
    it('return response from memory cache', () => {
      const request = httpMocks.createRequest({});
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'send');
      jest.spyOn(cache, 'get');

      cache.get.mockReturnValueOnce('fooCache');
      homeApi(request, response, () => {});
      expect(response.send).toHaveBeenCalledWith('fooCache');
      expect(cache.get).toHaveBeenCalledWith(
        `${SERVER_DIR}/staticData/home.json`
      );
    });

    it('return response from file and put the content in cache', () => {
      const request = httpMocks.createRequest({});
      const response = httpMocks.createResponse();
      const fileContent = 'baz';
      jest.spyOn(response, 'send');
      jest.spyOn(cache, 'get');
      jest.spyOn(cache, 'put');

      cache.get.mockReturnValueOnce(undefined);
      fs.readFileSync.mockReturnValueOnce(fileContent);

      homeApi(request, response, () => {});
      expect(response.send).toHaveBeenCalledWith(fileContent);
      expect(cache.get).toHaveBeenCalledWith(
        `${SERVER_DIR}/staticData/home.json`
      );
      expect(cache.put).toHaveBeenCalledWith(
        `${SERVER_DIR}/staticData/home.json`,
        fileContent
      );
    });

    it('return not found when params file does not exist', () => {
      const request = httpMocks.createRequest({});
      const response = httpMocks.createResponse();
      jest.spyOn(response, 'status');
      jest.spyOn(response, 'send');
      jest.spyOn(cache, 'get');
      jest.spyOn(cache, 'put');

      cache.get.mockReturnValueOnce(undefined);
      fs.readFileSync.mockImplementation(() => {
        throw new Error('bad');
      });

      homeApi(request, response, () => {});

      expect(cache.get).toHaveBeenCalledWith(
        `${SERVER_DIR}/staticData/home.json`
      );
      expect(cache.put).not.toHaveBeenCalled();
      expect(response.send).not.toHaveBeenCalled();
      expect(response.status).toHaveBeenCalledWith(404);
    });
  });
});
