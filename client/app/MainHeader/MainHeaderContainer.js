/* @flow */
import * as React from 'react';
import Tracking from 'Shared/services/Tracking';
import { MainHeaderComponent } from './MainHeaderComponent';

/**
 * Handles Main Header Business Logic
 */
export class MainHeaderContainer extends React.Component<{}> {
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
