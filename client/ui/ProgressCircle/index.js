// @flow
import * as React from 'react';
import i18next from 'i18next';
import * as CardConstant from 'Shared/constants/card';
import { gaugeProgress, gaugeRemain } from 'Shared/helpers/sequence';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import * as Progress from './Styled/Progress';

type Props = {
  /** Index of the card */
  index: number,
  /** Total of cards */
  cardsCount: number,
  /** Offset of cards without pagination (introCard) */
  cardOffset: number
}

/**
 * Renders Progress Bar in each card
 */
export const ProgressCircleComponent = (props: Props) => {
  const {
    index,
    cardsCount,
    cardOffset
  } = props;

  const activeGaugeIndex = index + cardOffset;
  const maxGaugeIndex = cardsCount + cardOffset;

  return (
    <Progress.WrapperStyle role="progressbar">
      <Progress.SvgStyle viewBox={CardConstant.PROGRESS_SVG_VIEWBOX}>
        <Progress.BackgroundStyle
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
        <Progress.RingStyle
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
        <Progress.CircleStyle
          progress={gaugeProgress(activeGaugeIndex, maxGaugeIndex)}
          remain={gaugeRemain(activeGaugeIndex, maxGaugeIndex)}
          cx={CardConstant.PROGRESS_SVG_CX}
          cy={CardConstant.PROGRESS_SVG_CY}
          r={CardConstant.PROGRESS_SVG_R}
        />
      </Progress.SvgStyle>
      <Progress.CounterStyle>
        <HiddenItemStyle aria-hidden>
          {i18next.t('proposal_card.number')}
        </HiddenItemStyle>
        <Progress.ActiveCardStyle aria-valuetext={activeGaugeIndex}>{activeGaugeIndex}</Progress.ActiveCardStyle>
        <span aria-hidden>/</span>
        <HiddenItemStyle>{i18next.t('common.from')}</HiddenItemStyle>
        <span aria-valuemax={maxGaugeIndex}>{maxGaugeIndex}</span>
      </Progress.CounterStyle>
    </Progress.WrapperStyle>
  );
};
