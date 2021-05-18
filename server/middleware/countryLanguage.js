// @flow
import { type Request, type Response, type NextFunction } from 'express';
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';
import { setLanguage, getLanguageFromParams } from 'Shared/helpers/countries';

export const getCountryFromRequest = (req: Request) => {
  const { country } = req.params;

  if (country) {
    return country;
  }

  return null;
};

export const countryLanguageMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get country from parmas || headers detection values
  const country = getCountryFromRequest(req);
  const formattedCountry = country?.toUpperCase();

  // Get language associated to the country
  const language =
    getLanguageFromParams(country, req.query.lang) || DEFAULT_LANGUAGE;

  const formattedLanguage = language.toLowerCase();
  req.params.country = formattedCountry;
  req.params.language = formattedLanguage;
  setLanguage(formattedLanguage, country, true);

  return next();
};
