// @flow
import { type QuestionType } from './question';
import { type OrganisationSoftType } from './organisation';
import { type VoteType } from './vote';

export type AuthorType = {
  firstName: string | null,
  displayName: string | null,
  organisationName: string | null,
  organisationSlug: string | null,
  postalCode: string | null,
  age: number | null,
  avatarUrl: string | null,
  userType: string,
};

export type ContextType = {
  operation: string,
  source: string,
  location: string,
  question: string,
  country: string,
  language: string,
  getParameters: Array<string>,
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
