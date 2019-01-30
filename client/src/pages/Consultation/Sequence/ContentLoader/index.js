/* @flow */
import * as React from 'react';
import ProposalSubmitContainer from 'Src/containers/ProposalSubmit';
import SequenceContainer from 'Src/containers/Sequence';
import SpinnerComponent from 'Client/ui/Spinner';
import { SequencePageContent, SequencePageInnerContent } from '../Styled';

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
export const SequencePageContentLoader = (props: Props) => {
  const {
    question,
    questionConfiguration,
    isSequenceCollapsed
  } = props;

  if (!question) {
    return (
      <SequencePageContent>
        <SpinnerComponent />
      </SequencePageContent>
    );
  }

  return (
    <SequencePageInnerContent isSequenceCollapsed={isSequenceCollapsed}>
      <ProposalSubmitContainer question={question} />
      <SequenceContainer
        question={question}
        questionConfiguration={questionConfiguration}
      />
    </SequencePageInnerContent>

  );
};
