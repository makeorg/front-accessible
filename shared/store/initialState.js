// @flow
import { type StateRoot } from './types';

export const initialState: StateRoot = {
  appConfig: {
    source: '',
    language: '',
    country: '',
    translations: {},
  },
  proposal: {
    hasProposed: false,
    error: undefined,
    data: undefined,
  },
  sequence: {
    isSequenceCollapsed: false,
    firstProposal: undefined,
    questionSlug: undefined,
    votedProposalIds: [],
  },
  questions: {},
  currentQuestion: undefined,
  notification: {
    contentType: undefined,
  },
  user: {
    authentification: {
      errors: [],
      isLoggedIn: false,
      user: undefined,
    },
    passwordRecovery: {
      newPassword: undefined,
      resetToken: undefined,
      userId: undefined,
      errorMessage: undefined,
      error: false,
      updated: false,
    },
  },
  modal: {
    isOpen: false,
    contentType: null,
    showExpirationSession: false,
  },
};

export const createInitialState = (): StateRoot =>
  JSON.parse(JSON.stringify(initialState));
