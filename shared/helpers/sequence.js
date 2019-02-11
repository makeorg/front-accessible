// @flow
import type {
  ExtraSlidesConfig,
  ExtraSlidesWording,
  CardType
} from 'Shared/types/sequence';
import type {
  Proposal
} from 'Shared/types/proposal';
import {
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_PROPOSAL
} from 'Shared/constants/card';

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
 * @param  {Array<CardType>} cards
 * @return {number}
 */
export const findIndexOfFirstUnvotedCard = (firstUnvotedProposal?: Proposal, cards: Array<CardType>): number => {
  if (!firstUnvotedProposal) {
    return cards.length - 1;
  }

  const indexOfFirstUnvotedCard = cards.findIndex(card => (
    card.type === CARD_TYPE_PROPOSAL && card.configuration.id === (firstUnvotedProposal && firstUnvotedProposal.id)
  ));

  // if no proposal is voted we return the index of intro cards
  return (indexOfFirstUnvotedCard === 1) ? 0 : indexOfFirstUnvotedCard;
};

/**
 * Build cards array
 * @param  {Array<Object>} proposals
 * @param  {ExtraSlidesConfig} extraSlidesConfig
 * @param  {ExtraSlidesWording} extraSlidesWording
 * @return {Array<CardType>}
 */
export const buildCards = (
  proposals: Array<Proposal>,
  extraSlidesConfig: ExtraSlidesConfig,
  extraSlidesWording: ExtraSlidesWording,
  isLoggedIn: boolean,
  hasProposed: boolean
): Array<CardType> => {
  let cards: Array<CardType> = proposals.map(proposal => ({
    type: CARD_TYPE_PROPOSAL,
    configuration: proposal
  }));
  let cardOffset = 0;

  if (extraSlidesConfig.pushProposal && !hasProposed) {
    cards.splice(cards.length / 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
      configuration: extraSlidesConfig.pushProposal
    });
  }

  if (extraSlidesConfig.introCard) {
    cards.splice(0, 0, {
      type: CARD_TYPE_EXTRASLIDE_INTRO,
      configuration: extraSlidesConfig.introCard,
      wording: extraSlidesWording.introCard
    });
  } else {
    cardOffset = 1;
  }

  if (extraSlidesConfig.signUpCard && !isLoggedIn) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
      configuration: extraSlidesConfig.signUpCard,
      wording: extraSlidesWording.signUpCard
    });
  }

  if (extraSlidesConfig.finalCard) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
      configuration: extraSlidesConfig.finalCard,
      wording: extraSlidesWording.finalCard
    });
  }

  cards = cards.map(card => ({
    ...card,
    cardOffset
  }));
  return cards;
};