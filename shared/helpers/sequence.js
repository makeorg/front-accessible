// @flow
import { type ExtraSlidesConfig, type CardType } from 'Shared/types/sequence';
import { type ProposalType } from 'Shared/types/proposal';
import {
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_PROPOSAL,
} from 'Shared/constants/card';

export const getPosition = (index: number = 0, currentIndex: number = 0) =>
  (index - currentIndex) * 2;

export const getZIndex = (index: number = 0, currentIndex: number = 0) =>
  50 - (index - currentIndex);

export const getScale = (initialIndex: number = 0, currentIndex: number = 0) =>
  1 - (initialIndex - currentIndex) / 75;

export const gaugeProgress = (
  initialIndex: number = 0,
  totalIndex: number = 0
) => {
  if (initialIndex === 0 || totalIndex === 0) {
    return 0;
  }
  return Math.floor((initialIndex / totalIndex) * 100);
};

export const gaugeRemain = (
  initialIndex: number = 0,
  totalIndex: number = 0
) => {
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
export const findIndexOfFirstUnvotedCard = (
  firstUnvotedProposal?: ProposalType,
  cards: Array<CardType>
): number => {
  if (!firstUnvotedProposal) {
    return cards.length - 1;
  }

  const indexOfFirstUnvotedCard = cards.findIndex(
    card =>
      card.type === CARD_TYPE_PROPOSAL &&
      card.configuration.id ===
        (firstUnvotedProposal && firstUnvotedProposal.id)
  );

  // if no proposal is voted we return the index of intro cards
  return indexOfFirstUnvotedCard === 1 ? 0 : indexOfFirstUnvotedCard;
};

/**
 * Build cards array
 * @param  {Array<Object>} proposals
 * @param  {ExtraSlidesConfig} extraSlidesConfig
 * @return {Array<CardType>}
 */
export const buildCards = (
  proposals: ProposalType[],
  extraSlidesConfig: ExtraSlidesConfig,
  isLoggedIn: boolean,
  hasProposed: boolean,
  canPropose: boolean
): CardType[] => {
  let cards: CardType[] = proposals.map(proposal => ({
    type: CARD_TYPE_PROPOSAL,
    configuration: proposal,
  }));
  let cardOffset = 0;

  const withPushProposalCard: boolean =
    extraSlidesConfig.pushProposalCard &&
    extraSlidesConfig.pushProposalCard.enabled &&
    canPropose &&
    !hasProposed;
  const withIntroCard: boolean =
    extraSlidesConfig.introCard && extraSlidesConfig.introCard.enabled;
  const withSignupCard: boolean =
    extraSlidesConfig.signUpCard &&
    extraSlidesConfig.signUpCard.enabled &&
    !isLoggedIn;
  const withFinalCard: boolean =
    extraSlidesConfig.finalCard && extraSlidesConfig.finalCard.enabled;

  if (withPushProposalCard) {
    cards.splice(cards.length / 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
      configuration: extraSlidesConfig.pushProposalCard,
    });
  }

  if (withIntroCard) {
    cards.splice(0, 0, {
      type: CARD_TYPE_EXTRASLIDE_INTRO,
      configuration: extraSlidesConfig.introCard,
    });
  } else {
    cardOffset = 1;
  }

  if (withSignupCard) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
      configuration: extraSlidesConfig.signUpCard,
    });
  }

  if (withFinalCard) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
      configuration: extraSlidesConfig.finalCard,
    });
  }

  cards = cards.map(card => ({
    ...card,
    cardOffset,
  }));
  return cards;
};
