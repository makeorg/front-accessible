/* @flow */
import { type StateRoot } from './types';

export const initialState: StateRoot = {
  authentification: {
    errors: [],
    isLoggedIn: false,
    user: undefined,
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
