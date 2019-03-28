/* @flow */
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';

// Proposal State
export type StateProposal = $ReadOnly<{
  hasProposed: boolean,
}>;

// Sequence State
export type StateSequence = $ReadOnly<{
  isSequenceCollapsed: boolean,
  firstProposal?: string,
  questionId?: string,
  votedProposalIds: string[],
}>;

// Notification State
export type StateNotification = $ReadOnly<{
  contentType?: string,
}>;

// Authentification State
export type StateAuthentification = $ReadOnly<{
  isLoggedIn: boolean,
  errors: [],
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
  registration: StateRegistration,
  forgotPassword: StateForgotPassword,
  passwordRecovery: StateUserPasswordRecovery,
}>;

export type StateQuestions = $ReadOnly<{
  [string]: {
    question: Question,
    questionConfiguration: QuestionConfiguration,
  },
}>;

export type StateModal = $ReadOnly<{
  isOpen: boolean,
}>;

// All state
export type StateRoot = $ReadOnly<{
  proposal: StateProposal,
  sequence: StateSequence,
  notification: StateNotification,
  user: StateUser,
  questions: StateQuestions,
  modal: StateModal,
}>;
