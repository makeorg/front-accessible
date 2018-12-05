/* @flow */
import * as UrlHelper from '../helpers/url';
import Logger from '../services/Logger';

const HOSTNAME = typeof window !== 'undefined' && window && window.location && window.location.hostname;
const LOCATION_PARAMS = typeof window !== 'undefined' && window && window.location && window.location.search;
const API_URL = (
  typeof window !== 'undefined'
  && window
  && window.API_URL
  && window.API_URL !== '__API_URL__'
) ? window.API_URL : 'https://api.preprod.makeorg.tech';

/**
 * fetch with retry and timeout function
 * @param  {String} url
 * @param  {Object} options
 * @param  {Number} retry
 * @param  {Number} timeout
 *
 * @return Promise
 */

export const fetchRetry = (
  url: string,
  options: Object = {},
  retry: number = 5,
  timeout:number = 9000
): Promise<any> => (
  new Promise((resolve, reject) => {
    fetch(url, options).then(resolve)
      .catch((error) => {
        if (retry === 1) return reject(error);
        return resolve(fetchRetry(url, options, retry - 1));
      });

    setTimeout(() => reject(new TypeError('Client timed out')), timeout);
  })
);


/**
 * handle error for http response
 * @param  {Object} response
 * @return {String|Object}
 */
export const handleErrors = (response: Object) => {
  if (!response.ok) {
    switch (response.status) {
      case 400:
        return response.json().then((errors) => { throw errors; });
      case 500:
        Logger.logError('Api Response');
        throw response.status;
      default:
        throw response.status;
    }
  }

  if (response.status === 204) {
    return {};
  }

  return response.text().then((text) => {
    if (text) { return JSON.parse(text); }

    return {};
  });
};

let instance = null;

class ApiService {
  _language: string;

  _country: string;

  _operationId: string;

  _source: string;

  _sessionId: string;

  _token: ?Object;

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
      'x-make-question': '',
      'x-make-operation': this._operationId
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

    return fetchRetry(`${API_URL}${url}`, {
      method: options.method,
      headers,
      body: options.body,
      credentials: 'include'
    })
      .then(handleErrors);
  }
}

export default new ApiService();
