// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import * as CardConstant from 'Shared/constants/card';
import { gaugeProgress, gaugeRemain } from 'Shared/helpers/sequence';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  ProgressWrapperStyle,
  ProgressSvgStyle,
  ProgressBackgroundStyle,
  ProgressRingStyle,
  ProgressCircleStyle,
  ProgressCounterStyle,
  ProgressActiveCardStyle,
} from './Styled/Progress';

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
export const ProgressCircleComponent = (props: Props) => {
  const { index, cardsCount, cardOffset } = props;

  const activeGaugeIndex = index + cardOffset;
  const maxGaugeIndex = cardsCount + cardOffset;

  return (
    <ProgressWrapperStyle role="progressbar">
      <ProgressSvgStyle viewBox={CardConstant.PROGRESS_SVG_VIEWBOX}>
        <ProgressBackgroundStyle
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
        <ProgressRingStyle
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
        <ProgressCircleStyle
          progress={gaugeProgress(activeGaugeIndex, maxGaugeIndex)}
          remain={gaugeRemain(activeGaugeIndex, maxGaugeIndex)}
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
      </ProgressSvgStyle>
      <ProgressCounterStyle>
        <HiddenItemStyle aria-hidden>
          {i18n.t('proposal_card.number')}
        </HiddenItemStyle>
        <ProgressActiveCardStyle aria-valuetext={activeGaugeIndex}>
          {activeGaugeIndex}
        </ProgressActiveCardStyle>
        <span aria-hidden>/</span>
        <HiddenItemStyle>{i18n.t('common.from')}</HiddenItemStyle>
        <span aria-valuemax={maxGaugeIndex}>{maxGaugeIndex}</span>
      </ProgressCounterStyle>
    </ProgressWrapperStyle>
  );
};
