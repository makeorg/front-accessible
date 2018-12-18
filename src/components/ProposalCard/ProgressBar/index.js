import React, { Component } from 'react';
import i18next from 'i18next';
import * as CardConstant from 'Constants/card';
import { gaugeProgress, gaugeRemain } from 'Helpers/sequence';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import * as Progress from '../Styled/Progress';

class ProgressBarComponent extends Component {
  render() {
    const {
      index,
      cardsCount
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
            progress={gaugeProgress(index, cardsCount)}
            remain={gaugeRemain(index, cardsCount)}
            cx={CardConstant.PROGRESS_SVG_CX}
            cy={CardConstant.PROGRESS_SVG_CY}
            r={CardConstant.PROGRESS_SVG_R}
          />
        </Progress.ProgressSvg>
        <Progress.ProgressCounter>
          <HiddenItem aria-hidden>
            {i18next.t('proposal_card.number')}
          </HiddenItem>
          &nbsp;
          <Progress.ActiveCard aria-valuetext={index}>{index}</Progress.ActiveCard>
          <span aria-hidden>/</span>
          <HiddenItem>{i18next.t('common.from')}</HiddenItem>
          &nbsp;
          <span aria-valuemax={cardsCount}>{cardsCount}</span>
        </Progress.ProgressCounter>
      </Progress.ProgressWrapper>
    );
  }
}

export default ProgressBarComponent;
