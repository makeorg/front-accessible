import { SequencePageComponent } from './SequencePageComponent';
import { withQuestionData } from '../fetchQuestionData';

const SequencePage = withQuestionData(SequencePageComponent);

// default export needed for loadable component
export default SequencePage; // eslint-disable-line import/no-default-export
