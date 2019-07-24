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
  karmaLevel: 0,
  locale: string,
  optInNewsletter: boolean,
  socioProfessionalCategory: string,
  registerQuestionId: string,
  optInPartner: boolean,
};

export type TypeUser = {
  userId: string,
  email: string,
  firstName: string,
  lastName: string,
  organisationName: string,
  enabled: boolea,
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
};

export type Passwords = {
  newPassword: string,
  actualPassword: string,
};

export type PasswordsErrors = {
  newPassword?: string,
  actualPassword?: string,
};

export type TypeUserInformationForm = {
  firstName?: string,
  age?: number,
  profession?: string,
  postalCode?: number,
  description?: string,
  optInNewsletter?: boolean,
};

export type UserInformationFormErrors = {
  firstName?: string,
  age?: string,
  profession?: string,
  postalCode?: string,
  description?: string,
};
