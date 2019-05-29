// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ReadableItemStyle } from 'Client/ui/Elements/HiddenElements';

type Props = {
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
};

/**
 * Renders Progress Bar in each card
 */
export const CardDescription = (props: Props) => {
  const { index, cardsCount, cardOffset } = props;

  const activeGaugeIndex = index + cardOffset;
  const maxGaugeIndex = cardsCount + cardOffset;

  return (
    <ReadableItemStyle as="dt">
      {i18n.t('proposal_card.number', {
        current: activeGaugeIndex,
        total: maxGaugeIndex,
      })}
    </ReadableItemStyle>
  );
};
