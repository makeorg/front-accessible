export const initialStateDebug = {
  appConfig: {
    source: 'core',
    language: 'fr',
    country: 'FR',
    translations: require('../../server/staticData/i18n/fr.json'),
    countriesWithConsultations: [
      'AT',
      'BE',
      'BG',
      'CY',
      'CZ',
      'DE',
      'DK',
      'EE',
      'ES',
      'FI',
      'FR',
      'GB',
      'GR',
      'HR',
      'HU',
      'IE',
      'IT',
      'LT',
      'LV',
      'LU',
      'MT',
      'NL',
      'PL',
      'PT',
      'RO',
      'SE',
      'SI',
      'SK',
    ],
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
    cards: [],
  },
  currentQuestion: '',
  session: { sessionId: '' },
};
