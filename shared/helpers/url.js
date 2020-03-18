// @flow
import 'url-search-params-polyfill';
import { generatePath } from 'react-router';
import queryString from 'query-string';
import { FRONT_URL } from 'Shared/constants/config';
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
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getSequenceLink = (
  country: string,
  language: string,
  questionSlug: string,
  params?: Object = {}
) => {
  return generatePath(ROUTE_SEQUENCE, {
    country,
    language,
    questionSlug,
  }).concat(
    params && Object.keys(params).length > 0
      ? `?${queryString.stringify(params)}`
      : ''
  );
};

/**
 * Get the consultation link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getConsultationLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return generatePath(ROUTE_CONSULTATION, { country, language, questionSlug });
};

/**
 * Get the action link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getActionLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return generatePath(ROUTE_ACTION, { country, language, questionSlug });
};

/**
 * Get the results link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getResultsLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return generatePath(ROUTE_RESULTS, { country, language, questionSlug });
};

/**
 * Get the top ideas by questions link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getTopIdeasLink = (
  country: string,
  language: string,
  questionSlug: string
) => {
  return generatePath(ROUTE_TOP_IDEAS, { country, language, questionSlug });
};

/**
 * Get the top idea details link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 *
 * @return {string}
 */
export const getTopIdeaDetailsLink = (
  country: string,
  language: string,
  questionSlug: string,
  topIdeaId: string
) => {
  return generatePath(ROUTE_TOP_IDEA_DETAILS, {
    country,
    language,
    questionSlug,
    topIdeaId,
  });
};

/**
 * Get the proposal link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} questionSlug
 * @param  {string} proposalId
 * @param  {string} proposalSlug
 *
 * @return {string}
 */
export const getProposalLink = (
  country: string,
  language: string,
  questionSlug: string,
  proposalId: string,
  proposalSlug: string
) => {
  return generatePath(ROUTE_PROPOSAL, {
    country,
    language,
    questionSlug,
    proposalId,
    proposalSlug,
  });
};

/**
 * Get the organisation profile link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} organisationSlug
 * @return {string}
 */
export const getOrganisationProfileLink = (
  country: string,
  language: string,
  organisationSlug: string
) => {
  return generatePath(ROUTE_ORGANISATION_PROFILE, {
    country,
    language,
    organisationSlug,
  });
};

/**
 * Get the personality profile link
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} userId
 * @return {string}
 */
export const getPersonalityProfileLink = (
  country: string,
  language: string,
  userId: string
) => {
  return generatePath(ROUTE_PERSONALITY_PROFILE, {
    country,
    language,
    userId,
  });
};

/**
 * Get the contact page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */
export const getContactPageLink = (country: string, language: string) => {
  return generatePath(
    language === 'fr' || !language
      ? ROUTE_STATIC_CONTACT
      : ROUTE_STATIC_CONTACT_EN,
    { country, language }
  );
};

/**
 * Get the data page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */
export const getDataPageLink = (country: string, language: string) => {
  return generatePath(
    language === 'fr' || !language ? ROUTE_STATIC_DATA : ROUTE_STATIC_DATA_EN,
    { country, language }
  );
};

/**
 * Get the GTU page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */
export const getGTUPageLink = (country: string, language: string) => {
  return generatePath(
    language === 'fr' || !language ? ROUTE_STATIC_GTU : ROUTE_STATIC_GTU_EN,
    {
      country,
      language,
    }
  );
};

/**
 * Get the GTU page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */
export const getLegalPageLink = (country: string, language: string) => {
  return generatePath(
    language === 'fr' || !language ? ROUTE_STATIC_LEGAL : ROUTE_STATIC_LEGAL_EN,
    { country, language }
  );
};

/**
 * Get the Not found page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */
export const getNotFoundPageLink = (country: string, language: string) => {
  return generatePath(ROUTE_STATIC_NOTFOUND, { country, language });
};

/**
 * Get the Not found page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */

export const redirectToNotFoundPage = (country: string, language: string) => {
  window.location = generatePath(ROUTE_STATIC_NOTFOUND, { country, language });
};
