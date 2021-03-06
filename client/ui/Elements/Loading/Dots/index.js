/* @flow */
import * as React from 'react';
import { LoadingWrapperStyle, DotStyle } from './Styled';

export const LoadingDots = () => (
  <LoadingWrapperStyle aria-hidden>
    <DotStyle delay={0} duration={1}>
      &bull;
    </DotStyle>
    <DotStyle delay={0.2} duration={1}>
      &bull;
    </DotStyle>
    <DotStyle delay={0.45} duration={1}>
      &bull;
    </DotStyle>
  </LoadingWrapperStyle>
);
