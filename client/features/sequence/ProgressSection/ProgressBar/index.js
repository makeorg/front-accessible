import React from 'react';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProgressBarStyle } from './style';

export const ProgressBar = () => {
  return (
    <>
      <ScreenReaderItemStyle as="progress" />
      {/* @todo: add progress and remain param to ProgressBarStyle
      progress={gaugeProgress(activeGaugeIndex, maxGaugeIndex)}
      remain={gaugeRemain(activeGaugeIndex, maxGaugeIndex)} */}
      <ProgressBarStyle />
    </>
  );
};
