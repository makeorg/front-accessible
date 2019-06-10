// @flow
import * as React from 'react';
import * as sequenceHelper from 'Shared/helpers/sequence';
import { type TypeCard } from 'Shared/types/card';
import { CollapseToggle } from './Button';
import { Card } from './Card';
import { SequenceStyle, WrapperStyle, ListStyle } from './Styled';

export type Props = {
  /** Number of cards */
  cardsCount: number,
  /** Array with cards */
  cards: TypeCard[],
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isClosed: boolean,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
  /** Method called when pass previous card */
  decrementCurrentIndex: () => void,
  /** Method called when "Return to proposal" button is clicked */
  handleOpenSequence: () => void,
  /** Method called when "Stard Sequence" button is clicked */
  handleStartSequence: () => void,
};

/**
 * Renders Sequence component with Intro / Push Proposal / Sign Up & Proposal Cards
 */
export const SequenceComponent = (props: Props) => {
  const {
    cardsCount,
    cards,
    currentIndex,
    isClosed,
    incrementCurrentIndex,
    decrementCurrentIndex,
    handleOpenSequence,
    handleStartSequence,
    cardOffset,
  } = props;

  if (!cards) {
    return null;
  }

  return (
    <SequenceStyle role="region">
      <CollapseToggle
        handleOpenSequence={handleOpenSequence}
        isClosed={isClosed}
      />
      <WrapperStyle>
        <ListStyle isSequenceCollapsed={isClosed} id="sequence">
          {cards.map((card, index) => (
            <Card
              key={sequenceHelper.getCardIndex(index)}
              card={card}
              index={index}
              cardsCount={cardsCount}
              cardOffset={cardOffset}
              currentIndex={currentIndex}
              incrementCurrentIndex={incrementCurrentIndex}
              decrementCurrentIndex={decrementCurrentIndex}
              handleStartSequence={handleStartSequence}
            />
          ))}
        </ListStyle>
      </WrapperStyle>
    </SequenceStyle>
  );
};
