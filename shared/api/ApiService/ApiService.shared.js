/* eslint-disable max-classes-per-file */
/* @flow */
import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as UrlHelper from 'Shared/helpers/url';
import { Logger } from 'Shared/services/Logger';
import { APP_NAME } from 'Shared/constants/config';
import { type ErrorResponse } from './types';
import { HOSTNAME, LOCATION_PARAMS, API_URL } from './configuration';

export class ApiServiceError extends Error {
  status: ?number;

  data: ?Object;

  constructor(message: string, status: ?number, data: ?Object) {
    super(message);
    this.status = status;
    this.data = data;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiServiceError);
    }
  }
}

axiosRetry(axios, {
  retries: 5,
  retryDelay: retryCount => retryCount * 100,
});

/**
 * handle error for http response
 * @param  {ErrorResponse} error
 * @param {string} apiUrl
 * @param {string} method
 * @return {void}
 */
export const handleErrors = (
  error: ErrorResponse,
  requestUrl: string,
  requestMethod: string
) => {
  const status = error.response ? error.response.status : null;
  const responseData = error.response ? error.response.data : null;
  const hasConfig = error.response && error.response.config;
  const url = hasConfig ? error.response.config.url : null;
  const method = hasConfig ? error.response.config.method : null;

  if (!status || status >= 500) {
    Logger.logError(
      `API call error - ${error.message} - ${JSON.stringify({
        status: status ? status.toString() : 'none',
        url: url || requestUrl || 'none',
        method: method || requestMethod || 'none',
        responseData: responseData || 'none',
      })}`
    );
  }

  throw new ApiServiceError(error.message, status, responseData);
};

class ApiServiceSharedClass {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string, options: Object = {}): Promise<any> {
    const paramsQuery = UrlHelper.getParamsQuery(LOCATION_PARAMS);
    const defaultHeaders = {
      'Content-Type': 'application/json; charset=UTF-8',
      'x-hostname': HOSTNAME,
      'x-make-app-name': APP_NAME,
      'x-make-location': 'core',
    };
    let headers = { ...defaultHeaders, ...(options.headers || {}) };

    if (paramsQuery) {
      headers = { ...headers, 'x-get-parameters': paramsQuery };
    }
    const apiUrl = `${API_URL}${url}`;

    return axios(apiUrl, {
      method: options.method,
      headers,
      data: options.body,
      params: options.params,
      withCredentials: true,
      httpsAgent: options.httpsAgent || undefined,
    }).catch(error => handleErrors(error, apiUrl, options.method));
  }
}

export const ApiServiceShared = new ApiServiceSharedClass();
