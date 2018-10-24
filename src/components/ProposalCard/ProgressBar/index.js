import React, { Component } from 'react';
import i18next from 'i18next';
import * as Progress from '../Styled/Progress';
import * as CardConstant from '../../../constants/card';
import { gaugeProgress, gaugeRemain } from '../../../helpers/sequence';
import { HiddenItem } from '../../Elements/HiddenElements';

class ProgressBarComponent extends Component {
  render() {
    const {
      index,
      totalIndex
    } = this.props;
    return (
      <Progress.ProgressWrapper role="progressbar">
        <Progress.ProgressSvg viewBox={CardConstant.PROGRESS_SVG_VIEWBOX}>
          <Progress.ProgressBackground
            cx={CardConstant.PROGRESS_SVG_CX}
            cy={CardConstant.PROGRESS_SVG_CY}
            r={CardConstant.PROGRESS_SVG_R}
          />
          <Progress.ProgressRing
            cx={CardConstant.PROGRESS_SVG_CX}
            cy={CardConstant.PROGRESS_SVG_CY}
            r={CardConstant.PROGRESS_SVG_R}
          />
          <Progress.ProgressBar
            progress={gaugeProgress(index, totalIndex)}
            remain={gaugeRemain(index, totalIndex)}
            cx={CardConstant.PROGRESS_SVG_CX}
            cy={CardConstant.PROGRESS_SVG_CY}
            r={CardConstant.PROGRESS_SVG_R}
          />
        </Progress.ProgressSvg>
        <Progress.ProgressCounter>
          <HiddenItem>
            {i18next.t('proposal_card.number')}
          </HiddenItem>
          &nbsp;
          <Progress.ActiveCard aria-valuetext={index}>{index}</Progress.ActiveCard>
          <span aria-hidden="true">/</span>
          <HiddenItem>{i18next.t('common.from')}</HiddenItem>
          &nbsp;
          <span aria-valuemax={totalIndex}>{totalIndex}</span>
        </Progress.ProgressCounter>
      </Progress.ProgressWrapper>
    );
  }
}

export default ProgressBarComponent;
