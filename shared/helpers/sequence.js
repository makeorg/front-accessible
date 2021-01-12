// @flow
import { type QuestionExtraSlidesConfigType } from 'Shared/types/question';
import { type SequenceCardType } from 'Shared/types/card';
import { type ProposalType } from 'Shared/types/proposal';
import {
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_PROPOSAL,
} from 'Shared/constants/card';
import { ZONE_CONTROVERSY, ZONE_POPULAR } from 'Shared/constants/sequence';
import { i18n } from 'Shared/i18n';

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
 * @param  {SequenceCardType[]} cards
 * @return {number}
 */
export const findIndexOfFirstUnvotedCard = (
  firstUnvotedProposal?: ProposalType,
  cards: SequenceCardType[],
  currentIndex: number
): number => {
  if (!firstUnvotedProposal) {
    return cards.length ? cards.length - 1 : 0;
  }

  const indexOfFirstUnvotedCard = cards.findIndex(
    card =>
      card.type === CARD_TYPE_PROPOSAL &&
      card.configuration.proposal &&
      card.configuration.proposal.id ===
        (firstUnvotedProposal && firstUnvotedProposal.id)
  );

  if (indexOfFirstUnvotedCard <= currentIndex) {
    return currentIndex;
  }

  // if no proposal is voted we return the index of intro cards
  return indexOfFirstUnvotedCard === 1 ? 0 : indexOfFirstUnvotedCard;
};

/**
 * Build cards array
 * @param  {ProposalType[]} proposals
 * @param  {QuestionExtraSlidesConfigType} extraSlidesConfig
 * @return {SequenceCardType[]}
 */
export const buildCards = (
  proposals: ProposalType[],
  extraSlidesConfig: QuestionExtraSlidesConfigType,
  isLoggedIn: boolean,
  hasProposed: boolean,
  canPropose: boolean,
  disableIntroCard: boolean
): SequenceCardType[] => {
  const withPushProposalCard: boolean =
    extraSlidesConfig.pushProposalCard &&
    extraSlidesConfig.pushProposalCard.enabled &&
    canPropose &&
    !hasProposed;
  const withIntroCard: boolean =
    extraSlidesConfig.introCard &&
    extraSlidesConfig.introCard.enabled &&
    !disableIntroCard;
  const withSignupCard: boolean =
    extraSlidesConfig.signUpCard &&
    extraSlidesConfig.signUpCard.enabled &&
    !isLoggedIn;
  const withFinalCard: boolean =
    extraSlidesConfig.finalCard && extraSlidesConfig.finalCard.enabled;

  const cardOffset = withIntroCard ? 0 : 1;

  const cards: SequenceCardType[] = proposals.map(proposal => ({
    type: CARD_TYPE_PROPOSAL,
    configuration: { proposal },
    offset: cardOffset,
    state: { votes: proposal.votes },
    index: 0,
  }));

  if (withPushProposalCard) {
    cards.splice(cards.length / 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
      configuration: extraSlidesConfig.pushProposalCard,
      offset: cardOffset,
      index: 0,
    });
  }

  if (withIntroCard) {
    cards.splice(0, 0, {
      type: CARD_TYPE_EXTRASLIDE_INTRO,
      configuration: extraSlidesConfig.introCard,
      offset: cardOffset,
      index: 0,
    });
  }

  if (withSignupCard) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
      configuration: extraSlidesConfig.signUpCard,
      offset: cardOffset,
      index: 0,
    });
  }

  if (withFinalCard) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
      configuration: extraSlidesConfig.finalCard,
      offset: cardOffset,
      index: 0,
    });
  }

  const cardsIndexed = cards.map((card, index) => ({
    ...card,
    index,
  }));

  return cardsIndexed;
};

export const getSpecialTitle = (zone: string) => {
  switch (zone) {
    case ZONE_CONTROVERSY: {
      return true;
    }
    case ZONE_POPULAR: {
      return true;
    }
    default:
      return false;
  }
};

export const getSequenceTitleByZone = (zone: string) => {
  switch (zone) {
    case ZONE_CONTROVERSY: {
      return i18n.t('sequence_zone.controversial_title');
    }
    case ZONE_POPULAR: {
      return i18n.t('sequence_zone.popular_title');
    }
    default:
      return null;
  }
};
