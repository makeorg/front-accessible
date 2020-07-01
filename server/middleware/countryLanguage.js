import { i18n } from 'Shared/i18n';

export const configureCountryLanguage = (req, country, language) => {
  req.params.country = country;
  req.params.language = language;
  i18n.cloneInstance();
  i18n.changeLanguage(`${language}-${country}`);
};

export const redirectToCountry = (req, res) => {
  const xDetectedCountry = req.headers['x-detected-country'];
  const xForcedCountry = req.headers['x-forced-country'];

  if (
    (xForcedCountry && xForcedCountry !== 'FR') ||
    (xDetectedCountry && xDetectedCountry !== 'FR')
  ) {
    return res.redirect('/soon');
  }

  return res.redirect('/FR-fr');
};

export const countryLanguageMiddleware = (req, res, next) => {
  const { country, language } = req.params;

  if (!country || !language) {
    return next();
  }

  configureCountryLanguage(req, country.toUpperCase(), language.toLowerCase());

  return next();
};
