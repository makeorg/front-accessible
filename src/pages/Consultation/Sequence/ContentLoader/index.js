/* @flow */
import * as React from 'react';
import { InnerContent } from 'Components/Elements/MainElements';
import ProposalSubmitContainer from 'Containers/ProposalSubmit';
import SequenceContainer from 'Containers/Sequence';
import SpinnerComponent from 'Components/Spinner';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Object,
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: Object,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
};

/**
 * Renders SequenceContainerLoader
 */
const SequenceContentLoader = (props:Props) => {
  const {
    question,
    questionConfiguration,
    isSequenceCollapsed
  } = props;

  if (!question) {
    return (
      <SpinnerComponent />
    );
  }

  return (
    <InnerContent className={isSequenceCollapsed ? 'locked-content' : ''}>
      <ProposalSubmitContainer question={question} />
      <SequenceContainer
        question={question}
        questionConfiguration={questionConfiguration}
      />
    </InnerContent>

  );
};

export default SequenceContentLoader;
