/* @flow */
import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as UrlHelper from 'Shared/helpers/url';
import { Logger } from 'Shared/services/Logger';
import { APP_NAME } from 'Shared/constants/config';
import { env } from 'Shared/env';
import { type ErrorResponse } from './types';

const HOSTNAME =
  (typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.location.hostname) ||
  null;
const LOCATION_PARAMS =
  (typeof window !== 'undefined' &&
    window &&
    window.location &&
    window.location.search) ||
  '';
const BROWSER_API_URL =
  (typeof window !== 'undefined' &&
    window &&
    window.API_URL &&
    window.API_URL !== '__API_URL__' &&
    window.API_URL) ||
  null;

export const API_URL =
  BROWSER_API_URL || process.env.API_URL || 'http://localhost:9000';
export const NODE_API_BASE = env.isDev() ? 'http://localhost:9009' : '';

axiosRetry(axios, {
  retries: 5,
  retryDelay: retryCount => retryCount * 100,
});
/**
 * handle error for http response
 * @param  {Object} response
 * @return {String|Object}
 */
export const handleErrors = (error: ErrorResponse) => {
  const logDefaultError = () => {
    Logger.logError(
      `API call error - ${error.message} - ${JSON.stringify({
        status: error.response.status.toString(),
        url:
          error.response.config && error.response.config.url
            ? error.response.config.url
            : 'none',
        method:
          error.response.config && error.response.config.method
            ? error.response.config.method
            : 'none',
        responseData: error.response.data,
      })}`
    );
  };
  if (error.response) {
    switch (error.response.status) {
      case 401:
        break; // logs should not be managed here for 401
      case 404:
        Logger.logInfo(
          `API call error - ${error.message} - ${JSON.stringify({
            status: error.response.status.toString(),
            url:
              error.response.config && error.response.config.url
                ? error.response.config.url
                : 'none',
            method:
              error.response.config && error.response.config.method
                ? error.response.config.method
                : 'none',
            responseData: error.response.data,
          })}`
        );
        break;
      case 400:
        if (
          !error.response ||
          !error.response.data ||
          !JSON.stringify(error.response.data).includes('already_registered')
        ) {
          logDefaultError();
        }
        break;
      default:
        logDefaultError();
    }

    switch (error.response.status) {
      case 400:
        throw error.response.data;
      case 500:
        throw Error(error.response.headers);
      default:
        throw Error(error.response.status.toString());
    }
  }

  Logger.logError(error);
  throw Error(error.message);
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
    let headers = Object.assign({}, defaultHeaders, options.headers || {});

    if (paramsQuery) {
      headers = Object.assign({}, headers, {
        'x-get-parameters': paramsQuery,
      });
    }

    return axios(`${API_URL}${url}`, {
      method: options.method,
      headers,
      data: options.body,
      params: options.params,
      withCredentials: true,
      httpsAgent: options.httpsAgent || undefined,
    })
      .then(response => response.data)
      .catch(handleErrors);
  }
}

export const ApiServiceShared = new ApiServiceSharedClass();
