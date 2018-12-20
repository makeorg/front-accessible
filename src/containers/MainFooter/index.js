/* @flow */

import * as React from 'react';
import MainFooterComponent from 'Components/MainFooter';
import Tracking from 'Services/Tracking';

type Props = {
  /** Object with Translations */
  operationTranslation: Object,
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: Object
};

/**
 * Handles Main Footer Business Logic
 */
class MainFooterContainer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.trackClickConsultation = this.trackClickConsultation.bind(this);
  }

  trackClickConsultation = () => {
    Tracking.trackClickConsultation();
    return this;
  }

  render() {
    return (
      <MainFooterComponent handleTracking={this.trackClickConsultation} {...this.props} />
    );
  }
}

export default MainFooterContainer;
