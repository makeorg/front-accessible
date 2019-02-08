import 'url-search-params-polyfill';
import * as URL from 'Shared/constants/url';
import { FRONT_URL } from 'Shared/constants/config';

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
  localizeLink(URL.CGU_LINK, country, language)
);

export const localizeDataPolicyLink = (country: string, language: string) => (
  localizeLink(URL.DATA_POLICY_LINK, country, language)
);

export const localizeModerationCharterLink = (country: string, language: string) => (
  localizeLink(URL.MODERATION_CHARTER_LINK, country, language)
);

export const currentUrl = (pathName: string) => `${FRONT_URL}${pathName}`;

export const twitterShareUrl = (pathName: string = '', message: string = '', hashtags: string = '') => (
  `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
    message
  )}&hashtags=${encodeURIComponent(
    hashtags
  )}&url=${encodeURIComponent(
    currentUrl(pathName)
  )}`
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

/**
 * Get the sequence link
 * @param  {string} questionSlug
 * @return {string}
 */

export const getSequenceLink = (questionSlug: string, country: string, language: string) => (
  `/${country}-${language}/consultation/${questionSlug}/selection`
);
