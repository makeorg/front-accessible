const HOSTNAME = typeof window !== 'undefined' && window && window.location && window.location.hostname;
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

const fetchRetry = (url, options = {}, retry = 5, timeout = 9000) => (
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
const handleErrors = (response) => {
  if (!response.ok) {
    switch (response.status) {
      case 400:
        return response.json().then((errors) => { throw errors; });
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
  constructor() {
    if (!instance) {
      instance = this;
    }

    this._language = null;
    this._country = null;
    this._operationId = null;
    this._source = null;
    this._token = null;

    return instance;
  }

  set language(language) {
    this._language = language;
  }

  get language() {
    return this._language;
  }

  set country(country) {
    this._country = country;
  }

  get country() {
    return this._country;
  }

  set operationId(operationId) {
    this._operationId = operationId;
  }

  get operationId() {
    return this._operationId;
  }

  set source(source) {
    this._source = source;
  }

  get source() {
    return this._source;
  }

  set token(token) {
    this._token = token;
  }

  get token() {
    return this._token;
  }

  callApi(url, options = {}) {
    let headers = Object.assign({}, {
      'Content-Type': 'application/json; charset=UTF-8',
      'x-hostname': HOSTNAME,
      'x-make-country': this._country,
      'x-make-language': this._language,
      'x-make-location': 'core',
      'x-make-source': this._source,
      'x-make-question': '',
      'x-make-operation': this._operationId
    }, options.headers || {});

    if (this.token !== null) {
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
