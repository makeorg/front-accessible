import ApiService from 'Api/ApiService';

export const isCountryLanguage = (countryLanguage = null) => (
  countryLanguage !== null && (/^[a-z]{2,3}-[a-z]{2,3}$/.test(countryLanguage.toLowerCase()))
);

export const countryLanguageMiddelware = (req, res, next) => {
  const { countryLanguage } = req.params;

  if (!isCountryLanguage(countryLanguage)) {
    return res.redirect('/FR-fr');
  }

  const [country, language] = countryLanguage.split('-');
  req.params.language = language;
  req.params.country = country;

  ApiService.country = country;
  ApiService.language = language;

  return next();
};
