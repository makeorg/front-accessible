/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import Logo from 'Assets/images/logo.svg';
import MainHeader from './Styled';

type Props = {
  /** Method called to track Header */
  handleTracking: Function
};

/**
 * Renders Main Header
 */
const MainHeaderComponent = (props: Props) => {
  const { handleTracking } = props;

  return (
    <MainHeader role="banner">
      <a href="https://make.org">
        <h1>
          <MainHeader.Logo onClick={handleTracking} src={Logo} alt={i18next.t('header.logo_alt')} />
        </h1>
      </a>
    </MainHeader>
  );
};

export default MainHeaderComponent;
