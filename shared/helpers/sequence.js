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
 * Return final card depending on zone and keyword
 * @param  {string} zone
 * @param  {string} keyword
 * @return {SequenceCardType}
 */
export const getFinalCard = (zone: string, keyword: string) => {
  if (zone === ZONE_CONTROVERSY || zone === ZONE_POPULAR || keyword) {
    return CARD_TYPE_EXTRASLIDE_SPECIAL_FINAL_CARD;
  }
  return CARD_TYPE_EXTRASLIDE_FINAL_CARD;
};

/**
 * Build cards array
 * @param  {ProposalType[]} proposals
 * @param  {QuestionExtraSlidesConfigType} extraSlidesConfig
 * @param  {boolean} hasProposed
 * @param  {boolean} canPropose
 * @param  {string} zone
 * @param  {string} keyword
 * @param  {string} introCardParam
 * @param  {string} pushProposalParam
 * @return {SequenceCardType[]}
 */
export const buildCards = (
  proposals: ProposalType[],
  extraSlidesConfig: QuestionExtraSlidesConfigType,
  hasProposed: boolean,
  canPropose: boolean,
  zone?: string,
  keyword?: string,
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
    type: getFinalCard(zone, keyword),
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
 * Check if card zone or keyword needs a special title
 * @param  {string} zone
 * @param  {string} keyword
 * @return {boolean}
 */
export const getSpecialTitle = (zone: string, keyword: string) => {
  if (
    zone === ZONE_POPULAR ||
    zone === ZONE_CONTROVERSY ||
    (keyword && keyword !== undefined)
  ) {
    return true;
  }
  return false;
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

/** Render NoProposal card title depending on type of sequence, regular, zone or keyword
 * @param  {string} zone
 * @return {string || null}
 */
export const getNoProposalCardTitle = (zone: string) => {
  switch (zone) {
    case ZONE_CONTROVERSY: {
      return i18n.t('no_proposal_card.title.controversial');
    }
    case ZONE_POPULAR: {
      return i18n.t('no_proposal_card.title.popular');
    }
    default:
      return i18n.t('no_proposal_card.title.regular');
  }
};
