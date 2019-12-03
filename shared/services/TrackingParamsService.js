import { getTrackingLocation } from 'Shared/api/ApiService/getLocationContext';

/* @flow */
class TrackingParamsServiceClass {
  _source: string = '';

  _language: string = '';

  _country: string = '';

  _questionId: string = '';

  _questionSlug: string = '';

  _referrer: string = '';

  static _instance = Object;

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

  set source(source: string) {
    this._source = source;
  }

  set language(language: string) {
    this._language = language;
  }

  get language() {
    return this._language;
  }

  set country(country: string) {
    this._country = country;
  }

  set questionId(questionId: string) {
    this._questionId = questionId;
  }

  set questionSlug(questionSlug: string) {
    this._questionSlug = questionSlug;
  }

  set referrer(referrer: string) {
    this._referrer = referrer;
  }

  all() {
    const parentUrl = () => {
      return typeof window !== 'undefined' && window && window.location
        ? window.location.href
        : undefined;
    };

    return {
      location: getTrackingLocation(window.location.pathname),
      source: this._source,
      language: this._language,
      country: this._country,
      questionId: this._questionId,
      questionSlug: this._questionSlug,
      referrer: this._referrer,
      url: parentUrl(),
    };
  }
}

const instance = new TrackingParamsServiceClass();

export const trackingParamsService = instance;
