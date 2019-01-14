import HomePage from 'Pages/Home';
import SequencePage from 'Pages/Consultation/Sequence';

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
