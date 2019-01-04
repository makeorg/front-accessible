// @flow

import type { ExtraSlidesConfig, Card } from 'Types/sequence';
import {
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD
} from 'Constants/card';

export const getPosition = (index: number = 0, currentIndex: number = 0) => (
  (index - currentIndex) * 2
);

export const getZIndex = (index: number = 0, currentIndex: number = 0) => (
  50 - (index - currentIndex)
);

export const getScale = (initialIndex: number = 0, currentIndex: number = 0) => (
  1 - ((initialIndex - currentIndex) / 75)
);

export const gaugeProgress = (initialIndex: number = 0, totalIndex: number = 0) => {
  if (initialIndex === 0 || totalIndex === 0) {
    return 0;
  }
  return Math.floor((initialIndex / totalIndex) * 100);
};

export const gaugeRemain = (initialIndex: number = 0, totalIndex: number = 0) => {
  if (initialIndex === 0 || totalIndex === 0) {
    return 0;
  }
  return 100 - Math.floor((initialIndex / totalIndex) * 100);
};

export const getCardIndex = (index: number = 0) => `cardKey_${index}`;

/**
 * Find the index of first no voted card
 * @param  {Object} firstNoVotedProposal
 * @param  {Array<Card>} cards
 * @return {number}
 */
export const findIndexOfFirstUnvotedCard = (firstUnvotedProposal: ?Object, cards: Array<Card>): number => {
  if (!firstUnvotedProposal) {
    return cards.length - 1;
  }

  const indexOfFirstUnvotedCard = cards.findIndex(card => (
    card.type === CARD_TYPE_PROPOSAL && card.configuration.id === firstUnvotedProposal.id
  ));

  // if no proposal is voted we return the index of intro cards
  return (indexOfFirstUnvotedCard === 1) ? 0 : indexOfFirstUnvotedCard;
};

/**
 * Build cards array
 * @param  {Array<Object>} proposals
 * @param  {ExtraSlidesConfig} extraSlides
 * @return {Array<Card>}
 */
export const buildCards = (
  proposals: Array<Object>,
  extraSlides: ExtraSlidesConfig,
  isLoggedIn: boolean,
  hasProposed: boolean
): Array<Card> => {
  const cards: Array<Card> = proposals.map(proposal => ({
    type: CARD_TYPE_PROPOSAL,
    configuration: proposal
  }));

  if ((extraSlides.pushProposal === true || extraSlides.pushProposal instanceof Object) && !hasProposed) {
    cards.splice(cards.length / 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
      configuration: extraSlides.pushProposal
    });
  }

  if (extraSlides.introCard === true || extraSlides.introCard instanceof Object) {
    cards.splice(0, 0, {
      type: CARD_TYPE_EXTRASLIDE_INTRO,
      configuration: extraSlides.introCard
    });
  }

  if ((extraSlides.signUpCard === true || extraSlides.signUpCard instanceof Object) && !isLoggedIn) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
      configuration: extraSlides.signUpCard
    });
  }

  if (extraSlides.finalCard === true || extraSlides.finalCard instanceof Object) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
      configuration: extraSlides.finalCard
    });
  }

  return cards;
};
