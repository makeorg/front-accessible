import ApiService from 'Shared/api/ApiService';
import i18next from '../i18n';
import { METRIC_PATH } from './metrics';

export const isCountryLanguage = (countryLanguage = null) => (
  countryLanguage !== null && (/^[a-z]{2,3}-[a-z]{2,3}$/.test(countryLanguage.toLowerCase()))
);

export const countryLanguageMiddleware = (req, res, next) => {
  if (req.url === METRIC_PATH) {
    return next();
  }

  const { countryLanguage } = req.params;

  if (!isCountryLanguage(countryLanguage)) {
    return res.redirect('/FR-fr');
  }

  const [countryRaw, languageRaw] = countryLanguage.split('-');
  const language = languageRaw.toLowerCase();
  const country = countryRaw.toUpperCase();

  req.params.country = country;
  req.params.language = language;

  const tradLanguage = `${language}-${country}`;
  i18next.changeLanguage(tradLanguage);

  ApiService.country = country;
  ApiService.language = language;

  return next();
};
