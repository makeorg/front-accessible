export const initialStateDebug = {
  appConfig: {
    source: 'core',
    language: 'fr',
    country: 'FR',
    translations: require('../../server/staticData/i18n/fr-FR.json')
  },
  sequence: {
    /* question: {
      questionId: '8358bb5d-493c-4ae8-88be-3de613e2e527',
      operationId: '65dfe694-2ea9-486b-8bc5-3107316fa6ff'
    }, */
    votedProposalIds: []
  },
  user: {
    /*
    passwordRecovery: {
      validToken: true,
      resetToken: 'A888FA89B99A6A42DE1566940C4154B26CBEEF82',
      userId: 'f05665a2-b36b-42c3-89a9-344e8f41fe19'
    } */
  }
};
