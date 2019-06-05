// @flow

import React from 'react';
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
import { FinalCard } from './FinalCard';
import { IntroCard } from './IntroCard';
import { PushProposalCard } from './PushProposalCard';

type Props = {
  /** Attribute of the card */
  card: Object,
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
export const CardType = ({
  card,
  index,
  currentIndex,
  isCardVisible,
  incrementCurrentIndex,
  handleStartSequence,
}: Props) => {
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
