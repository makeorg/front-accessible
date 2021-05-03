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
const languageStorage = {
  set: (language, country) =>
    sessionStorage.setItem(`${languageStorageKey}_${country}`, language),
  get: country => sessionStorage.getItem(`${languageStorageKey}_${country}`),
  hasValue: country =>
    !!sessionStorage.getItem(`${languageStorageKey}_${country}`),
  delete: country =>
    sessionStorage.removeItem(`${languageStorageKey}_${country}`),
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

  if (languageStorage.isAvailable() && languageStorage.hasValue(countryCode)) {
    return languageStorage.get(countryCode);
  }

  return getLanguageFromCountryCode(countryCode);
};

export const setCountry = country => {
  trackingParamsService.country = country;
};

export const setLanguage = (language, country, cloneI18nInstance = false) => {
  if (cloneI18nInstance) {
    i18n.cloneInstance();
  }
  i18n.changeLanguage(language || DEFAULT_LANGUAGE);
  DateHelper.language = language || DEFAULT_LANGUAGE;
  if (languageStorage.isAvailable()) {
    languageStorage.set(language || DEFAULT_LANGUAGE, country);
  }
};
