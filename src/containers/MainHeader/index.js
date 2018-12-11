/* @flow */

import * as React from 'react';
import MainHeaderComponent from 'Components/MainHeader';
import Tracking from 'Services/Tracking';

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
