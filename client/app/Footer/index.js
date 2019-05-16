// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FRONT_LEGACY_ROOT } from 'Shared/constants/url';
import Logo from 'Client/app/assets/images/logo.svg';
import { Tracking } from 'Shared/services/Tracking';
import { FooterLinks } from './Link';
import { FooterStyle, FooterNavStyle, FooterLogoStyle } from './Styled';

/**
 * Renders Main Footer
 */
export const Footer = () => (
  <FooterStyle role="contentinfo">
    <FooterNavStyle role="navigation">
      <a href={FRONT_LEGACY_ROOT}>
        <FooterLogoStyle
          onClick={() => Tracking.trackClickMakeLogo()}
          src={Logo}
          alt={i18n.t('header.logo_alt')}
        />
      </a>
      <FooterLinks />
    </FooterNavStyle>
  </FooterStyle>
);
