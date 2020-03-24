// @flow
import { type QuestionType } from './question';
import { type OrganisationSoftType } from './organisation';
import { type VoteType } from './vote';

export type AuthorType = {
  firstName: string,
  organisationName: string,
  organisationSlug: string,
  postalCode: string,
  age: number,
  avatarUrl: string,
  userType: string,
};

export type ContextType = {
  operation: string,
  source: string,
  location: string,
  question: string,
};

export type TagType = {
  tagId: string,
  label: string,
  display: boolean,
};

export type ProposalType = {
  id: string,
  userId: string,
  content: string,
  slug: string,
  status: string,
  createdAt: string,
  updatedAt: string,
  votes: VoteType[],
  context: ContextType,
  trending: string,
  labels: any[],
  author: AuthorType,
  organisations: OrganisationSoftType[],
  country: string,
  language: string,
  themeId: string,
  tags: TagType[],
  selectedStakeTag: TagType,
  myProposal: boolean,
  idea: string,
  questionId: string,
  operationId: string,
  proposalKey: string,
  question: QuestionType,
};

export type ProposalsType = {
  total: number,
  seed?: number,
  results: ProposalType[],
};
