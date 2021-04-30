// @flow
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';
import { countriesConfiguration } from 'Shared/constants/languages';
import { type CountryType } from 'Shared/types/countries';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';
import { trackingParamsService } from 'Shared/services/TrackingParamsService';

export const compareCountriesByName = (a: CountryType, b: CountryType) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const getLanguageFromCountryCode = (countryCode: string) => {
  const countryConfiguration = countriesConfiguration.find(
    countryConf => countryConf.countryCode === countryCode
  );
  const language = countryConfiguration
    ? countryConfiguration.language
    : DEFAULT_LANGUAGE;

  return language;
};

const languageStorageKey = 'language';
export const languageStorage = {
  set: value => sessionStorage.setItem(languageStorageKey, value),
  get: () => sessionStorage.getItem(languageStorageKey),
  hasValue: () => !!sessionStorage.getItem(languageStorageKey),
  delete: () => sessionStorage.removeItem(languageStorageKey),
  isAvailable: () =>
    typeof window !== 'undefined' && window && !!sessionStorage,
};

export const getLanguageFromParams = (
  countryCode: string,
  queryLanguageParam: string
) => {
  if (queryLanguageParam) {
    return queryLanguageParam.toLowerCase();
  }

  if (languageStorage.isAvailable() && languageStorage.hasValue()) {
    return languageStorage.get();
  }

  return getLanguageFromCountryCode(countryCode);
};

export const setCountry = country => {
  trackingParamsService.country = country;
};

export const setLanguage = (language, cloneI18nInstance = false) => {
  if (cloneI18nInstance) {
    i18n.cloneInstance();
  }
  i18n.changeLanguage(language);
  DateHelper.language = language;
  if (languageStorage.isAvailable()) {
    languageStorage.set(language);
  }
};
