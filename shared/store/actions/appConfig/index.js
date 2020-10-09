/* @flow */
import {
  SET_COUNTRY_CODE,
  SET_LANGUAGE,
  SET_TRANSLATIONS,
} from 'Shared/store/actionTypes';

export const setCountryCode = (country: string) => ({
  type: SET_COUNTRY_CODE,
  payload: { country },
});

export const setLanguageByCountryCode = (countryCode: string) => ({
  type: SET_LANGUAGE,
  payload: { countryCode },
});

export const setTranslationsByCountryCode = (countryCode: string) => ({
  type: SET_TRANSLATIONS,
  payload: { countryCode },
});
