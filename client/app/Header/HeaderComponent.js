// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { FRONT_LEGACY_ROOT } from 'Shared/constants/url';
import { HeaderAuthentification } from './Authentification';
import { HeaderStyle, HeaderInnerStyle, HeaderLogoStyle } from './Styled';

/**
 * Renders Main Header
 */
export const HeaderComponent = () => {
  return (
    <HeaderStyle>
      <HeaderInnerStyle>
        <a href={FRONT_LEGACY_ROOT}>
          <h1>
            <HeaderLogoStyle
              onClick={() => Tracking.trackClickMakeLogo()}
              src={Logo}
              alt={i18n.t('header.logo_alt')}
            />
          </h1>
        </a>
        <HeaderAuthentification />
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
