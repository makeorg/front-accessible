import HomePage from 'Pages/Home';
import SequencePage from 'Pages/Consultation/Sequence';

export default [
  {
    path: '/:country',
    component: HomePage,
    exact: true,
    dataFetch: null
  },
  {
    path: '/:countryLanguage/consultation/:questionSlug/selection',
    component: SequencePage
  }
];
