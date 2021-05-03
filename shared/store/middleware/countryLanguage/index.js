// @flow

import { Dispatch, Action } from 'redux';
import {
  SET_COUNTRY_CONFIGURATION,
  SET_LANGUAGE_CONFIGURATION,
} from 'Shared/store/actionTypes';
import { setLanguage, setCountry } from 'Shared/helpers/countries';
import { DEFAULT_COUNTRY, DEFAULT_LANGUAGE } from 'Shared/constants/config';

export const language = () => (next: Dispatch) => (action: Action) => {
  switch (action.type) {
    case SET_LANGUAGE_CONFIGURATION: {
      setLanguage(action.payload.language);

      return next(action);
    }
    default:
      return next(action);
  }
};

export const countryLanguage = () => (next: Dispatch) => (action: Action) => {
  switch (action.type) {
    case SET_COUNTRY_CONFIGURATION: {
      setCountry(action.payload.country || DEFAULT_COUNTRY);
      setLanguage(
        action.payload.language || DEFAULT_LANGUAGE,
        action.payload.country || DEFAULT_COUNTRY
      );

      return next(action);
    }
    default:
      return next(action);
  }
};
