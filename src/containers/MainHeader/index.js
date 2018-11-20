/* @flow */

import * as React from 'react';
import MainHeaderComponent from '../../components/MainHeader';
import Tracking from '../../services/Tracking';

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
