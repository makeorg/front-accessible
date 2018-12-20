/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import Spinner from './Styled';

const SpinnerComponent = () => (
  <Spinner>
    <Spinner.Wrapper aria-label={i18next.t('common.loading')}>
      <Spinner.FirstRing aria-hidden />
      <Spinner.SecondRing aria-hidden />
      <Spinner.ThirdRing aria-hidden />
      <Spinner.FourthRing aria-hidden />
    </Spinner.Wrapper>
  </Spinner>
);


export default SpinnerComponent;
