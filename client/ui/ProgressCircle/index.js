// @flow
import * as React from 'react';
import * as CardConstant from 'Shared/constants/card';
import { gaugeProgress, gaugeRemain } from 'Shared/helpers/sequence';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
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
    <React.Fragment>
      <ScreenReaderItemStyle
        as="progress"
        value={activeGaugeIndex}
        max={maxGaugeIndex}
        aria-valuenow={activeGaugeIndex}
        aria-valuemax={maxGaugeIndex}
      >
        {i18n.t('proposal_card.number', {
          current: activeGaugeIndex,
          total: maxGaugeIndex,
        })}
      </ScreenReaderItemStyle>

      <ProgressWrapperStyle aria-hidden>
        <ProgressSvgStyle
          width={42}
          height={42}
          viewBox={CardConstant.PROGRESS_SVG_VIEWBOX}
        >
          <ProgressBackgroundStyle
            datacx={CardConstant.PROGRESS_SVG_CX}
            datacy={CardConstant.PROGRESS_SVG_CY}
            datar={CardConstant.PROGRESS_SVG_R}
          />
          <ProgressRingStyle
            datacx={CardConstant.PROGRESS_SVG_CX}
            datacy={CardConstant.PROGRESS_SVG_CY}
            datar={CardConstant.PROGRESS_SVG_R}
          />
          <ProgressCircleStyle
            progress={gaugeProgress(activeGaugeIndex, maxGaugeIndex)}
            remain={gaugeRemain(activeGaugeIndex, maxGaugeIndex)}
            datacx={CardConstant.PROGRESS_SVG_CX}
            datacy={CardConstant.PROGRESS_SVG_CY}
            datar={CardConstant.PROGRESS_SVG_R}
          />
        </ProgressSvgStyle>
        <ProgressCounterStyle>
          <ProgressActiveCardStyle>{activeGaugeIndex}</ProgressActiveCardStyle>
          {`/${maxGaugeIndex}`}
        </ProgressCounterStyle>
      </ProgressWrapperStyle>
    </React.Fragment>
  );
};
