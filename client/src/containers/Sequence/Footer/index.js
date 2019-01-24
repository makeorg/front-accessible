/* @flow */

import * as React from 'react';
import { SequenceFooterComponent } from 'Src/components/Sequence/Footer';
import Tracking from 'Src/services/Tracking';

type Props = {
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: Object
};

/**
 * Handles Main Footer Business Logic
 */
export class SequenceFooterContainer extends React.Component<Props> {
  trackClickConsultation = () => {
    Tracking.trackClickConsultation();
    return this;
  }

  render() {
    return (
      <SequenceFooterComponent handleTracking={this.trackClickConsultation} {...this.props} />
    );
  }
}
