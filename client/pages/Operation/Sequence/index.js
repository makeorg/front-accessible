import { SequencePageContainer } from './SequencePageContainer';
import { withQuestionData } from '../fetchQuestionData';

const SequencePage = withQuestionData(SequencePageContainer);

// default export needed for loadable component
export default SequencePage; // eslint-disable-line import/no-default-export
