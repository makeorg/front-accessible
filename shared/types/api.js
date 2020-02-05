// @flow
import { type Proposal as TypeProposal } from './proposal';
import { type Question as TypeQuestion } from './question';
import {
  type TopIdea as TypeTopIdea,
  type TopIdeaCommentsType,
} from './topIdea';
import {
  type Organisation as TypeOrganisation,
  type OrganisationVote as TypeOrganisationVote,
} from './organisation';

export type ApiServiceHeaders = {
  'x-make-country'?: string,
  'x-make-language'?: string,
  'x-make-question-id'?: string,
  'x-make-custom-data'?: string,
};

export type ApiSearchProposalsResponseType = {
  total: number,
  seed?: number,
  results: TypeProposal[],
};

export type ApiOrganisationVotesResponseType = {
  total: number,
  seed: number,
  results: TypeOrganisationVote[],
};

export type ApiSearchQuestionsResponseType = {
  total: number,
  results: TypeQuestion[],
};

export type ApiSearchOrganisationsResponseType = {
  total: number,
  results: TypeOrganisation[],
};

export type TypeErrorObject = {
  field: string,
  key: string,
  message: any,
};

export type ApiIdeaScoreType = {
  totalProposalsRatio: number,
  agreementRatio: number,
  likeItRatio: number,
};

export type ApiIdeaResponseType = {
  id: string,
  ideaId: string,
  questionId: string,
  name: string,
  label: string,
  scores: ApiIdeaScoreType,
  proposalsCount: number,
  avatars: string[],
  comments: TopIdeaCommentsType[],
  weight: number,
  commentsCount: number,
};

export type ApiIdeasResponseType = {
  questionTopIdeas: ApiIdeaResponseType[],
  seed: number,
};

export type ApiIdeaDetailsResponseType = {
  questionTopIdea: ApiIdeaResponseType,
  seed: number,
};

export type ApiPersonalityCommentsResponseType = {
  id: string,
  topIdeaId: string,
  personalityId: string,
  comment1: string,
  comment2: string,
  comment3: string,
  vote: string,
  qualification: string,
};

export type ApiPersonnalityOpinionResponseType = {
  question: TypeQuestion,
  topIdea: TypeTopIdea,
  comment: ApiPersonalityCommentsResponseType,
};
