// @flow

type Profile = {
  dateOfBirth: string,
  avatarUrl: string,
  profession: string,
  phoneNumber: string,
  description: string,
  postalCode: string,
  optInNewsletter: boolean,
  socioProfessionalCategory: string,
  optInPartner: boolean,
  country: string,
  language: string,
  hasPassword: boolean,
};

export type User = {
  country: string,
  email: string,
  emailVerified: boolean,
  enabled: boolean,
  firstName: string,
  followedUsers: string[],
  hasPassword: boolean,
  isHardBounce: boolean,
  isOrganisation: boolean,
  language: string,
  lastConnection: string,
  lastMailingError?: string,
  lastName: string,
  organisationName?: string,
  profile: Profile,
  roles: string[],
  userId: string,
};

export type Passwords = {
  newPassword: string,
  actualPassword: string,
};

export type PasswordsErrors = {
  newPassword?: string,
  actualPassword?: string,
};

export type UserInformationForm = {
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
