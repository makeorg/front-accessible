// @flow

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { ProgressCircleComponent } from 'Client/ui/ProgressCircle';
import { SvgArrowLeft } from 'Client/ui/Svg/elements';
import {
  BackButtonStyle,
  BackIconStyle,
  CardHeaderStyle,
  SpaceBetweenHeaderStyle,
  FlexEndHeaderStyle,
} from './Styled';

type Props = {
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Method called when return to previous card */
  decrementCurrentIndex: () => void,
};

/**
 * Renders Proposal Card
 */
export const CardHeader = (props: Props) => {
  const { index, cardsCount, cardOffset, decrementCurrentIndex } = props;
  const proposalAsFirstCard = index === 0;

  const goToPreviousCard = () => {
    decrementCurrentIndex();
    Tracking.trackClickPreviousCard();
  };

  return (
    <CardHeaderStyle
      as={proposalAsFirstCard ? FlexEndHeaderStyle : SpaceBetweenHeaderStyle}
    >
      {!proposalAsFirstCard && (
        <BackButtonStyle onClick={goToPreviousCard}>
          <BackIconStyle aria-hidden>
            <SvgArrowLeft />
          </BackIconStyle>
          {i18n.t('proposal_card.previous')}
        </BackButtonStyle>
      )}
      <ProgressCircleComponent
        cardOffset={cardOffset}
        index={index}
        cardsCount={cardsCount}
      />
    </CardHeaderStyle>
  );
};
