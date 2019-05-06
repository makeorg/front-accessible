import { matchPath } from 'react-router';

export const ROUTE_COUNTRY_LANG = '/:countryLanguage';

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

const replaceCountryLanguage = (route: string, value: string) =>
  route.replace(':countryLanguage', value);

const replaceQuestionSlug = (route: string, value: string) =>
  route.replace(':questionSlug', value);

const replaceUserId = (route: string, value: string) =>
  route.replace(':userId', value);

const replaceResetToken = (route: string, value: string) =>
  route.replace(':resetToken', value);

const replaceVerifyToken = (route: string, value: string) =>
  route.replace(':verificationToken', value);

const replaceProposalId = (route: string, value: string) =>
  route.replace(':proposalId', value);

const replaceProposalSlug = (route: string, value: string) =>
  route.replace(':proposalSlug', value);

const replaceOrganisationSlug = (route: string, value: string) =>
  route.replace(':organisationSlug', value);

export const matchRoute = (pathname: string, routePath: string): boolean =>
  !!matchPath(pathname, {
    path: routePath,
  });

export const formatCountryLanguage = (country: string, language: string) =>
  `${country}-${language}`;

export const getRouteConsultation = (
  countryLanguage: string,
  questionSlug: string
) =>
  replaceQuestionSlug(
    replaceCountryLanguage(ROUTE_CONSULTATION, countryLanguage),
    questionSlug
  );

export const getRouteSequence = (
  countryLanguage: string,
  questionSlug: string
) =>
  replaceQuestionSlug(
    replaceCountryLanguage(ROUTE_SEQUENCE, countryLanguage),
    questionSlug
  );

export const getRouteAccountActivation = (
  countryLanguage: string,
  userId: string,
  verifyToken: string
) =>
  replaceVerifyToken(
    replaceUserId(
      replaceCountryLanguage(ROUTE_ACCOUNT_ACTIVATION, countryLanguage),
      userId
    ),
    verifyToken
  );

export const getRoutePasswordRecovery = (
  countryLanguage: string,
  userId: string,
  resetToken: string
) =>
  replaceResetToken(
    replaceUserId(
      replaceCountryLanguage(ROUTE_PASSWORD_RECOVERY, countryLanguage),
      userId
    ),
    resetToken
  );

export const getRouteProposal = (
  countryLanguage: string,
  questionSlug: string,
  proposalId: string,
  proposalSlug: string
) =>
  replaceProposalSlug(
    replaceProposalId(
      replaceQuestionSlug(
        replaceCountryLanguage(ROUTE_PROPOSAL, countryLanguage),
        questionSlug
      ),
      proposalId
    ),
    proposalSlug
  );

export const getRouteOrganisationProfile = (
  countryLanguage: string,
  organisationSlug: string
) =>
  replaceOrganisationSlug(
    replaceCountryLanguage(ROUTE_ORGANISATION_PROFILE, countryLanguage),
    organisationSlug
  );
export const getRouteOrganisationProposals = (
  countryLanguage: string,
  organisationSlug: string
) =>
  replaceOrganisationSlug(
    replaceCountryLanguage(ROUTE_ORGANISATION_PROPOSALS, countryLanguage),
    organisationSlug
  );
export const getRouteOrganisationVotes = (
  countryLanguage: string,
  organisationSlug: string
) =>
  replaceOrganisationSlug(
    replaceCountryLanguage(ROUTE_ORGANISATION_VOTES, countryLanguage),
    organisationSlug
  );

export const getRouteProfile = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE, countryLanguage);
export const getRouteProfileEdit = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_EDIT, countryLanguage);
export const getRouteProfileProposals = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_PROPOSALS, countryLanguage);
export const getRouteProfileFavourites = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_FAVOURITES, countryLanguage);
export const getRouteProfileFollowing = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_FOLLOWING, countryLanguage);
