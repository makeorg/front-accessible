/* @flow */
import * as React from 'react';
import MainHeaderComponent from 'Src/components/MainHeader';
import Tracking from 'Shared/services/Tracking';

/**
 * Handles Main Header Business Logic
 */
class MainHeaderContainer extends React.Component<{}> {
  constructor() {
    super();
    this.trackMakeLogo = this.trackMakeLogo.bind(this);
  }

  trackMakeLogo = () => {
    Tracking.trackClickMakeLogo();
    return this;
  }

  render() {
    return (
      <MainHeaderComponent handleTracking={this.trackMakeLogo} />
    );
  }
}

export default MainHeaderContainer;
