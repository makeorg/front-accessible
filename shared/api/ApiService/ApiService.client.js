/* @flow */
import { IApiServiceStrategy } from './index';
import { ApiServiceShared } from './ApiService.shared';
import { getLocationContext } from './getLocationContext';

export class ApiServiceClient implements IApiServiceStrategy {
  _language: string = '';

  _country: string = '';

  _operationId: string = '';

  _questionId: string = '';

  _source: string = '';

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

  callApi(url: string, options: Object = {}): Promise<any> {
    const defaultHeaders = {
      'x-make-country': this._country,
      'x-make-language': this._language,
      'x-make-source': this._source,
      'x-make-question-id': this._questionId,
      'x-make-question': this._questionId,
      'x-make-operation': this._operationId,
      'x-make-location': getLocationContext(
        window.location.pathname,
        this._questionId,
        options.proposalId
      ),
    };
    const headers = Object.assign({}, defaultHeaders, options.headers || {});

    return ApiServiceShared.callApi(url, { ...options, headers });
  }
}
