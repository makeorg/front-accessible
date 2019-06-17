import { matchPath } from 'react-router';

export const ROUTE_COUNTRY_LANG = '/:country-:language';

export const ROUTE_CONSULTATION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/consultation`;
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
