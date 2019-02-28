export const ROUTE_COUNTRY_LANG = '/:countryLanguage';
export const ROUTE_CONSULTATION = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/consultation`;
export const ROUTE_SEQUENCE = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/selection`;
export const ROUTE_ACCOUNT_ACTIVATION = `${ROUTE_COUNTRY_LANG}/account-activation/:userId/:verificationToken`;
export const ROUTE_PROPOSAL = `${ROUTE_COUNTRY_LANG}/consultation/:questionSlug/proposal/:proposalId/:proposalSlug`;
export const ROUTE_PASSWORD_RECOVERY = `${ROUTE_COUNTRY_LANG}/password-recovery/:userId/:resetToken`;
export const ROUTE_PROFILE = `${ROUTE_COUNTRY_LANG}/profile`;
export const ROUTE_PROFILE_EDIT = `${ROUTE_PROFILE}/edit`;
