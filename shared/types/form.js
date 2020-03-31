// @flow

export type RegisterFormProfileDataType = {
  firstname: string,
  age: string,
  postalcode: string,
  profession: string,
};

export type RegisterFormDataType = {
  email: string,
  password: string,
  profile: RegisterFormProfileDataType,
};
