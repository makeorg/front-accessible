import HomePage from 'Pages/Home';
import SequencePage from 'Pages/Consultation/Sequence';
import { fetchQuestionConfigurationData } from 'Actions/sequence';

export default [
  {
    path: '/:country',
    component: HomePage,
    exact: true,
    dataFetch: null
  },
  {
    path: '/:country/consultation/:questionSlug/selection',
    component: SequencePage,
    dataFetch: params => fetchQuestionConfigurationData(params.questionSlug, params.country)
  }
];
