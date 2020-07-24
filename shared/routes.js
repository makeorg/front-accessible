import { matchPath, generatePath } from 'react-router';

export const ROUTE_COUNTRY_LANG = '/:country(\\w{2})-:language(\\w{2})';
export const ROUTE_COUNTRY_LANG_FR = '/:country(\\w{2})-fr';
// @todo beta
export const ROUTE_BETA_HOME = `/beta${ROUTE_COUNTRY_LANG}/home`;

export const ROUTE_BROWSE_CONSULTATIONS = `${ROUTE_COUNTRY_LANG}/browse/consultations/page/:pageId`;
export const ROUTE_BROWSE_RESULTS = `${ROUTE_COUNTRY_LANG}/browse/results/page/:pageId`;
export const ROUTE_CONSULTATION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/consultation`;
export const ROUTE_CONSULTATION_STEP = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/:consultationStep`;
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
export const ROUTE_STATIC_GTU = `${ROUTE_COUNTRY_LANG}/conditions-dutilisation`;
export const ROUTE_STATIC_DATA = `${ROUTE_COUNTRY_LANG}/politique-donnees`;
export const ROUTE_STATIC_CONTACT = `${ROUTE_COUNTRY_LANG}/contact`;

// routes for en language
export const ROUTE_STATIC_LEGAL_EN = `${ROUTE_COUNTRY_LANG}/legal-mentions`;
export const ROUTE_STATIC_GTU_EN = `${ROUTE_COUNTRY_LANG}/terms-of-use`;
export const ROUTE_STATIC_DATA_EN = `${ROUTE_COUNTRY_LANG}/data-terms`;
export const ROUTE_STATIC_CONTACT_EN = `${ROUTE_COUNTRY_LANG}/contact`;

// preview
export const BASE_PREVIEW_PATH: string = '/preview';
const BASE_PREVIEW_PATH_REG = /^\/preview/;

export const matchRoute = (
  pathname: string,
  routePath: string,
  exact: boolean = false,
  strict: boolean = false,
  sensitive: ?boolean = false,
  matchPreview: ?boolean = false
): boolean => {
  const pathToCheck: string = matchPreview
    ? pathname.replace(BASE_PREVIEW_PATH_REG, '')
    : pathname;

  return !!matchPath(pathToCheck, {
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

/**
 * Get a path with pagination params
 *
 * @param  {string} path
 * @param  {string} country
 * @param  {string} language
 * @param  {string} query
 * @return {string}
 */
export const getPaginatedRoute = (
  path: string,
  country: string,
  language: string,
  pageId: number
) => generatePath(path, { country, language, pageId });

export const isConsultationPage = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_CONSULTATION,
    false,
    false,
    false,
    includingPreview
  );
export const isActionsPage = (
  pathname: string,
  includingPreview: ?boolean = true
) => matchRoute(pathname, ROUTE_ACTION, false, false, false, includingPreview);
export const isResultsPage = (
  pathname: string,
  includingPreview: ?boolean = true
) => matchRoute(pathname, ROUTE_RESULTS, false, false, false, includingPreview);
export const isTopIdeasPage = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(pathname, ROUTE_TOP_IDEAS, false, false, false, includingPreview);
export const isTopIdeaDetailsPage = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_TOP_IDEA_DETAILS,
    false,
    false,
    false,
    includingPreview
  );
export const isOrganisationProposals = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_ORGANISATION_PROPOSALS,
    false,
    false,
    false,
    includingPreview
  );
export const isOrganisationVotes = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_ORGANISATION_VOTES,
    false,
    false,
    false,
    includingPreview
  );
export const isProfileProposals = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_PROFILE_PROPOSALS,
    false,
    false,
    false,
    includingPreview
  );
export const isProfileFavourites = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_PROFILE_FAVOURITES,
    false,
    false,
    false,
    includingPreview
  );
export const isBrowseConsultationsPage = (
  pathname: string,
  includingPreview: ?boolean = true
) =>
  matchRoute(
    pathname,
    ROUTE_BROWSE_CONSULTATIONS,
    false,
    false,
    false,
    includingPreview
  );
