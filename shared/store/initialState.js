// @flow
import { type StateRoot } from './types';

export const initialState: StateRoot = {
  appConfig: {
    source: '',
    language: '',
    country: '',
    translations: {},
    queryParams: {},
  },
  proposal: {
    hasProposed: false,
    popularProposals: [],
    error: undefined,
    data: undefined,
  },
  sequence: {
    isSequenceCollapsed: false,
    firstProposal: undefined,
    questionSlug: undefined,
    currentIndex: 0,
    votedProposalIds: {},
    proposals: [],
  },
  questions: {},
  currentQuestion: '',
  notification: {
    contentType: undefined,
  },
  user: {
    authentication: {
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
    contentType: '',
    showExpirationSession: false,
  },
  partners: {},
};

export const createInitialState = (): StateRoot =>
  JSON.parse(JSON.stringify(initialState));
