// @flow
export type ApiServiceHeaders = {
  'x-make-country'?: string,
  'x-make-language'?: string,
  'x-make-question-id'?: string,
  'x-make-custom-data'?: string,
};

export type TypeErrorObject = {
  field: string,
  key: string,
  message: any,
};
