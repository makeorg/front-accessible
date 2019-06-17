import { i18n } from 'Shared/i18n';
import { METRIC_PATH } from './metrics';

export const countryLanguageMiddleware = (req, res, next) => {
  if (req.url === METRIC_PATH) {
    return next();
  }

  const { country, language } = req.params;

  if (!country || !language) {
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
