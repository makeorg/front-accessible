/* @flow */
import axios from 'axios';
import axiosRetry from 'axios-retry';
import * as UrlHelper from 'Helpers/url';
import Logger from 'Services/Logger';
import { APP_NAME } from 'Constants/config';
import { env } from '../../shared/env';

const HOSTNAME = (typeof window !== 'undefined' && window && window.location && window.location.hostname) || null;
const LOCATION_PARAMS = typeof window !== 'undefined' && window && window.location && window.location.search;
const BROWSER_API_URL = (
  typeof window !== 'undefined'
  && window
  && window.API_URL
  && window.API_URL !== '__API_URL__'
) ? window.API_URL : null;

export const API_URL = BROWSER_API_URL || process.env.API_URL || 'https://api.preprod.makeorg.tech';
export const NODE_API_BASE = env.isDev() ? 'http://localhost:9009' : '';

axiosRetry(axios, {
  retries: 5,
  retryDelay: retryCount => retryCount * 100
});

/**
 * handle error for http response
 * @param  {Object} response
 * @return {String|Object}
 */
export const handleErrors = (error: Object) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        throw error.response.data;
      case 500:
        Logger.logError('Api Response');
        throw error.response.status;
      default:
        throw error.response.status;
    }
  }

  throw error.message;
};

let instance = null;

class ApiService {
  _language: ?string = '';

  _country: ?string = '';

  _operationId: ?string = '';

  _questionId: ?string = '';

  _source: ?string = '';

  _sessionId: ?string = '';

  _token: ?string = '';

  constructor() {
    if (!instance) {
      instance = this;
    }

    this._token = null;

    return instance;
  }

  set language(language: string) {
    this._language = language;
  }

  get language(): string {
    return this._language;
  }

  set country(country: string) {
    this._country = country;
  }

  get country(): string {
    return this._country;
  }

  set operationId(operationId: string) {
    this._operationId = operationId;
  }

  get operationId(): string {
    return this._operationId;
  }

  set questionId(questionId) {
    this._questionId = questionId;
  }

  get questionId() {
    return this._questionId;
  }

  set source(source: string) {
    this._source = source;
  }

  get source(): string {
    return this._source;
  }

  set sessionId(sessionId: string) {
    this._sessionId = sessionId;
  }

  get sessionId(): string {
    return this._sessionId;
  }

  set token(token: Object) {
    this._token = token;
  }

  get token(): ?Object {
    return this._token;
  }

  callApi(url: string, options: Object = {}): Promise<any> {
    const paramsQuery = UrlHelper.getParamsQuery(LOCATION_PARAMS);
    let headers = Object.assign({}, {
      'Content-Type': 'application/json; charset=UTF-8',
      'x-hostname': HOSTNAME,
      'x-session-id': this._sessionId,
      'x-make-country': this._country,
      'x-make-language': this._language,
      'x-make-location': 'core',
      'x-make-source': this._source,
      'x-make-question-id': this._questionId,
      'x-make-question': this._questionId,
      'x-make-operation': this._operationId,
      'x-make-app-name': APP_NAME
    }, options.headers || {});

    if (paramsQuery) {
      headers = Object.assign({}, headers, {
        'x-get-parameters': paramsQuery
      });
    }

    if (this.token) {
      headers = Object.assign({}, headers, {
        Authorization: `${this.token.token_type} ${this.token.access_token}`
      });
    }

    return axios(`${API_URL}${url}`, {
      method: options.method,
      headers,
      data: options.body
    })
      .then(response => response.data)
      .catch(handleErrors);
  }
}

export default new ApiService();
