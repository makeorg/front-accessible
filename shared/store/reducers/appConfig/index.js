// @flow
import { getLanguageFromCountryCode } from 'Shared/helpers/countries';
import { i18n } from 'Shared/i18n';
import { TRANSLATION_NAMESPACE } from 'Shared/i18n/constants';
import { SET_COUNTRY_CONFIGURATION } from 'Shared/store/actionTypes';
import { initialState } from 'Shared/store/initialState';
import { type StateConfig } from 'Shared/store/types';

export function appConfig(
  state: StateConfig = initialState.appConfig,
  action: Object
) {
  switch (action.type) {
    case SET_COUNTRY_CONFIGURATION:
      return {
        ...state,
        country: action.payload.country,
        language: getLanguageFromCountryCode(action.payload.country),
        translations: i18n.getResourceBundle(
          getLanguageFromCountryCode(action.payload.country),
          TRANSLATION_NAMESPACE
        ),
      };
    default:
      return state;
  }
}
