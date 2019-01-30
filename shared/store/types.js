// @flow
import type { Question, QuestionConfiguration } from 'Shared/types/sequence';

// Proposal State
type StateProposal = {
  isTyping: boolean,
  canSubmit: boolean,
  hasProposed: boolean,
  isCurrentSubmitSuccess: boolean,
  content: string,
  questionId?: string,
  error?: string
}

// Sequence State
type StateSequence = {
  isSequenceCollapsed: boolean,
  firstProposal?: string,
  question?: Question,
  questionConfiguration?: QuestionConfiguration,
  votedProposalIds?: Array<string>
}

// Notification State
type StateNotification = {
  contentType?: string
}

// User Password Recovery State
type StateUserPasswordRecovery = {
  newPassword?: string,
  resetToken?: string,
  userId?: string,
  errorMessage?: string,
  error: boolean,
  updated: boolean
}

// User State
type StateUser = {
  passwordRecovery: StateUserPasswordRecovery
}

// All state
export type StateRoot = {
  proposal: StateProposal,
  sequence: StateSequence,
  notification: StateNotification,
  user: StateUser
}
