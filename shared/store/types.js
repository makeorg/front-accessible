// @flow
import type { Question, QuestionConfiguration } from 'Shared/types/sequence';

// Proposal State
type StateProposal = $ReadOnly<{
  isTyping: boolean,
  canSubmit: boolean,
  hasProposed: boolean,
  isCurrentSubmitSuccess: boolean,
  content: string,
  questionId?: string,
  error?: string
}>

// Sequence State
type StateSequence = $ReadOnly<{
  isSequenceCollapsed: boolean,
  firstProposal?: string,
  question?: Question,
  questionConfiguration?: QuestionConfiguration,
  votedProposalIds?: Array<string>
}>

// Notification State
type StateNotification = $ReadOnly<{
  contentType?: string
}>

// User Password Recovery State
type StateUserPasswordRecovery = $ReadOnly<{
  newPassword?: string,
  resetToken?: string,
  userId?: string,
  errorMessage?: string,
  error: boolean,
  updated: boolean
}>

// User State
type StateUser = $ReadOnly<{
  passwordRecovery: StateUserPasswordRecovery
}>

// All state
export type StateRoot = $ReadOnly<{
  proposal: StateProposal,
  sequence: StateSequence,
  notification: StateNotification,
  user: StateUser
}>