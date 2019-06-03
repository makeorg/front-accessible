// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';

type Props = {
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Boolean toggled when card is visible / hidden */
  isCardVisible: boolean,
};

/**
 * Renders Progress Bar in each card
 */
export const CardDescription = (props: Props) => {
  const { index, cardsCount, cardOffset, isCardVisible } = props;

  const activeGaugeIndex = index + cardOffset;
  const maxGaugeIndex = cardsCount + cardOffset;

  return (
    <ScreenReaderItemStyle as="dt" aria-hidden={!isCardVisible}>
      {i18n.t('proposal_card.number', {
        current: activeGaugeIndex,
        total: maxGaugeIndex,
      })}
    </ScreenReaderItemStyle>
  );
};
