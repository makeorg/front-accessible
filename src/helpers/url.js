import 'url-search-params-polyfill';
import { FRONT_URL } from 'Constants/config';
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

const currentUrl = (pathName: string) => `${FRONT_URL}${pathName}`;

export const twitterShareUrl = (pathName: string = '', message: string = '') => (
  `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
    message
  )}&url=${encodeURIComponent(currentUrl(pathName))}`
);

export const facebookShareUrl = (pathName: string = '') => (
  `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl(pathName))}`
);

export const linkedinShareUrl = (pathName: string = '', message: string = '') => (
  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl(pathName)
  )}&title=${encodeURIComponent(message)}&summary=${encodeURIComponent(
    message
  )}&source=${encodeURIComponent(currentUrl(pathName))}`
);
