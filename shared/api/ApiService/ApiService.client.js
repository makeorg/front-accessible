/* @flow */
import { IApiServiceStrategy } from './index';
import { type TypeToken } from './types';
import { ApiServiceShared } from './ApiService.shared';

export class ApiServiceClient implements IApiServiceStrategy {
  _language: string = '';

  _country: string = '';

  _operationId: string = '';

  _questionId: string = '';

  _source: string = '';

  _token: TypeToken;

  _instance = null;

  constructor() {
    if (!this._instance) {
      this._instance = this;
    }

    return this._instance;
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

  set questionId(questionId: string) {
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

  set token(token: TypeToken) {
    this._token = token;
  }

  get token(): ?TypeToken {
    return this._token;
  }

  callApi(url: string, options: Object = {}): Promise<any> {
    const defaultHeaders = {
      'x-make-country': this._country,
      'x-make-language': this._language,
      'x-make-source': this._source,
      'x-make-question-id': this._questionId,
      'x-make-question': this._questionId,
      'x-make-operation': this._operationId,
    };
    let headers = Object.assign({}, defaultHeaders, options.headers || {});

    if (this.token) {
      headers = Object.assign({}, headers, {
        Authorization: `${this.token.token_type} ${this.token.access_token}`,
      });
    }
    return ApiServiceShared.callApi(url, { ...options, headers });
  }
}
