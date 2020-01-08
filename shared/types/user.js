// @flow
export type TypeProfile = {
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

export type TypePersonality = {
  userId: string,
  firstName: string,
  lastName: string,
  politicalParty: string,
  avatarUrl: string,
  gender: string,
};

export type TypeUser = {
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

export type TypePasswords = {
  newPassword: string,
  actualPassword: string,
};

export type TypeUserInformationForm = {
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

export type UserInformationFormErrors = {
  firstName?: string,
  age?: string,
  profession?: string,
  postalCode?: string,
  description?: string,
};
