// @flow
import React, { type Node as ReactNode } from 'react';
import {
  ScoringContentStyle,
  ScoringTextContainerStyle,
  ScoringTextStyle,
  ScoringPercentageStyle,
  ScoringPercentageTextStyle,
} from './style';

type Props = {
  icon: ReactNode,
  percentage: number,
  text: string,
};

export const IdeaScore = ({ icon, percentage, text }: Props) => (
  <ScoringContentStyle>
    <ScoringTextContainerStyle>
      {icon}
      <ScoringTextStyle>
        <ScoringPercentageStyle>{`${percentage}%`}</ScoringPercentageStyle>
        <ScoringPercentageTextStyle>{text}</ScoringPercentageTextStyle>
      </ScoringTextStyle>
    </ScoringTextContainerStyle>
  </ScoringContentStyle>
);
