import React, { Component } from 'react';
import {
  ProgressWrapper,
  ProgressSvg,
  ProgressBackground,
  ProgressRing,
  ProgressBar,
  ProgressCounter,
  ActiveCard
} from '../Styled/Progress';
import {
  PROGRESS_SVG_VIEWBOX,
  PROGRESS_SVG_CX,
  PROGRESS_SVG_CY,
  PROGRESS_SVG_R
} from '../../../constants/card';
import {
  gaugeProgress,
  gaugeRemain
} from '../../../helpers/sequence';
import { HiddenItem } from '../../Elements/HiddenElements';

class ProgressBarComponent extends Component {
  render() {
    const {
      index,
      totalIndex
    } = this.props;
    return (
      <ProgressWrapper role="progressbar">
        <ProgressSvg viewBox={PROGRESS_SVG_VIEWBOX}>
          <ProgressBackground
            cx={PROGRESS_SVG_CX}
            cy={PROGRESS_SVG_CY}
            r={PROGRESS_SVG_R}
          />
          <ProgressRing
            cx={PROGRESS_SVG_CX}
            cy={PROGRESS_SVG_CY}
            r={PROGRESS_SVG_R}
          />
          <ProgressBar
            progress={gaugeProgress(index, totalIndex)}
            remain={gaugeRemain(index, totalIndex)}
            cx={PROGRESS_SVG_CX}
            cy={PROGRESS_SVG_CY}
            r={PROGRESS_SVG_R}
          />
        </ProgressSvg>
        <ProgressCounter>
          <HiddenItem>Proposition numéro </HiddenItem>
          <ActiveCard aria-valuetext={index}>{index}</ActiveCard>
          <span aria-hidden="true">/</span>
          <HiddenItem>sur </HiddenItem>
          <span aria-valuemax={totalIndex}>{totalIndex}</span>
        </ProgressCounter>
      </ProgressWrapper>
    );
  }
}

export default ProgressBarComponent;
