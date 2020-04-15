// @flow
import { type ErrorObjectType } from 'Shared/types/api';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { type TagType } from 'Shared/types/tag';
import { type PersonalityType } from 'Shared/types/user';

// Config State
export type StateConfig = $ReadOnly<{
  source: string,
  language: string,
  country: string,
  translations: Object,
}>;

// Proposal State
export type StateProposal = $ReadOnly<{
  hasProposed: boolean,
}>;

// Sequence State
export type StateSequence = $ReadOnly<{
  isSequenceCollapsed: boolean,
  firstProposal?: string,
  currentIndex: number,
  votedProposalIds: { [string]: string[] },
  proposals: ProposalType[],
}>;

// Notification State
export type StateNotification = $ReadOnly<{
  contentType?: string,
}>;

// Authentification State
export type StateAuthentification = $ReadOnly<{
  isLoggedIn: boolean,
  errors: ErrorObjectType[],
  user?: {
    userId: string,
  },
}>;

// Registration State
export type StateRegistration = $ReadOnly<{
  errors: [],
}>;

// User Forgot Password State
export type StateForgotPassword = $ReadOnly<{
  isSuccess: boolean,
  errors: [],
}>;

// User Password Recovery State
export type StateUserPasswordRecovery = $ReadOnly<{
  newPassword?: string,
  resetToken?: string,
  userId?: string,
  errorMessage?: string,
  error: boolean,
  updated: boolean,
}>;

// User State
export type StateUser = $ReadOnly<{
  authentification: StateAuthentification,
  passwordRecovery: StateUserPasswordRecovery,
}>;

export type StateQuestions = $ReadOnly<{
  [string]: {
    question: QuestionType,
    questionResults: QuestionResultsType,
    popularTags: TagType[],
    popularProposals: ProposalType[],
    personalities: PersonalityType[],
  },
}>;

export type StateModal = $ReadOnly<{
  isOpen: boolean,
  showExpirationSession: boolean,
  contentType: string,
}>;

export type StateActor = $ReadOnly<{
  organisationId: string,
  organisationName: string,
  slug: string,
  avatarUrl: string,
  description: string,
  publicProfile: boolean,
  proposalsCount: number,
  votesCount: number,
  language: string,
  country: string,
  website: ?string,
  countsByQuestion: Object,
}>;

export type StateActors = $ReadOnly<{
  total: number,
  results: StateActor[],
}>;

export type StatePartners = $ReadOnly<{
  [string]: {
    actors: StateActors,
  },
}>;

// All state
export type StateRoot = {
  appConfig: StateConfig,
  proposal: StateProposal,
  sequence: StateSequence,
  currentQuestion: ?string,
  notification: StateNotification,
  user: StateUser,
  questions: StateQuestions,
  modal: StateModal,
  partners: StatePartners,
};
