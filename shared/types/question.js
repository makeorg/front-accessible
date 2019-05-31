// @flow

export type QuestionWording = {
  question: string,
  title: string,
};
export type Question = {
  questionId: string,
  operationId: string,
  slug: string,
  wording: QuestionWording,
  country: string,
  language: string,
  allowedSources: string[],
  startDate: string,
  endDate: string,
  landingSequenceId: string,
  operationTitle: string,
  canPropose: boolean,
  aboutUrl: string,
};
