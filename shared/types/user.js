import { type ProposalType } from 'Shared/types/proposal';

// @flow
export type ProfileType = {
  dateOfBirth: string,
  avatarUrl: string,
  profession: string,
  phoneNumber: string,
  description: string,
  twitterId: string,
  facebookId: string,
  googleId: string,
  gender: string,
  genderName: string,
  postalCode: string,
  karmaLevel: number,
  locale: string,
  optInNewsletter: boolean,
  socioProfessionalCategory: string,
  registerQuestionId: string,
  optInPartner: boolean,
  website: string,
  politicalParty: string,
};

export type PersonalityType = {
  userId: string,
  firstName: string,
  lastName: string,
  politicalParty: string,
  avatarUrl: string,
  gender: string,
};

export type UserType = {
  userId: string,
  email: string,
  firstName: string,
  lastName: string,
  organisationName: string,
  enabled: boolean,
  emailVerified: boolean,
  isOrganisation: boolean,
  lastConnection: string,
  roles: Array<string>,
  profile: TypeProfile,
  country: string,
  language: string,
  isHardBounce: boolean,
  lastMailingError: {
    error: string,
    date: string,
  },
  hasPassword: boolean,
  followedUsers: Array<string>,
  userType: string,
};

export type PasswordsType = {
  newPassword: string,
  actualPassword: string,
};

export type UserInformationFormType = {
  firstName: string,
  lastName: string,
  organisationName: string,
  age: string,
  profession: string,
  postalCode: string,
  description: string,
  optInNewsletter: boolean,
  website: string,
};

export type SearchProposalsType = {
  total: number,
  seed?: number,
  results: ProposalType[],
};

export type UserAuthType = {
  token_type: string,
  access_token: string,
  expires_in: number,
  refresh_token: string,
  account_creation: boolean,
};
