/* @flow */
import { SET_COUNTRY_CONFIGURATION } from 'Shared/store/actionTypes';

export const setLanguageByCountryCode = (country: string) => ({
  type: SET_COUNTRY_CONFIGURATION,
  payload: { country },
});
