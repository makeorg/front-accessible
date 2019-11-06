// @flow

import 'url-search-params-polyfill';
import { FRONT_URL } from 'Shared/constants/config';
import {
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_SEQUENCE,
  ROUTE_PROPOSAL,
  ROUTE_ORGANISATION_PROFILE,
  ROUTE_STATIC_CONTACT,
  ROUTE_STATIC_DATA,
  ROUTE_STATIC_GTU,
  ROUTE_STATIC_LEGAL,
  ROUTE_RESULTS,
} from 'Shared/routes';

const queryString = require('query-string');

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
  return ROUTE_SEQUENCE.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug)
    .concat(
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
  return ROUTE_CONSULTATION.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug);
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
  return ROUTE_ACTION.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug);
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
  return ROUTE_RESULTS.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug);
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
  return ROUTE_PROPOSAL.replace(':country', country)
    .replace(':language', language)
    .replace(':questionSlug', questionSlug)
    .replace(':proposalId', proposalId)
    .replace(':proposalSlug', proposalSlug);
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
  return ROUTE_ORGANISATION_PROFILE.replace(':country', country)
    .replace(':language', language)
    .replace(':organisationSlug', organisationSlug);
};

/**
 * Get the contact page link
 *
 * @param  {string} country
 * @param  {string} language
 * @return {string}
 */
export const getContactPageLink = (country: string, language: string) => {
  return ROUTE_STATIC_CONTACT.replace(':country', country).replace(
    ':language',
    language
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
  return ROUTE_STATIC_DATA.replace(':country', country).replace(
    ':language',
    language
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
  return ROUTE_STATIC_GTU.replace(':country', country).replace(
    ':language',
    language
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
  return ROUTE_STATIC_LEGAL.replace(':country', country).replace(
    ':language',
    language
  );
};
