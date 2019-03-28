import * as React from 'react';
import { type SignUpCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { SignUpCardComponent } from './SignUpCardComponent';

type Props = {
  /** Object with Static properties used to configure the Sign Up Card */
  configuration: SignUpCardConfig,
  /** Index of the card */
  index: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when next card button is clicked  */
  skipSignUpCard: () => void,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Sign Up Card Business Logic
 */
export class SignUpCardContainer extends React.Component<Props, State> {
  componentDidUpdate = () => {
    const { isCardVisible } = this.props;
    if (isCardVisible) {
      Tracking.trackDisplaySignUpCard();
    }
  };

  render() {
    const {
      configuration,
      index,
      cardsCount,
      cardOffset,
      goToPreviousCard,
      skipSignUpCard,
      zindex,
      position,
      scale,
      isCardCollapsed,
      isCardVisible,
    } = this.props;

    return (
      <SignUpCardComponent
        configuration={configuration}
        position={position}
        index={index}
        scale={scale}
        zindex={zindex}
        cardsCount={cardsCount}
        cardOffset={cardOffset}
        isCardVisible={isCardVisible}
        isCardCollapsed={isCardCollapsed}
        goToPreviousCard={goToPreviousCard}
        skipSignUpCard={skipSignUpCard}
      />
    );
  }
}
