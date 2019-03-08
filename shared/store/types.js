/* @flow */
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';

// Authentification State
export type StateAuthentification = $ReadOnly<{
  isLoggedIn: boolean,
  errors: [],
  user?: {
    userId: string,
  },
}>;

// Proposal State
export type StateProposal = $ReadOnly<{
  isTyping: boolean,
  canSubmit: boolean,
  hasProposed: boolean,
  isCurrentSubmitSuccess: boolean,
  content: string,
  questionId?: string,
  error?: string,
}>;

// Sequence State
export type StateSequence = $ReadOnly<{
  isSequenceCollapsed: boolean,
  firstProposal?: string,
  questionId?: string,
  votedProposalIds?: Array<string>,
}>;

// Notification State
export type StateNotification = $ReadOnly<{
  contentType?: string,
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
  passwordRecovery: StateUserPasswordRecovery,
}>;

export type StateQuestions = $ReadOnly<{
  [string]: {
    question: Question,
    questionConfiguration: QuestionConfiguration,
  },
}>;

// All state
export type StateRoot = $ReadOnly<{
  authentification: StateAuthentification,
  proposal: StateProposal,
  sequence: StateSequence,
  notification: StateNotification,
  user: StateUser,
  questions: StateQuestions,
}>;
