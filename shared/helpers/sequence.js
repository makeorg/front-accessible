// @flow
import { type QuestionExtraSlidesConfigType } from 'Shared/types/question';
import { type SequenceCardType } from 'Shared/types/card';
import { type ProposalType } from 'Shared/types/proposal';
import {
  CARD_TYPE_EXTRASLIDE_FINAL_CARD,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD,
  CARD_TYPE_PROPOSAL,
} from 'Shared/constants/card';
import { ZONE_CONTROVERSY, ZONE_POPULAR } from 'Shared/constants/sequence';
import { i18n } from 'Shared/i18n';

/**
 * Find the index of first no voted card
 * @param  {Object} firstNoVotedProposal
 * @param  {SequenceCardType[]} cards
 * @param  {number} currentIndex
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
 * Return finql card depending on zone
 * @param  {string} zone
 * @return {SequenceCardType}
 */
export const getFinalCardByZone = (zone: string) => {
  switch (zone) {
    case ZONE_CONTROVERSY: {
      return CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD;
    }
    case ZONE_POPULAR: {
      return CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD;
    }
    default:
      return CARD_TYPE_EXTRASLIDE_FINAL_CARD;
  }
};

/**
 * Build cards array
 * @param  {ProposalType[]} proposals
 * @param  {QuestionExtraSlidesConfigType} extraSlidesConfig
 * @param  {boolean} hasProposed
 * @param  {boolean} canPropose
 * @param  {boolean} disableIntroCard
 * @param  {string} zone
 * @return {SequenceCardType[]}
 */
export const buildCards = (
  proposals: ProposalType[],
  extraSlidesConfig: QuestionExtraSlidesConfigType,
  hasProposed: boolean,
  canPropose: boolean,
  zone?: string,
  introCardParam?: string,
  pushProposalParam?: string
): SequenceCardType[] => {
  const withPushProposalCard: boolean =
    extraSlidesConfig.pushProposalCard &&
    extraSlidesConfig.pushProposalCard.enabled &&
    canPropose &&
    pushProposalParam &&
    !hasProposed;
  const withIntroCard: boolean =
    extraSlidesConfig.introCard &&
    extraSlidesConfig.introCard.enabled &&
    introCardParam;

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

  cards.splice(cards.length, 0, {
    type: getFinalCardByZone(zone),
    configuration: extraSlidesConfig.finalCard,
    offset: cardOffset,
    index: 0,
  });

  const cardsIndexed = cards.map((card, index) => ({
    ...card,
    index,
  }));

  return cardsIndexed;
};

/**
 * Check if card zone needs a special title
 * @param  {string} zone
 * @return {boolean}
 */
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

/**
 * Render title depending on zone
 * @param  {string} zone
 * @return {string || null}
 */
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
