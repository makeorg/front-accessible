/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import {
  SpinnerContainerStyle,
  SpinnerWrapperStyle,
  SpinnerFirstRingStyle,
  SpinnerSecondRingStyle,
  SpinnerThirdRingStyle,
  SpinnerFourthRingStyle,
} from './Styled';

export const Spinner = () => (
  <SpinnerContainerStyle>
    <SpinnerWrapperStyle aria-label={i18n.t('common.loading')}>
      <SpinnerFirstRingStyle aria-hidden />
      <SpinnerSecondRingStyle aria-hidden />
      <SpinnerThirdRingStyle aria-hidden />
      <SpinnerFourthRingStyle aria-hidden />
    </SpinnerWrapperStyle>
  </SpinnerContainerStyle>
);
