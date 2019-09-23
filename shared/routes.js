import { matchPath } from 'react-router';

export const ROUTE_COUNTRY_LANG = '/:country-:language';

export const ROUTE_CONSULTATION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/consultation`;
export const ROUTE_SEARCH = `${ROUTE_COUNTRY_LANG}/search`;
export const ROUTE_SEARCH_PROPOSALS = `${ROUTE_COUNTRY_LANG}/search/proposals`;
export const ROUTE_SEARCH_ORGANISATIONS = `${ROUTE_COUNTRY_LANG}/search/organisations`;
export const ROUTE_SEARCH_CONSULTATIONS = `${ROUTE_COUNTRY_LANG}/search/consultations`;
export const ROUTE_ACTION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/actions`;
export const ROUTE_SEQUENCE = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/selection`;
export const ROUTE_PROPOSAL = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/proposal/:proposalId/:proposalSlug`;
export const ROUTE_ACCOUNT_ACTIVATION = `${ROUTE_COUNTRY_LANG}/account-activation/:userId/:verificationToken`;
export const ROUTE_PASSWORD_RECOVERY = `${ROUTE_COUNTRY_LANG}/password-recovery/:userId/:resetToken`;
export const ROUTE_PROFILE = `${ROUTE_COUNTRY_LANG}/profile`;
export const ROUTE_PROFILE_EDIT = `${ROUTE_PROFILE}/edit`;
export const ROUTE_PROFILE_PROPOSALS = `${ROUTE_PROFILE}/proposals`;
export const ROUTE_PROFILE_FAVOURITES = `${ROUTE_PROFILE}/favourites`;
export const ROUTE_PROFILE_FOLLOWING = `${ROUTE_PROFILE}/following`;
export const ROUTE_ORGANISATION_PROFILE = `${ROUTE_PROFILE}/:organisationSlug`;
export const ROUTE_ORGANISATION_PROPOSALS = `${ROUTE_ORGANISATION_PROFILE}/proposals`;
export const ROUTE_ORGANISATION_VOTES = `${ROUTE_ORGANISATION_PROFILE}/votes`;
export const ROUTE_STATIC_LEGAL = `${ROUTE_COUNTRY_LANG}/mentions-legales`;
export const ROUTE_STATIC_GTU = `${ROUTE_COUNTRY_LANG}/conditions-dutilisation`;
export const ROUTE_STATIC_DATA = `${ROUTE_COUNTRY_LANG}/politique-donnees`;
export const ROUTE_STATIC_CONTACT = `${ROUTE_COUNTRY_LANG}/contact`;

const replaceCountryLanguage = (
  route: string,
  coountry: string,
  language: string
) => route.replace(':country', coountry).replace(':language', language);

const replaceOrganisationSlug = (route: string, value: string) =>
  route.replace(':organisationSlug', value);

export const matchRoute = (pathname: string, routePath: string): boolean =>
  !!matchPath(pathname, {
    path: routePath,
  });

export const formatCountryLanguage = (country: string, language: string) =>
  `${country}-${language}`;

export const getRouteOrganisationProposals = (
  country: string,
  language: string,
  organisationSlug: string
) =>
  replaceOrganisationSlug(
    replaceCountryLanguage(ROUTE_ORGANISATION_PROPOSALS, country, language),
    organisationSlug
  );
export const getRouteOrganisationVotes = (
  country: string,
  language: string,
  organisationSlug: string
) =>
  replaceOrganisationSlug(
    replaceCountryLanguage(ROUTE_ORGANISATION_VOTES, country, language),
    organisationSlug
  );
export const getRouteProfile = (country: string, language: string) =>
  replaceCountryLanguage(ROUTE_PROFILE, country, language);
export const getRouteProfileEdit = (country: string, language: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_EDIT, country, language);
export const getRouteProfileProposals = (country: string, language: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_PROPOSALS, country, language);
export const getRouteProfileFavourites = (country: string, language: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_FAVOURITES, country, language);
export const getRouteProfileFollowing = (country: string, language: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_FOLLOWING, country, language);

/**
 * Get the search main results route
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} query
 * @return {string}
 */
export const getRouteSearch = (
  country: string,
  language: string,
  query: string
) =>
  `${replaceCountryLanguage(ROUTE_SEARCH, country, language)}?query=${query}`;

/**
 * Get the search proposals results route
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} query
 * @return {string}
 */
export const getRouteSearchProposals = (
  country: string,
  language: string,
  query: string
) =>
  `${replaceCountryLanguage(
    ROUTE_SEARCH_PROPOSALS,
    country,
    language
  )}?query=${query}`;

/**
 * Get the search proposals results route
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} query
 * @return {string}
 */
export const getRouteSearchConsultations = (
  country: string,
  language: string,
  query: string
) =>
  `${replaceCountryLanguage(
    ROUTE_SEARCH_CONSULTATIONS,
    country,
    language
  )}?query=${query}`;

/**
 * Get the search organisations results route
 *
 * @param  {string} country
 * @param  {string} language
 * @param  {string} query
 * @return {string}
 */

export const getRouteSearchOrganisations = (
  country: string,
  language: string,
  query: string
) =>
  `${replaceCountryLanguage(
    ROUTE_SEARCH_ORGANISATIONS,
    country,
    language
  )}?query=${query}`;