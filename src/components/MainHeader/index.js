/* @flow */

import * as React from 'react';
import i18n from 'i18next';
import MainHeader from './Styled';
import Logo from '../../assets/images/logo.svg';

type Props = {
  handleTracking: Function
};

const MainHeaderComponent = (props: Props) => {
  const { handleTracking } = props;

  return (
    <MainHeader role="banner">
      <a href="https://make.org">
        <h1>
          <MainHeader.Logo onClick={handleTracking} src={Logo} alt={i18n.t('header.logo_alt')} />
        </h1>
      </a>
    </MainHeader>
  );
};

export default MainHeaderComponent;
