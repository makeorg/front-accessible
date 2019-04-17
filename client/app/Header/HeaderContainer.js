// @flow
import * as React from 'react';
import { Tracking } from 'Shared/services/Tracking';
import { HeaderComponent } from './HeaderComponent';

/**
 * Handles Main Header Business Logic
 */
export class HeaderContainer extends React.Component<{}> {
  constructor() {
    super();
    this.trackMakeLogo = this.trackMakeLogo.bind(this);
  }

  trackMakeLogo = () => {
    Tracking.trackClickMakeLogo();
  };

  render() {
    return <HeaderComponent handleTracking={this.trackMakeLogo} />;
  }
}
