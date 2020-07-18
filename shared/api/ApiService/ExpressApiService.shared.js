/* eslint-disable max-classes-per-file */
/* @flow */
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { NODE_API_BASE } from './configuration';
import { handleErrors } from './ApiService.shared';

export class ExpressApiServiceSharedError extends Error {
  status: ?number;

  data: ?Object;

  constructor(message: string, status: ?number, data: ?Object) {
    super(message);
    this.status = status;
    this.data = data;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExpressApiServiceSharedError);
    }
  }
}

axiosRetry(axios, {
  retries: 5,
  retryDelay: retryCount => retryCount * 100,
});

class ExpressApiServiceSharedClass {
  // eslint-disable-next-line class-methods-use-this
  callApi(url: string, options: Object = {}): Promise<any> {
    const defaultHeaders = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
    const headers = { ...defaultHeaders, ...(options.headers || {}) };

    const apiUrl = `${NODE_API_BASE}${url}`;

    return axios(apiUrl, {
      method: options.method,
      headers,
      data: options.body,
      params: options.params,
      withCredentials: false,
      httpsAgent: options.httpsAgent || undefined,
    }).catch(error => handleErrors(error, apiUrl, options.method));
  }
}

export const ExpressApiServiceShared = new ExpressApiServiceSharedClass();
