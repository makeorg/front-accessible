// @flow
import { type Request, type Response, type NextFunction } from 'express';
import { i18n } from 'Shared/i18n';
import { DEFAULT_COUNTRY, DEFAULT_LANGUAGE } from 'Shared/constants/config';
import { countriesConfiguration } from 'Shared/constants/languages';

export const getCountryFromRequest = (req: Request) => {
  const xDetectedCountry = req.headers['x-detected-country'];
  const xForcedCountry = req.headers['x-forced-country'];
  const { country } = req.params;

  if (country) {
    return country;
  }
  if (xForcedCountry) {
    return xForcedCountry;
  }
  if (xDetectedCountry) {
    return xDetectedCountry;
  }
  return DEFAULT_COUNTRY;
};

export const getLanguageFromCountry = (country: string) => {
  const countryConfiguration = countriesConfiguration.find(
    countryConf => countryConf.country === country
  );
  const language = countryConfiguration
    ? countryConfiguration.language
    : DEFAULT_LANGUAGE;

  return language;
};

export const countryLanguageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get country from parmas || headers detection values
  const country = getCountryFromRequest(req);
  const formattedCountry = country.toUpperCase();

  // Get language associated to the country
  const language = getLanguageFromCountry(country);
  const formattedLanguage = language.toLowerCase();

  req.params.country = formattedCountry;
  req.params.language = formattedLanguage;
  i18n.cloneInstance();
  i18n.changeLanguage(formattedLanguage);
  return next();
};
