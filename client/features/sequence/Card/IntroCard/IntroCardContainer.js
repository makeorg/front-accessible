// @flow
import * as React from 'react';
import { type IntroCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
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

/**
 * Handles Intro Card Business Logic
 */
export class IntroCardContainer extends React.Component<Props> {
  componentDidUpdate = () => {
    const { isCardVisible } = this.props;
    if (isCardVisible) {
      Tracking.trackDisplayIntroCard();
    }
  };

  render() {
    const {
      configuration,
      handleStartSequence,
      isCardCollapsed,
      isCardVisible,
      position,
      scale,
      zindex,
    } = this.props;
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
  }
}
