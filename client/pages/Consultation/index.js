import { ConsultationPageContainer } from './ConsultationPageContainer';
import { withQuestionData } from './fetchQuestionData';

const ConsultationPage = withQuestionData(ConsultationPageContainer);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
