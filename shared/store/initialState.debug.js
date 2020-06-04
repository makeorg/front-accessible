export const initialStateDebug = {
  appConfig: {
    source: 'core',
    language: 'fr',
    country: 'FR',
    translations: require('../../server/staticData/i18n/fr-FR.json'),
  },
  user: {
    authentication: {
      errors: [],
      isLoggedIn: false,
      user: undefined,
    },
  },
  proposal: {
    hasProposed: false,
  },
  sequence: {
    votedProposalIds: {},
  },
  currentQuestion: '',
};
