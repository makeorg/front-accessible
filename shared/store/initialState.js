/* @flow */
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
    questionId: undefined,
    votedProposalIds: [],
  },
  questions: {},
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
  },
};

export const createInitialState = () =>
  JSON.parse(JSON.stringify(initialState));
