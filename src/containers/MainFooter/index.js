import React, { Component } from 'react';
import MainFooterComponent from '../../components/MainFooter';
import Tracking from '../../services/Tracking';

class MainFooterContainer extends Component {
  constructor() {
    super();
    this.trackClickConsultation = this.trackClickConsultation.bind(this);
  }

  trackClickConsultation() {
    Tracking.trackClickConsultation();
    return this;
  }

  render() {
    return (
      <MainFooterComponent handleTracking={this.trackClickConsultation} />
    );
  }
}

export default MainFooterContainer;
