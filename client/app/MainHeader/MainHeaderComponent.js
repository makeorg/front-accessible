/* @flow */

import * as React from 'react';
import i18n from 'Shared/i18n';
import Logo from 'Client/app/assets/images/logo.svg';
import MainHeader from './Styled';

type Props = {
  /** Method called to track Header */
  handleTracking: Function
};

/**
 * Renders Main Header
 */
export const MainHeaderComponent = (props: Props) => {
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
