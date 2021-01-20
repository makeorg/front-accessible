/* @flow */
import {
  SET_COUNTRY_CONFIGURATION,
  SET_DESKTOP_DEVICE,
  SET_MOBILE_DEVICE,
} from 'Shared/store/actionTypes';

export const setCountryCode = (country: string) => ({
  type: SET_COUNTRY_CONFIGURATION,
  payload: { country },
});

export const setDesktopDevice = () => ({
  type: SET_DESKTOP_DEVICE,
});

export const setMobileDevice = () => ({
  type: SET_MOBILE_DEVICE,
});
