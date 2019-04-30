// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { HeaderStyle, HeaderLogoStyle } from './Styled';

/**
 * Renders Main Header
 */
export const HeaderComponent = () => {
  return (
    <HeaderStyle>
      <a href="https://make.org">
        <h1>
          <HeaderLogoStyle
            onClick={() => Tracking.trackClickMakeLogo()}
            src={Logo}
            alt={i18n.t('header.logo_alt')}
          />
        </h1>
      </a>
    </HeaderStyle>
  );
};
