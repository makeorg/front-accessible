// @flow
import { DESKTOP_DEVICE, MOBILE_DEVICE } from 'Shared/constants/config';
import { i18n } from 'Shared/i18n';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import {
  SET_COUNTRY_CONFIGURATION,
  SET_LANGUAGE_CONFIGURATION,
  SET_DESKTOP_DEVICE,
  SET_MOBILE_DEVICE,
} from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateConfig } from 'Shared/store/types';

export function appConfig(
  state: StateConfig = initialState.appConfig,
  action: Object
) {
  switch (action.type) {
    case SET_LANGUAGE_CONFIGURATION:
      return {
        ...state,
        language: action.payload.language,
        translations: i18n.getResourceBundle(
          action.payload.language,
          TRANSLATION_NAMESPACE
        ),
      };
    case SET_COUNTRY_CONFIGURATION:
      return {
        ...state,
        country: action.payload.country,
        language: action.payload.language,
        translations: i18n.getResourceBundle(
          action.payload.language,
          TRANSLATION_NAMESPACE
        ),
      };
    case SET_DESKTOP_DEVICE:
      return {
        ...state,
        device: DESKTOP_DEVICE,
      };
    case SET_MOBILE_DEVICE:
      return {
        ...state,
        device: MOBILE_DEVICE,
      };
    default:
      return state;
  }
}
