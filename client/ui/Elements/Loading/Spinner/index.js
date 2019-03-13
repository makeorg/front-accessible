/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import * as SpinnerElement from './Styled';

export const Spinner = () => (
  <SpinnerElement.ContainerStyle>
    <SpinnerElement.WrapperStyle aria-label={i18n.t('common.loading')}>
      <SpinnerElement.FirstRingStyle aria-hidden />
      <SpinnerElement.SecondRingStyle aria-hidden />
      <SpinnerElement.ThirdRingStyle aria-hidden />
      <SpinnerElement.FourthRingStyle aria-hidden />
    </SpinnerElement.WrapperStyle>
  </SpinnerElement.ContainerStyle>
);
