import 'url-search-params-polyfill';
import { FRONT_URL } from 'Src/constants/config';
import * as URL from 'Src/constants/url';
import ApiService from 'Src/api/ApiService';

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

export const localizeCguLink = () => (
  localizeLink(URL.CGU_LINK, ApiService.country, ApiService.language)
);

export const localizeDataPolicyLink = () => (
  localizeLink(URL.DATA_POLICY_LINK, ApiService.country, ApiService.language)
);

export const localizeModerationCharterLink = () => (
  localizeLink(URL.MODERATION_CHARTER_LINK, ApiService.country, ApiService.language)
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

/**
 * Get the sequence link
 * @param  {string} questionSlug
 * @return {string}
 */

export const getSequenceLink = (
  questionSlug: string
) => `${FRONT_URL}/${ApiService.country}-${ApiService.language}/consultation/${questionSlug}/selection`;
