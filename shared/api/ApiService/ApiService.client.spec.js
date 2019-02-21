import { ApiServiceShared } from './ApiService.shared';
import { ApiServiceClient } from './ApiService.client';

jest.mock('./ApiService.shared');

describe('ApiServiceClient', () => {
  let apiClient: ApiServiceClient;
  beforeEach(() => {
    jest.spyOn(ApiServiceShared, 'callApi');
    apiClient = new ApiServiceClient();
  });

  afterEach(() => {
    ApiServiceShared.callApi.mockRestore();
    apiClient = undefined;
  });

  it('callApi must call ApiServiceShared.callApi by default', () => {
    // given
    const url = '/api/endpoint';
    const options = { headers: { value: 'value' } };
    // when
    apiClient.callApi(url, options);
    // then
    expect(ApiServiceShared.callApi).toHaveBeenNthCalledWith(1, url,
      {
        ...options,
        ...{
          headers: {
            'x-make-country': '',
            'x-make-language': '',
            'x-make-operation': '',
            'x-make-question': '',
            'x-make-question-id': '',
            'x-make-source': '',
            ...options.headers
          }
        }
      });
  });

  it('callApi must call ApiServiceShared.callApi with headers', () => {
    // given
    const url = '/api/endpoint';
    const options = { headers: { value: 'value' } };
    // when
    apiClient.language = 'fr';
    apiClient.country = 'FR';
    apiClient.source = 'core';
    apiClient.questionId = '1234';
    apiClient.operationId = 'abcd';
    apiClient.token = {
      token_type: 'token_type',
      access_token: 'access_token'
    };
    apiClient.callApi(url, options);
    // then
    expect(ApiServiceShared.callApi).toHaveBeenNthCalledWith(1, url,
      {
        ...options,
        ...{
          headers: {
            'x-make-country': 'FR',
            'x-make-language': 'fr',
            'x-make-operation': 'abcd',
            'x-make-question': '1234',
            'x-make-question-id': '1234',
            'x-make-source': 'core',
            Authorization: 'token_type access_token',
            ...options.headers
          }
        }
      });
  });

  it('token property must be enabled', () => {
    expect(apiClient.token).toBe(undefined);
    apiClient.token = {
      token_type: 'token_type',
      access_token: 'access_token'
    };
    expect(apiClient.token).toEqual({
      token_type: 'token_type',
      access_token: 'access_token'
    });
  });

  it('language property must be enabled', () => {
    expect(apiClient.language).toBe('');
    apiClient.language = 'fr';
    expect(apiClient.language).toBe('fr');
  });

  it('source property must be enabled', () => {
    expect(apiClient.source).toBe('');
    apiClient.source = 'core';
    expect(apiClient.source).toBe('core');
  });

  it('country property must be enabled', () => {
    expect(apiClient.country).toBe('');
    apiClient.country = 'FR';
    expect(apiClient.country).toBe('FR');
  });

  it('questionId property must be enabled', () => {
    expect(apiClient.questionId).toBe('');
    apiClient.questionId = '1234';
    expect(apiClient.questionId).toBe('1234');
  });

  it('operationId property must be enabled', () => {
    expect(apiClient.operationId).toBe('');
    apiClient.operationId = 'abcd';
    expect(apiClient.operationId).toBe('abcd');
  });
});
