/* @flow */
import * as React from 'react';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { Sequence } from 'Client/features/sequence';
import { Spinner } from 'Client/ui/Spinner';
import { SequencePageContentStyle, SequencePageInnerContentStyle } from '../Styled';

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
      <SequencePageContentStyle>
        <Spinner />
      </SequencePageContentStyle>
    );
  }

  return (
    <SequencePageInnerContentStyle isSequenceCollapsed={isSequenceCollapsed}>
      <ProposalSubmit question={question} />
      <Sequence
        question={question}
        questionConfiguration={questionConfiguration}
      />
    </SequencePageInnerContentStyle>

  );
};
