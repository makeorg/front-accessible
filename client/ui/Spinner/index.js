/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import * as SpinnerElement from './Styled';

export const Spinner = () => (
  <SpinnerElement.ContainerStyle>
    <SpinnerElement.WrapperStyle aria-label={i18next.t('common.loading')}>
      <SpinnerElement.FirstRingStyle aria-hidden />
      <SpinnerElement.SecondRingStyle aria-hidden />
      <SpinnerElement.ThirdRingStyle aria-hidden />
      <SpinnerElement.FourthRingStyle aria-hidden />
    </SpinnerElement.WrapperStyle>
  </SpinnerElement.ContainerStyle>
);
