/* @flow */

import * as React from 'react';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getConsultationLink } from 'Shared/helpers/url';
import { SequenceFooterComponent } from './SequenceFooterComponent';

type Props = {
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: TypeQuestionConfiguration,
  /** Object with operational data of a question * */
  question: TypeQuestion,
};

/**
 * Handles Main Footer Business Logic
 */
export const SequenceFooterContainer = (props: Props) => {
  const { questionConfiguration, question } = props;
  const { wording } = question;
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );

  return (
    <SequenceFooterComponent
      theme={questionConfiguration.theme}
      consultationLink={consultationLink}
      questionTitle={wording.question}
    />
  );
};
