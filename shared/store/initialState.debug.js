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
  currentQuestion: undefined,
  questions: {
    /* '8358bb5d-493c-4ae8-88be-3de613e2e527': {
      questionId: '8358bb5d-493c-4ae8-88be-3de613e2e527',
      operationId: '65dfe694-2ea9-486b-8bc5-3107316fa6ff'
    } */
  },
};
