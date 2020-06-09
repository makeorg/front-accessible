import { matchPath, generatePath } from 'react-router';

export const ROUTE_COUNTRY_LANG = '/:country(\\w{2})-:language(\\w{2})';
export const ROUTE_COUNTRY_LANG_FR = '/:country(\\w{2})-fr';
// @todo beta
export const ROUTE_BETA_HOME = `${ROUTE_COUNTRY_LANG}/beta/home`;

export const ROUTE_CONSULTATION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/consultation`;
export const ROUTE_SEARCH = `${ROUTE_COUNTRY_LANG}/search`;
export const ROUTE_SEARCH_PROPOSALS = `${ROUTE_COUNTRY_LANG}/search/proposals`;
export const ROUTE_SEARCH_ORGANISATIONS = `${ROUTE_COUNTRY_LANG}/search/organisations`;
export const ROUTE_SEARCH_CONSULTATIONS = `${ROUTE_COUNTRY_LANG}/search/consultations`;
export const ROUTE_ACTION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/actions`;
export const ROUTE_RESULTS = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/results`;
export const ROUTE_TOP_IDEAS = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/top-ideas`;
export const ROUTE_TOP_IDEA_DETAILS = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/top-ideas/:topIdeaId`;
export const ROUTE_SEQUENCE = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/selection`;
export const ROUTE_PROPOSAL = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/proposal/:proposalId/:proposalSlug`;
export const ROUTE_ACCOUNT_ACTIVATION = `${ROUTE_COUNTRY_LANG}/account-activation/:userId/:verificationToken`;
export const ROUTE_PASSWORD_RECOVERY = `${ROUTE_COUNTRY_LANG}/password-recovery/:userId/:resetToken`;
export const ROUTE_PROFILE = `${ROUTE_COUNTRY_LANG}/profile`;
export const ROUTE_PROFILE_EDIT = `${ROUTE_PROFILE}/edit`;
export const ROUTE_PROFILE_PROPOSALS = `${ROUTE_PROFILE}/proposals`;
export const ROUTE_PROFILE_FAVOURITES = `${ROUTE_PROFILE}/favourites`;
export const ROUTE_PROFILE_FOLLOWING = `${ROUTE_PROFILE}/following`;
export const ROUTE_PROFILE_OPINIONS = `${ROUTE_PROFILE}/opinions`;
export const ROUTE_PERSONALITY_PROFILE = `${ROUTE_PROFILE}/personality/:userId`;
export const ROUTE_ORGANISATION_PROFILE = `${ROUTE_PROFILE}/organisation/:organisationSlug`;
export const ROUTE_ORGANISATION_PROPOSALS = `${ROUTE_ORGANISATION_PROFILE}/proposals`;
export const ROUTE_ORGANISATION_VOTES = `${ROUTE_ORGANISATION_PROFILE}/votes`;
export const ROUTE_STATIC_NOTFOUND = `${ROUTE_COUNTRY_LANG}/not-found`;
export const ROUTE_SOON = '/soon';
export const ROUTE_STATIC_NOCOOKIES = `${ROUTE_COUNTRY_LANG_FR}/no-cookies`;

export const ROUTE_STATIC_LEGAL = `${ROUTE_COUNTRY_LANG}/mentions-legales`;
export const ROUTE_STATIC_GTU = `${ROUTE_COUNTRY_LANG_FR}/conditions-dutilisation`;
export const ROUTE_STATIC_DATA = `${ROUTE_COUNTRY_LANG_FR}/politique-donnees`;
export const ROUTE_STATIC_CONTACT = `${ROUTE_COUNTRY_LANG_FR}/contact`;

// routes for en language
export const ROUTE_STATIC_LEGAL_EN = `${ROUTE_COUNTRY_LANG}/legal-mentions`;
export const ROUTE_STATIC_GTU_EN = `${ROUTE_COUNTRY_LANG}/terms-of-use`;
export const ROUTE_STATIC_DATA_EN = `${ROUTE_COUNTRY_LANG}/data-terms`;
export const ROUTE_STATIC_CONTACT_EN = `${ROUTE_COUNTRY_LANG}/contact`;

export const matchRoute = (
  pathname: string,
  routePath: string,
  exact: boolean = false,
  strict: boolean = false,
  sensitive: ?boolean = false
): boolean => {
  return !!matchPath(pathname, {
    path: routePath,
    exact,
    strict,
    sensitive,
  });
};

export const formatCountryLanguage = (country: string, language: string) =>
  `${country}-${language}`;

export const getRouteOrganisationProposals = (
  country: string,
  language: string,
  organisationSlug: string
) =>
  generatePath(ROUTE_ORGANISATION_PROPOSALS, {
    country,
    language,
    organisationSlug,
  });
export const getRouteOrganisationVotes = (
  country: string,
  language: string,
  organisationSlug: string
) =>
  generatePath(ROUTE_ORGANISATION_VOTES, {
    country,
    language,
    organisationSlug,
  });
export const getRouteProfile = (country: string, language: string) =>
  generatePath(ROUTE_PROFILE, { country, language });
export const getRouteProfileEdit = (country: string, language: string) =>
  generatePath(ROUTE_PROFILE_EDIT, { country, language });
export const getRouteProfileProposals = (country: string, language: string) =>
  generatePath(ROUTE_PROFILE_PROPOSALS, { country, language });
export const getRouteProfileFavourites = (country: string, language: string) =>
  generatePath(ROUTE_PROFILE_FAVOURITES, { country, language });
export const getRouteProfileFollowing = (country: string, language: string) =>
  generatePath(ROUTE_PROFILE_FOLLOWING, { country, language });
export const getRouteProfileOpinions = (country: string, language: string) =>
  generatePath(ROUTE_PROFILE_OPINIONS, { country, language });
export const getRouteNoCookies = (country: string, language: string) =>
  generatePath(ROUTE_STATIC_NOCOOKIES, { country, language });

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
) => `${generatePath(ROUTE_SEARCH, { country, language })}?query=${query}`;

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
  `${generatePath(ROUTE_SEARCH_PROPOSALS, {
    country,
    language,
  })}?query=${query}`;

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
  `${generatePath(ROUTE_SEARCH_CONSULTATIONS, {
    country,
    language,
  })}?query=${query}`;

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
  `${generatePath(ROUTE_SEARCH_ORGANISATIONS, {
    country,
    language,
  })}?query=${query}`;
