// @flow
import { type StateRoot } from './types';

export const initialState: StateRoot = {
  appConfig: {
    source: '',
    language: '',
    country: '',
    translations: {},
    queryParams: {},
    countriesWithConsultations: [],
  },
  views: {},
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
    cards: [],
  },
  questions: {},
  currentQuestion: '',
  notifications: {
    banner: {},
    tip: {},
    dismissed: [],
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
    focusAfterClose: true,
  },
  partners: {},
  panel: {
    isExpanded: false,
    panelContent: undefined,
  },
  session: {
    sessionId: '',
  },
};

export const createInitialState = (): StateRoot => ({ ...initialState });
