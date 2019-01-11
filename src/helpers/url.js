import 'url-search-params-polyfill';
import { CGU_LINK, POLICY_LINK } from 'Constants/url';

export const getParamsQuery = (searchParams: string) => {
  const params = new URLSearchParams(searchParams);

  return params.toString();
};

export const localizeLink = (link: string, country: string, language: string) => {
  if (!country || !language) {
    return null;
  }

  return `${link}/${country.toLowerCase()}-${language.toLowerCase()}`;
};

export const localizeCguLink = (country: string, language: string) => (
  localizeLink(CGU_LINK, country, language)
);

export const localizePolicyLink = (country: string, language: string) => (
  localizeLink(POLICY_LINK, country, language)
);
