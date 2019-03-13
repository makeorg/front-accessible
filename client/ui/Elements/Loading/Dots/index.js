/* @flow */
import * as React from 'react';
import { PendingStyle } from './Styled';

export const LoadingDots = () => {
  return (
    <React.Fragment>
      <PendingStyle delay={0} duration={1}>
        &bull;
      </PendingStyle>
      <PendingStyle delay={0.2} duration={1}>
        &bull;
      </PendingStyle>
      <PendingStyle delay={0.45} duration={1}>
        &bull;
      </PendingStyle>
    </React.Fragment>
  );
};
