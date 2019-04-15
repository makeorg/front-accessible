// @flow

export type Question = {
  questionId: string,
  operationId: string,
  slug: string,
  question: string,
  country: string,
  language: string,
  allowedSources: Array<string>,
  startDate: string,
  endDate: string,
  landingSequenceId: string,
  operationTitle: string,
  canPropose: boolean,
};
