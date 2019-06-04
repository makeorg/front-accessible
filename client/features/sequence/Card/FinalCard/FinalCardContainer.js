// @flow
import React, { useEffect } from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { FinalCardComponent } from './FinalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Final Card Business Logic
 */
export const FinalCardContainer = ({ configuration, isCardVisible }: Props) => {
  useEffect(() => {
    if (isCardVisible) {
      Tracking.trackDisplayFinalCard();
    }
  }, [isCardVisible]);

  return <FinalCardComponent configuration={configuration} />;
};
