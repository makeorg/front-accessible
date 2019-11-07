/* @flow */
import { IApiServiceStrategy } from './index';
import { ApiServiceShared } from './ApiService.shared';
import { getLocationContext } from './getLocationContext';

export class ApiServiceClient implements IApiServiceStrategy {
  _language: string = '';

  _country: string = '';

  _questionId: string = '';

  _source: string = '';

  _instance = null;

  _referrer: string = '';

  _customData: string = '';

  constructor() {
    if (!this._instance) {
      this._instance = this;
    }

    this._referrer =
      typeof window !== 'undefined' && !!window.document.referrer
        ? window.document.referrer
        : '';

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

  set referrer(referrer: string) {
    this._referrer = referrer;
  }

  get referrer(): string {
    return this._referrer;
  }

  set customData(customData: string) {
    this._customData = customData;
  }

  get customData(): string {
    return this._customData;
  }

  callApi(url: string, options: Object = {}): Promise<any> {
    const defaultHeaders = {
      'x-make-country': this._country,
      'x-make-language': this._language,
      'x-make-source': this._source,
      'x-make-question-id': this._questionId,
      'x-make-location': getLocationContext(
        window.location.pathname,
        this._questionId,
        options.proposalId
      ),
      'x-make-referrer': this._referrer,
      'x-make-custom-data': this._customData,
    };
    const headers = Object.assign({}, defaultHeaders, options.headers || {});

    return ApiServiceShared.callApi(url, { ...options, headers });
  }
}

export const apiClient = new ApiServiceClient();
