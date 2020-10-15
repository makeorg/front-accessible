/* @flow */

import { SET_COUNTRY_CONFIGURATION } from 'Shared/store/actionTypes';
import { appConfig } from './index';

jest.mock('Shared/constants/config', () => ({
  DEFAULT_LANGUAGE: 'en',
}));

describe('appConfig reducer', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  const initialState = {
    countriesWithConsultations: [],
    country: '',
    language: '',
    queryParams: {},
    source: '',
    translations: {},
  };
  it('appConfig should return the initial state', () => {
    expect(appConfig(undefined, {})).toEqual(initialState);
  });

  it('action SET_COUNTRY_CONFIGURATION', () => {
    const action = {
      type: SET_COUNTRY_CONFIGURATION,
      payload: {
        country: 'GB',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      country: 'GB',
      language: 'en',
      translations: 'en',
    });
  });

  it('action SET_COUNTRY_CONFIGURATION from configured country', () => {
    const action = {
      type: SET_COUNTRY_CONFIGURATION,
      payload: {
        country: 'FR',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      country: 'FR',
      language: 'fr',
      translations: 'fr',
    });
  });
});
