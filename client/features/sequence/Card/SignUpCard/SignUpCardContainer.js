// @flow

import React, { useEffect } from 'react';
import { type SignUpCardConfig } from 'Shared/types/card';
import {
  trackDisplayProposalPushCard,
  trackSkipSignUpCard,
} from 'Shared/services/Tracking';
import { SignUpCardComponent } from './SignUpCardComponent';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
};

/**
 * Handles Sign Up Card Business Logic
 */
export const SignUpCardContainer = ({
  configuration,
  isCardVisible,
  incrementCurrentIndex,
}: Props) => {
  useEffect(() => {
    if (isCardVisible) {
      trackDisplayProposalPushCard();
    }
  }, [isCardVisible]);

  const skipSignUpCard = () => {
    trackSkipSignUpCard();
    incrementCurrentIndex();
  };

  return (
    <SignUpCardComponent
      configuration={configuration}
      skipSignUpCard={skipSignUpCard}
    />
  );
};
