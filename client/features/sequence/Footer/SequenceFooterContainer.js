/* @flow */

import * as React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { SequenceFooterComponent } from './SequenceFooterComponent';

type Props = {
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: QuestionConfiguration,
};

/**
 * Handles Main Footer Business Logic
 */
export const SequenceFooterContainer = (props: Props) => {
  const { questionConfiguration } = props;
  return (
    <SequenceFooterComponent
      theme={questionConfiguration.theme}
      consultationUrl={questionConfiguration.consultationUrl}
      questionTitle={questionConfiguration.wording.question}
    />
  );
};
