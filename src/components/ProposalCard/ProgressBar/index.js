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
import { HiddenItem } from '../../Elements/HiddenElements';

class ProgressBarComponent extends Component {
  render() {
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
          {/* TODO Dynamic Progres & Remain */}
          <ProgressBar
            progress="20"
            remain="80"
            cx={PROGRESS_SVG_CX}
            cy={PROGRESS_SVG_CY}
            r={PROGRESS_SVG_R}
          />
        </ProgressSvg>
        {/* TODO Dynamic Counter for Active & Total Cards */}
        <ProgressCounter>
          <HiddenItem>Proposition numéro </HiddenItem>
          <ActiveCard aria-valuetext="2">2</ActiveCard>
          <span aria-hidden="true">/</span>
          <HiddenItem>sur </HiddenItem>
          <span aria-valuemax="10">10</span>
        </ProgressCounter>
      </ProgressWrapper>
    );
  }
}

export default ProgressBarComponent;
