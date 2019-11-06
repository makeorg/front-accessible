/* @flow */

import * as React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getConsultationLink } from 'Shared/helpers/url';
import { SequenceFooterComponent } from './SequenceFooterComponent';

type Props = {
  /** Object with operational data of a question * */
  question: TypeQuestion,
};

/**
 * Handles Main Footer Business Logic
 */
export const SequenceFooterContainer = (props: Props) => {
  const { question } = props;
  const { wording } = question;
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );

  return (
    <SequenceFooterComponent
      theme={question.theme}
      consultationLink={consultationLink}
      questionTitle={wording.question}
    />
  );
};
