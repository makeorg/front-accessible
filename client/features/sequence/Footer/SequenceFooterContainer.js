/* @flow */

import * as React from 'react';
import { Tracking } from 'Shared/services/Tracking';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { SequenceFooterComponent } from './SequenceFooterComponent';

type Props = {
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: QuestionConfiguration,
};

/**
 * Handles Main Footer Business Logic
 */
export class SequenceFooterContainer extends React.Component<Props> {
  trackClickConsultation = () => {
    Tracking.trackClickConsultation();
  };

  render() {
    const { questionConfiguration } = this.props;
    return (
      <SequenceFooterComponent
        handleTracking={this.trackClickConsultation}
        theme={questionConfiguration.theme}
        consultationUrl={questionConfiguration.consultationUrl}
        questionTitle={questionConfiguration.wording.question}
      />
    );
  }
}
