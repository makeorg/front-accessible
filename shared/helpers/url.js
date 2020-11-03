// @flow
import 'url-search-params-polyfill';
import { generatePath } from 'react-router';
import queryString from 'query-string';
import { FRONT_URL, DEFAULT_COUNTRY } from 'Shared/constants/config';
import { ABOUT_MAKE_LINK } from 'Shared/constants/url';
import {
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_PROPOSAL,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_PERSONALITY_PROFILE,
  ROUTE_STATIC_CONTACT,
  ROUTE_STATIC_DATA,
  ROUTE_STATIC_GTU,
  ROUTE_STATIC_LEGAL,
  ROUTE_RESULTS,
  ROUTE_TOP_IDEAS,
  ROUTE_TOP_IDEA_DETAILS,
  ROUTE_STATIC_NOTFOUND,
  ROUTE_STATIC_GTU_EN,
  ROUTE_STATIC_LEGAL_EN,
  ROUTE_STATIC_DATA_EN,
  ROUTE_STATIC_CONTACT_EN,
  ROUTE_BROWSE_CONSULTATIONS,
  ROUTE_BROWSE_RESULTS,
  BASE_PREVIEW_PATH,
  ROUTE_CONSULTATION_STEP,
  ROUTE_COUNTRY,
} from 'Shared/routes';

export const getParamsQuery = (searchParams: string) => {
  const params = new URLSearchParams(searchParams);

  return params.toString();
};

export const getRelativeCurrentUrl = (pathName: string) =>
  `${FRONT_URL}${pathName}`;

export const getPartnerAnchor = (aboutUrl: string) => `${aboutUrl}#partenaires`;

export const buildInternalConsultationLink = (
  target: ?string,
  questionSlug: ?string,
  country: string,
  language: string
) => {
  if (!questionSlug || !target) {
    return null;
  }

  return `/${country}-${language}/consultation/${questionSlug}/${target}`;
};

/** @todo move all this stuff to Shared/routes file or create a route helper */
/**
 * Get the sequence link
 * @param  {string} country
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getSequenceLink = (
  country: string,
  questionSlug: string,
  params?: Object = {}
) => {
  return generatePath(ROUTE_SEQUENCE, {
    country,
    questionSlug,
  }).concat(
    params && Object.keys(params).length > 0
      ? `?${queryString.stringify(params)}`
      : ''
  );
};

/**
 * Get the browse consultations link
 *
 * @param  {string} country
 * @param  {number} pageId
 *
 * @return {string}
 */
export const getBrowseConsultationsLink = (
  country: string,
  pageId?: number = 1
) => {
  return generatePath(ROUTE_BROWSE_CONSULTATIONS, {
    country: country || DEFAULT_COUNTRY,
    pageId,
  });
};

/**
 * Get the browse results link
 *
 * @param  {string} country
 * @param  {number} pageId
 *
 * @return {string}
 */
export const getBrowseResultsLink = (country: string, pageId?: number = 1) => {
  return generatePath(ROUTE_BROWSE_RESULTS, {
    country: country || DEFAULT_COUNTRY,
    pageId,
  });
};

/**
 * Get the consultation link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getConsultationLink = (country: string, questionSlug: string) => {
  return generatePath(ROUTE_CONSULTATION, {
    country,
    questionSlug,
  });
};

/**
 * Get the action link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getActionLink = (country: string, questionSlug: string) => {
  return generatePath(ROUTE_ACTION, {
    country,
    questionSlug,
  });
};

/**
 * Get the results link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getResultsLink = (country: string, questionSlug: string) => {
  return generatePath(ROUTE_RESULTS, {
    country,
    questionSlug,
  });
};

/**
 * Get the top ideas by questions link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getTopIdeasLink = (country: string, questionSlug: string) => {
  return generatePath(ROUTE_TOP_IDEAS, {
    country,
    questionSlug,
  });
};

/**
 * Get the top idea details link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getTopIdeaDetailsLink = (
  country: string,
  questionSlug: string,
  topIdeaId: string
) => {
  return generatePath(ROUTE_TOP_IDEA_DETAILS, {
    country,
    questionSlug,
    topIdeaId,
  });
};

/**
 * Get the consultation link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 * @param  {string} consultationStep
 *
 * @return {string}
 */
export const getDynamicConsultationLink = (
  country: string,
  questionSlug: string,
  consultationStep: string
) => {
  return generatePath(ROUTE_CONSULTATION_STEP, {
    country,
    questionSlug,
    consultationStep,
  });
};

/**
 * Get the proposal link
 *
 * @param  {string} country
 * @param  {string} questionSlug
 * @param  {string} proposalId
 * @param  {string} proposalSlug
 *
 * @return {string}
 */
export const getProposalLink = (
  country: string,
  questionSlug: string,
  proposalId: string,
  proposalSlug: string
) => {
  return generatePath(ROUTE_PROPOSAL, {
    country,
    questionSlug,
    proposalId,
    proposalSlug,
  });
};

/**
 * Get the organisation profile link
 *
 * @param  {string} country
 * @param  {string} organisationSlug
 * @return {string}
 */
export const getOrganisationProfileLink = (
  country: string,
  organisationSlug: string
) => {
  return generatePath(ROUTE_ORGANISATION_PROFILE, {
    country,
    organisationSlug,
  });
};

/**
 * Get the personality profile link
 *
 * @param  {string} country
 * @param  {string} userId
 * @return {string}
 */
export const getPersonalityProfileLink = (country: string, userId: string) => {
  return generatePath(ROUTE_PERSONALITY_PROFILE, {
    country,
    userId,
  });
};

/**
 * Get the contact page link
 *
 * @param  {string} country
 * @return {string}
 */
export const getContactPageLink = (country: string) => {
  return generatePath(
    country === 'FR' || !country
      ? ROUTE_STATIC_CONTACT
      : ROUTE_STATIC_CONTACT_EN,
    {
      country: country || DEFAULT_COUNTRY,
    }
  );
};

/**
 * Get the data page link
 *
 * @param  {string} country
 * @return {string}
 */
export const getDataPageLink = (country: string) => {
  return generatePath(
    country === 'FR' || !country ? ROUTE_STATIC_DATA : ROUTE_STATIC_DATA_EN,
    {
      country: country || DEFAULT_COUNTRY,
    }
  );
};

/**
 * Get the GTU page link
 *
 * @param  {string} country
 * @return {string}
 */
export const getGTUPageLink = (country: string) => {
  return generatePath(
    country === 'FR' || !country ? ROUTE_STATIC_GTU : ROUTE_STATIC_GTU_EN,
    {
      country: country || DEFAULT_COUNTRY,
    }
  );
};

/**
 * Get the GTU page link
 *
 * @param  {string} country
 * @return {string}
 */
export const getLegalPageLink = (country: string) => {
  return generatePath(
    country === 'FR' || !country ? ROUTE_STATIC_LEGAL : ROUTE_STATIC_LEGAL_EN,
    {
      country: country || DEFAULT_COUNTRY,
    }
  );
};

/**
 * Get the home page link
 *
 * @param  {string} country
 * @return {string}
 */
export const getHomeLink = (country: string) => {
  return generatePath(ROUTE_COUNTRY, {
    country: country || DEFAULT_COUNTRY,
  });
};
/**
 * Get the Not found page link
 *
 * @param  {string} country
 * @return {string}
 */

export const redirectToNotFoundPage = (country: string) => {
  window.location = generatePath(ROUTE_STATIC_NOTFOUND, {
    country: country || DEFAULT_COUNTRY,
  });
};

export const isPreviewPath = (path: string): boolean =>
  path.includes(BASE_PREVIEW_PATH, 0);

/**
 * Get webflow dynamic page link
 *
 * @param  {string} language
 * @param  {string} route
 * @return {string}
 */

export const getWebflowDynamicLink = (language: string, route: string) => {
  return `${ABOUT_MAKE_LINK}${language}${route}`;
};
