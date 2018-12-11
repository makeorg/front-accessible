/* @flow */

import * as React from 'react';
import MainFooterComponent from 'Components/MainFooter';
import Tracking from 'Services/Tracking';

type Props = {
  operationTranslation: Object,
  questionConfiguration: Object
};

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
