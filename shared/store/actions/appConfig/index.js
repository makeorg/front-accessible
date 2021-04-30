/* @flow */
import {
  SET_COUNTRY_CONFIGURATION,
  SET_DESKTOP_DEVICE,
  SET_LANGUAGE_CONFIGURATION,
  SET_MOBILE_DEVICE,
} from 'Shared/store/actionTypes';

export const setCountryCode = (country: string, language: string) => ({
  type: SET_COUNTRY_CONFIGURATION,
  payload: { country, language },
});

export const setLanguageCode = (language: string) => ({
  type: SET_LANGUAGE_CONFIGURATION,
  payload: { language },
});

export const setDesktopDevice = () => ({
  type: SET_DESKTOP_DEVICE,
});

export const setMobileDevice = () => ({
  type: SET_MOBILE_DEVICE,
});
