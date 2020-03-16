import { i18n } from 'Shared/i18n';
import { METRIC_PATH } from './metrics';

export const countryLanguageMiddleware = (req, res, next) => {
  if (req.url === METRIC_PATH) {
    return next();
  }

  const xDetectedCountry = req.headers['x-detected-country'];
  const xForcedCountry = req.headers['x-forced-country'];

  const { country, language } = req.params;

  if (!country || !language) {
    if (
      (xForcedCountry && xForcedCountry !== 'FR') ||
      (xDetectedCountry && xDetectedCountry !== 'FR')
    ) {
      return res.redirect('/soon');
    }

    return res.redirect('/FR-fr');
  }

  const languageLowerCsed = language.toLowerCase();
  const countryUpperCased = country.toUpperCase();

  req.params.country = countryUpperCased;
  req.params.language = languageLowerCsed;
  i18n.cloneInstance();
  i18n.changeLanguage(`${languageLowerCsed}-${countryUpperCased}`);

  return next();
};
