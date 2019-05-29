// @flow
import * as React from 'react';
import * as CardConstant from 'Shared/constants/card';
import { gaugeProgress, gaugeRemain } from 'Shared/helpers/sequence';
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
    <ProgressWrapperStyle aria-hidden>
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
        <ProgressActiveCardStyle>{activeGaugeIndex}</ProgressActiveCardStyle>
        {`/${maxGaugeIndex}`}
      </ProgressCounterStyle>
    </ProgressWrapperStyle>
  );
};
