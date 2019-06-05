// @flow
import * as React from 'react';
import { CARD_TYPE_EXTRASLIDE_INTRO } from 'Shared/constants/card';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { IntroCard } from './IntroCard';
import { CardWithCounter } from './CardWithCounter';
import { CardType } from './CardType';

type Props = {
  /** Attribute of the card */
  card: Object,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
  /** Method called when return to previous card */
  decrementCurrentIndex: () => void,
  /** Method called when next card button in Intro Card is clicked  */
  handleStartSequence: () => void,
};

export const Card = ({
  card,
  index,
  currentIndex,
  cardsCount,
  incrementCurrentIndex,
  decrementCurrentIndex,
  handleStartSequence,
}: Props) => {
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);
  const isCardCollapsed = index < currentIndex;
  const isCardVisible = index === currentIndex;

  if (card.type === CARD_TYPE_EXTRASLIDE_INTRO) {
    return (
      <IntroCard
        configuration={card.configuration}
        position={getPosition(index, currentIndex)}
        index={index}
        scale={getScale(index, currentIndex)}
        zindex={getZIndex(index, currentIndex)}
        isCardCollapsed={index < currentIndex}
        isCardVisible={isCardVisible}
        handleStartSequence={handleStartSequence}
      />
    );
  }

  return (
    <CardWithCounter
      cardOffset={card.offset}
      index={index}
      currentIndex={currentIndex}
      cardsCount={cardsCount}
      position={position}
      scale={scale}
      zindex={zindex}
      isCardCollapsed={isCardCollapsed}
      isCardVisible={isCardVisible}
      decrementCurrentIndex={decrementCurrentIndex}
    >
      <CardType
        card={card}
        index={index}
        currentIndex={currentIndex}
        isCardVisible={isCardVisible}
        isCardCollapsed={isCardCollapsed}
        incrementCurrentIndex={incrementCurrentIndex}
        decrementCurrentIndex={decrementCurrentIndex}
        handleStartSequence={handleStartSequence}
      />
    </CardWithCounter>
  );
};
