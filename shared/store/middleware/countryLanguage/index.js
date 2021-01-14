// @flow

import { Dispatch, Action } from 'redux';
import { SET_COUNTRY_CONFIGURATION } from 'Shared/store/actionTypes';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';
import { getLanguageFromCountryCode } from 'Shared/helpers/countries';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';

export const countryLanguage = () => (next: Dispatch) => (action: Action) => {
  switch (action.type) {
    case SET_COUNTRY_CONFIGURATION: {
      const language = getLanguageFromCountryCode(action.payload.country || '');
      trackingParamsService.country = action.payload.country;
      i18n.changeLanguage(language);
      DateHelper.language = language;
      return next(action);
    }
    default:
      return next(action);
  }
};
