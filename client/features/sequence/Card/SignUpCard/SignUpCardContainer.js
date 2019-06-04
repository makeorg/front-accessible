// @flow

import React from 'react';
import { type SignUpCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { SignUpCardComponent } from './SignUpCardComponent';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Sign Up Card Business Logic
 */
export class SignUpCardContainer extends React.Component<Props> {
  componentDidUpdate = () => {
    const { isCardVisible } = this.props;
    if (isCardVisible) {
      Tracking.trackDisplaySignUpCard();
    }
  };

  skipSignUpCard = () => {
    const { incrementCurrentIndex } = this.props;
    Tracking.trackSkipSignUpCard();
    incrementCurrentIndex();
  };

  render() {
    const { configuration } = this.props;

    return (
      <SignUpCardComponent
        configuration={configuration}
        skipSignUpCard={this.skipSignUpCard}
      />
    );
  }
}
