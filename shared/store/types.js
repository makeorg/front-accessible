// @flow
import { type TypeErrorObject } from 'Shared/types/api';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';

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
  votedProposalIds: string[],
}>;

// Notification State
export type StateNotification = $ReadOnly<{
  contentType?: string,
}>;

// Authentification State
export type StateAuthentification = $ReadOnly<{
  isLoggedIn: boolean,
  errors: TypeErrorObject[],
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
    question: TypeQuestion,
    questionResults: TypeQuestionResults,
  },
}>;

export type StateModal = $ReadOnly<{
  isOpen: boolean,
  showExpirationSession: boolean,
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
};
