// @flow
import * as React from 'react';
import {
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
} from 'Shared/constants/card';
import { getPosition, getScale, getZIndex } from 'Shared/helpers/sequence';
import { ProposalCard } from './ProposalCard';
import { SignUpCard } from './SignUpCard';
import { IntroCard } from './IntroCard';
import { FinalCard } from './FinalCard';
import { PushProposalCard } from './PushProposalCard';

type Props = {
  card: Object,
  /** Index of the card */
  index: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Total of cards */
  cardsCount: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: () => void,
  /** Method called when next card button is clicked  */
  goToNextCard: () => void,
  /** Method called when next card button in Sign Up Card is clicked  */
  skipSignUpCard: () => void,
  /** Method called when next card button in Push Proposal Card is clicked  */
  skipProposalPushCard: () => void,
  /** Method called when next card button in Intro Card is clicked  */
  handleStartSequence: () => void,
};

/**
 * Renders Card
 */
export const Card = (props: Props) => {
  const {
    card,
    index,
    currentIndex,
    cardsCount,
    goToNextCard,
    goToPreviousCard,
    skipSignUpCard,
    skipProposalPushCard,
    handleStartSequence,
  } = props;

  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);
  const isCardCollapsed = index < currentIndex;
  const isCardVisible = index === currentIndex;

  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return (
        <ProposalCard
          proposal={card.configuration}
          cardOffset={card.cardOffset}
          index={index}
          position={position}
          scale={scale}
          zindex={zindex}
          cardsCount={cardsCount}
          isCardCollapsed={isCardCollapsed}
          isCardVisible={isCardVisible}
          goToNextCard={goToNextCard}
          goToPreviousCard={goToPreviousCard}
        />
      );
    case CARD_TYPE_EXTRASLIDE_INTRO:
      return (
        <IntroCard
          configuration={card.configuration}
          position={position}
          index={index}
          scale={scale}
          zindex={zindex}
          isCardCollapsed={isCardCollapsed}
          isCardVisible={isCardVisible}
          handleStartSequence={handleStartSequence}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP:
      return (
        <SignUpCard
          configuration={card.configuration}
          cardOffset={card.cardOffset}
          index={index}
          position={position}
          scale={scale}
          zindex={zindex}
          cardsCount={cardsCount}
          isCardCollapsed={isCardCollapsed}
          isCardVisible={isCardVisible}
          goToPreviousCard={goToPreviousCard}
          skipSignUpCard={skipSignUpCard}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return (
        <PushProposalCard
          configuration={card.configuration}
          cardOffset={card.cardOffset}
          index={index}
          position={position}
          scale={scale}
          zindex={zindex}
          isCardCollapsed={isCardCollapsed}
          isCardVisible={isCardVisible}
          cardsCount={cardsCount}
          goToPreviousCard={goToPreviousCard}
          skipProposalPushCard={skipProposalPushCard}
        />
      );
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return (
        <FinalCard
          configuration={card.configuration}
          cardOffset={card.cardOffset}
          index={index}
          position={position}
          scale={scale}
          zindex={zindex}
          isCardVisible={isCardVisible}
          cardsCount={cardsCount}
          currentIndex={currentIndex}
          goToPreviousCard={goToPreviousCard}
        />
      );
    default:
      return null;
  }
};
