// @flow
import * as React from 'react';
import {
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
} from 'Shared/constants/card';
import { type TypeCard } from 'Shared/types/sequence';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { ProposalCard } from './ProposalCard';
import { SignUpCard } from './SignUpCard';
import { IntroCard } from './IntroCard';
import { FinalCard } from './FinalCard';
import { PushProposalCard } from './PushProposalCard';
import { CardWithCounter } from './CardWithCounter';

type Props = {
  /** Attribute of the card */
  card: TypeCard,
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

type CardTypeProps = {
  /** Attribute of the card */
  card: TypeCard,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Is Card is shown to the user */
  isCardVisible: boolean,
  /** Method called we pass to the next card */
  incrementCurrentIndex: () => void,
  /** Method called when next card button in Intro Card is clicked  */
  handleStartSequence: () => void,
};
/**
 * Renders Card
 */
const CardType = (props: CardTypeProps) => {
  const {
    card,
    index,
    currentIndex,
    isCardVisible,
    incrementCurrentIndex,
    handleStartSequence,
  } = props;

  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return (
        <ProposalCard
          proposal={card.configuration}
          index={index}
          incrementCurrentIndex={incrementCurrentIndex}
        />
      );
    case CARD_TYPE_EXTRASLIDE_INTRO:
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
    case CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP:
      return (
        <SignUpCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
          incrementCurrentIndex={incrementCurrentIndex}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return (
        <PushProposalCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
          incrementCurrentIndex={incrementCurrentIndex}
        />
      );
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return (
        <FinalCard
          configuration={card.configuration}
          isCardVisible={isCardVisible}
        />
      );
    default:
      return null;
  }
};

export const Card = ({
  card,
  index,
  currentIndex,
  cardsCount,
  incrementCurrentIndex,
  decrementCurrentIndex,
  skipProposalPushCard,
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
      cardOffset={card.cardOffset}
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
        skipProposalPushCard={skipProposalPushCard}
        handleStartSequence={handleStartSequence}
      />
    </CardWithCounter>
  );
};
