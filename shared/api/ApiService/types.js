/* @flow */

export type TypeToken = {
  token_type: string,
  access_token: string,
};

export type ErrorResponse = {
  response: {
    status: number,
    data: Object,
  },
  message: string,
};
