/* @flow */

import {
  SET_COUNTRY_CODE,
  SET_LANGUAGE,
  SET_TRANSLATIONS,
} from 'Shared/store/actionTypes';
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

  it('action SET_COUNTRY_CODE', () => {
    const action = {
      type: SET_COUNTRY_CODE,
      payload: {
        country: 'GB',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      country: 'GB',
    });
  });

  it('action SET_LANGUAGE from configured country', () => {
    const action = {
      type: SET_LANGUAGE,
      payload: {
        country: 'FR',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      language: 'fr',
    });
  });

  it('action SET_LANGUAGE from unknown country', () => {
    const action = {
      type: SET_LANGUAGE,
      payload: {
        country: 'GB',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      language: 'en',
    });
  });

  it('action SET_TRANSLATIONS from configured country', () => {
    const action = {
      type: SET_TRANSLATIONS,
      payload: {
        country: 'FR',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      translations: 'fr',
    });
  });

  it('action SET_TRANSLATIONS from unknown country', () => {
    const action = {
      type: SET_TRANSLATIONS,
      payload: {
        country: 'GB',
      },
    };

    expect(appConfig(undefined, action)).toEqual({
      ...initialState,
      translations: 'en',
    });
  });
});
