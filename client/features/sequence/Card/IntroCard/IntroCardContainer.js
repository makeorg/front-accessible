// @flow
import React, { useEffect } from 'react';
import { type IntroCardConfig } from 'Shared/types/card';
import { trackDisplayIntroCard } from 'Shared/services/Tracking';
import { IntroCardComponent } from './IntroCardComponent';

type Props = {
  /** Object with Static properties used to configure the Intro Card */
  configuration: IntroCardConfig,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when start button is clicked */
  handleStartSequence: () => void,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

export const IntroCardContainer = ({
  configuration,
  handleStartSequence,
  isCardCollapsed,
  isCardVisible,
  position,
  scale,
  zindex,
}: Props) => {
  useEffect(() => {
    if (isCardVisible) {
      trackDisplayIntroCard();
    }
  }, [isCardVisible]);
  return (
    <IntroCardComponent
      configuration={configuration}
      position={position}
      scale={scale}
      zindex={zindex}
      isCardVisible={isCardVisible}
      isCardCollapsed={isCardCollapsed}
      handleStartSequence={handleStartSequence}
    />
  );
};
