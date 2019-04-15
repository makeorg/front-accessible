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

export const getRouteProfile = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE, countryLanguage);

export const getRouteProfileEdit = (countryLanguage: string) =>
  replaceCountryLanguage(ROUTE_PROFILE_EDIT, countryLanguage);
