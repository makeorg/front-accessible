/* @flow */

import * as React from 'react';
import { ProposalCardComponent } from './ProposalCardComponent';

type Props = {
  /** Object with all proposal's properties */
  proposal: Object,
  /** Index of the card */
  index: number,
  /** Position of the card */
  position: number,
  /** Scale property used by Styled Component */
  scale: number,
  /** Zindex property used by Styled Component */
  zindex: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when next card button is clicked (Incremented currentIndex) */
  goToNextCard: () => void,
  /** Boolean toggled when card user has skip the card */
  isCardCollapsed: boolean,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Handles Proposal Card Business Logic
 */
export const ProposalCardContainer = (props: Props) => {
  const {
    proposal,
    cardsCount,
    cardOffset,
    goToPreviousCard,
    goToNextCard,
    index,
    position,
    scale,
    zindex,
    currentIndex,
    isCardCollapsed,
    isCardVisible,
  } = props;

  return (
    <ProposalCardComponent
      proposal={proposal}
      index={index}
      position={position}
      scale={scale}
      zindex={zindex}
      cardsCount={cardsCount}
      currentIndex={currentIndex}
      cardOffset={cardOffset}
      goToPreviousCard={goToPreviousCard}
      goToNextCard={goToNextCard}
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
    />
  );
};
