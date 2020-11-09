// @flow
import { type Request, type Response, type NextFunction } from 'express';
import { i18n } from 'Shared/i18n';
import { DEFAULT_COUNTRY } from 'Shared/constants/config';
import { getLanguageFromCountryCode } from 'Shared/helpers/countries';
import { DateHelper } from 'Shared/helpers/date';

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

export const countryLanguageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get country from parmas || headers detection values
  const country = getCountryFromRequest(req);
  const formattedCountry = country.toUpperCase();

  // Get language associated to the country
  const language = getLanguageFromCountryCode(country);
  const formattedLanguage = language.toLowerCase();

  req.params.country = formattedCountry;
  req.params.language = formattedLanguage;
  i18n.cloneInstance();
  i18n.changeLanguage(formattedLanguage);
  DateHelper.language = formattedLanguage;
  return next();
};
