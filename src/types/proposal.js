// @flow

export type Author = {
  age: number,
  avatarUrl: string,
  firstName: string,
  organisationName: string,
  organisationSlug: string,
  postalCode: number
}

type Context = {
  location: string,
  operation: string,
  question: string,
  source: string,
};

export type Proposal = {
  id: string,
  userId: string,
  content: string,
  slug: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  votes: any,
  context: Context,
  trending: string,
  labels: any,
  author: Author,
  organisations: any,
  country: string,
  language: string,
  themeId: string,
  tags: any,
  myProposal: boolean,
  idea: string,
  questionId: string,
  operationId: string,
};
