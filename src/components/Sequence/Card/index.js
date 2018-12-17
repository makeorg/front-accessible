/* @flow */
import * as React from 'react';
import ProposalCardContainer from 'Containers/ProposalCard';
import SignUpCardContainer from 'Containers/ProposalCard/SignUpCard';
import IntroCardContainer from 'Containers/ProposalCard/IntroCard';
import FinalCardContainer from 'Containers/ProposalCard/FinalCard';
import PushProposalCardContainer from 'Containers/ProposalCard/PushProposalCard';
import {
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD
} from 'Constants/card';

type Props = {
  card: Object,
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: Function,
  /** Method called when next card button is clicked  */
  goToNextCard: Function,
  /** Method called when next card button in Sign Up Card is clicked  */
  skipSignUpCard: Function,
  /** Method called when next card button in Push Proposal Card is clicked  */
  skipProposalPushCard: Function,
  /** Method called when next card button in Intro Card is clicked  */
  handleStartSequence: Function
};

/**
 * Renders Card
 */
const Card = (props: Props) => {
  const {
    card,
    index,
    currentIndex,
    cardsCount,
    goToNextCard,
    goToPreviousCard,
    skipSignUpCard,
    skipProposalPushCard,
    handleStartSequence
  } = props;

  switch (card.type) {
    case CARD_TYPE_PROPOSAL:
      return (
        <ProposalCardContainer
          proposal={card.configuration}
          index={index}
          currentIndex={currentIndex}
          cardsCount={cardsCount}
          goToNextCard={goToNextCard}
          goToPreviousCard={goToPreviousCard}
        />
      );
    case CARD_TYPE_EXTRASLIDE_INTRO:
      return (
        <IntroCardContainer
          configuration={card.configuration}
          index={index}
          currentIndex={currentIndex}
          handleStartSequence={handleStartSequence}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP:
      return (
        <SignUpCardContainer
          configuration={card.configuration}
          index={index}
          currentIndex={currentIndex}
          cardsCount={cardsCount}
          goToPreviousCard={goToPreviousCard}
          skipSignUpCard={skipSignUpCard}
        />
      );
    case CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL:
      return (
        <PushProposalCardContainer
          configuration={card.configuration}
          index={index}
          currentIndex={currentIndex}
          cardsCount={cardsCount}
          goToPreviousCard={goToPreviousCard}
          skipProposalPushCard={skipProposalPushCard}
        />
      );
    case CARD_TYPE_EXTRASLIDE_FINAL_CARD:
      return (
        <FinalCardContainer
          configuration={card.configuration}
          index={index}
          cardsCount={cardsCount}
          currentIndex={currentIndex}
          goToPreviousCard={goToPreviousCard}
        />
      );
    default:
      return null;
  }
};

export default Card;
