/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import * as SpinnerElement from './Styled';

export const Spinner = () => (
  <SpinnerElement.Container>
    <SpinnerElement.Wrapper aria-label={i18next.t('common.loading')}>
      <SpinnerElement.FirstRing aria-hidden />
      <SpinnerElement.SecondRing aria-hidden />
      <SpinnerElement.ThirdRing aria-hidden />
      <SpinnerElement.FourthRing aria-hidden />
    </SpinnerElement.Wrapper>
  </SpinnerElement.Container>
);
