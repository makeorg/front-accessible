// @flow
import type { StateRoot } from './types';

export const initialState: StateRoot = {
  authentification: {
    errors: [],
    isLoggedIn: false,
    token: undefined,
    user: undefined,
  },
  proposal: {
    isTyping: false,
    canSubmit: false,
    hasProposed: false,
    isCurrentSubmitSuccess: false,
    content: '',
    questionId: undefined,
    error: undefined,
    data: undefined,
  },
  sequence: {
    isSequenceCollapsed: false,
    firstProposal: undefined,
    question: undefined,
    questionConfiguration: undefined,
    votedProposalIds: [],
  },
  consultation: {
    question: undefined,
    questionConfiguration: undefined,
  },
  notification: {
    contentType: undefined,
  },
  user: {
    passwordRecovery: {
      newPassword: undefined,
      resetToken: undefined,
      userId: undefined,
      errorMessage: undefined,
      error: false,
      updated: false,
    },
  },
};

export const createInitialState = () =>
  JSON.parse(JSON.stringify(initialState));
