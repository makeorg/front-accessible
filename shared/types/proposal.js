// @flow
import { type Question as TypeQuestion } from './question';
import { type Organisation as TypeOrganisation } from './organisation';

export type QualificationType = {
  count: number,
  hasQualified: boolean,
  qualificationKey: string,
};

export type Author = {
  firstName: string,
  organisationName: string,
  organisationSlug: string,
  postalCode: string,
  age: number,
  avatarUrl: string,
};

export type Context = {
  operation: string,
  source: string,
  location: string,
  question: string,
};

export type Vote = {
  voteKey: string,
  count: number,
  qualifications: QualificationType[],
  hasVoted: boolean,
};

export type VotesPercentObject = {
  agree: number,
  disagree: number,
  neutral: number,
};

export type Tag = {
  tagId: string,
  label: string,
};

export type Proposal = {
  id: string,
  userId: string,
  content: string,
  slug: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  votes: Vote[],
  context: Context,
  trending: string,
  labels: any[],
  author: Author,
  organisations: TypeOrganisation[],
  country: string,
  language: string,
  themeId: string,
  tags: Tag[],
  myProposal: boolean,
  idea: string,
  questionId: string,
  operationId: string,
  proposalKey: string,
  question: TypeQuestion,
};
