import HomePage from 'Src/pages/Home';
import SequencePage from 'Src/pages/Consultation/Sequence';

export default [
  {
    path: '/:countryLanguage',
    component: HomePage,
    exact: true,
    dataFetch: null
  },
  {
    path: '/:countryLanguage/consultation/:questionSlug/selection',
    component: SequencePage
  },
  {
    path: '/:country/account-activation/:userId/:verificationToken',
    component: SequencePage,
    exact: true
  }
];
