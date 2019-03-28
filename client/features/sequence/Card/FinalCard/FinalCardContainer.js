import * as React from 'react';
import { type FinalCardConfig } from 'Shared/types/card';
import { Tracking } from 'Shared/services/Tracking';
import { FinalCardComponent } from './FinalCardComponent';

type Props = {
  /** Object with Static properties used to configure the Final Card */
  configuration: FinalCardConfig,
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Final Card Business Logic
 */
export class FinalCardContainer extends React.Component<Props> {
  componentDidUpdate() {
    const { index, currentIndex } = this.props;
    if (index === currentIndex) {
      Tracking.trackDisplayFinalCard();
    }
  }

  render() {
    const {
      configuration,
      index,
      cardsCount,
      goToPreviousCard,
      cardOffset,
      position,
      scale,
      zindex,
      isCardVisible,
    } = this.props;

    return (
      <FinalCardComponent
        configuration={configuration}
        index={index}
        cardOffset={cardOffset}
        cardsCount={cardsCount}
        position={position}
        scale={scale}
        zindex={zindex}
        goToPreviousCard={goToPreviousCard}
        isCardVisible={isCardVisible}
      />
    );
  }
}
