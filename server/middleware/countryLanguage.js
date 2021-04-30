// @flow
import { type Request, type Response, type NextFunction } from 'express';
import { DEFAULT_COUNTRY } from 'Shared/constants/config';
import { setLanguage, getLanguageFromParams } from 'Shared/helpers/countries';

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
  const language = getLanguageFromParams(country, req.query.lang);
  const formattedLanguage = language.toLowerCase();

  req.params.country = formattedCountry;
  req.params.language = formattedLanguage;
  setLanguage(formattedLanguage, true);

  return next();
};
