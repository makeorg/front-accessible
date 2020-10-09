// @flow
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';
import { countriesConfiguration } from 'Shared/constants/languages';
import { type CountryType } from 'Shared/types/countries';

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
