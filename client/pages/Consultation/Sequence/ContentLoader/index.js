/* @flow */
import * as React from 'react';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { Sequence } from 'Client/features/sequence';
import { Spinner } from 'Client/ui/Spinner';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { SequencePageContentStyle } from '../Styled';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: QuestionConfiguration,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
};

/**
 * Renders SequenceContainerLoader
 */
export const SequencePageContentLoader = (props: Props) => {
  const { question, questionConfiguration, isSequenceCollapsed } = props;

  if (!question) {
    return (
      <SequencePageContentStyle>
        <Spinner />
      </SequencePageContentStyle>
    );
  }

  return (
    <React.Fragment>
      {question.canPropose && <ProposalSubmit question={question} />}
      <Sequence
        isSequenceCollapsed={isSequenceCollapsed}
        question={question}
        questionConfiguration={questionConfiguration}
      />
    </React.Fragment>
  );
};
