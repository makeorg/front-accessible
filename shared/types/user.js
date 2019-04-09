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
  userId: string,
  email: string,
  firstName: string,
  lastName: string,
  organisationName: string,
  isOrganisation: boolean,
  profile: Profile,
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
