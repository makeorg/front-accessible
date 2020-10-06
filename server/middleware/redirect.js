// aflow
import { type Request, type Response } from 'express';
import { ROUTE_COUNTRY_FR } from 'Shared/routes';

export const redirectToCountry = (req: Request, res: Response) => {
  const xDetectedCountry = req.headers['x-detected-country'];
  const xForcedCountry = req.headers['x-forced-country'];

  // Remove when intternational homepage is ready
  if (
    (xForcedCountry && xForcedCountry !== 'FR') ||
    (xDetectedCountry && xDetectedCountry !== 'FR')
  ) {
    return res.redirect('/soon');
  }

  if (xForcedCountry) {
    return res.redirect(`/${xForcedCountry}`);
  }
  if (xDetectedCountry) {
    return res.redirect(`/${xDetectedCountry}`);
  }
  return res.redirect(ROUTE_COUNTRY_FR);
};

export const redirectCountryLanguageUrl = (req: Request, res: Response) => {
  const { language } = req.params;
  const oldUrl = req.path;
  const newUrl = oldUrl.replace(`-${language}`, '');

  return res.redirect(301, newUrl);
};
