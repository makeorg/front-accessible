/* @flow */

export type ErrorResponse = {
  response: {
    status: number,
    data: Object,
    headers: Object,
    config: Object,
  },
  message: string,
};
