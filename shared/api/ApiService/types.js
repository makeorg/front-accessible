/* @flow */

export type ErrorResponse = {
  response: {
    status: number,
    data: Object,
  },
  message: string,
};
