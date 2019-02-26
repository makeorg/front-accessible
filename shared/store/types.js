// @flow
import type { QuestionConfiguration } from 'Shared/types/sequence';
import type { Question } from 'Shared/types/question';

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
type StateSequence = $ReadOnly<{
  isSequenceCollapsed: boolean,
  firstProposal?: string,
  question?: Question,
  questionConfiguration?: QuestionConfiguration,
  votedProposalIds?: Array<string>,
}>;

// Consultation State
type StateConsultation = $ReadOnly<{
  question?: Question,
  questionConfiguration?: QuestionConfiguration,
}>;

// Notification State
type StateNotification = $ReadOnly<{
  contentType?: string,
}>;

// User Password Recovery State
type StateUserPasswordRecovery = $ReadOnly<{
  newPassword?: string,
  resetToken?: string,
  userId?: string,
  errorMessage?: string,
  error: boolean,
  updated: boolean,
}>;

// User State
type StateUser = $ReadOnly<{
  passwordRecovery: StateUserPasswordRecovery,
}>;

// All state
export type StateRoot = $ReadOnly<{
  authentification: StateAuthentification,
  proposal: StateProposal,
  sequence: StateSequence,
  consultation: StateConsultation,
  notification: StateNotification,
  user: StateUser,
}>;
