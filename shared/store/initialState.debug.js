export const initialStateDebug = {
  appConfig: {
    source: 'core',
    language: 'fr',
    country: 'FR',
    translations: require('../../server/staticData/i18n/fr-FR.json'),
  },
  user: {
    authentification: {
      errors: [],
      isLoggedIn: false,
      user: undefined,
    },
  },
  proposal: {
    hasProposed: false,
  },
  sequence: {
    /* 
    questionSlug: 'mieuxmanger',
    */
    votedProposalIds: [],
  },
  currentQuestion: '',
};
