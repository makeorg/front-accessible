// @flow

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { SvgArrowLeft } from 'Client/ui/Svg/elements';
import {
  BackButtonWrapperStyle,
  BackButtonStyle,
  BackIconStyle,
} from './Styled';

type Props = {
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when previous card button is clicked  */
  goToPreviousCard: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Proposal Card
 */
export const CardHeader = (props: Props) => {
  const { index, cardsCount, cardOffset, goToPreviousCard } = props;

  return (
    <BackButtonWrapperStyle>
      <BackButtonStyle onClick={goToPreviousCard}>
        <BackIconStyle aria-hidden>
          <SvgArrowLeft />
        </BackIconStyle>
        {i18n.t('proposal_card.previous')}
      </BackButtonStyle>
      <ProgressCircleComponent
        cardOffset={cardOffset}
        index={index}
        cardsCount={cardsCount}
      />
    </BackButtonWrapperStyle>
  );
};
