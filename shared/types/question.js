// @flow

export type Metas = {
  title: string,
  description: string,
  picture: string,
};

export type QuestionWording = {
  question: string,
  title: string,
  metas: Metas,
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
