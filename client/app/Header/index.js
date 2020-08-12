// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickMakeLogo } from 'Shared/services/Tracking';
import { useDesktop } from 'Client/hooks/useMedia';
import { HeaderAuthentication } from 'Client/features/auth/Header';
import {
  NAVIGATION_ELEMENT_ARIA_CLASS,
  SEARCH_ELEMENT_ARIA_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import { MobileSearchInput } from 'Client/features/search/Form/Mobile';
import { DesktopSearchInput } from 'Client/features/search/Form/Desktop';
import { MobileMenu } from 'Client/features/navigation/Menu/Mobile';
import { DesktopMenu } from 'Client/features/navigation/Menu/Desktop';
import { MAIN_HEADER } from 'Shared/constants/ids';
import {
  HeaderStyle,
  HeaderInnerStyle,
  HeaderLogoLinkStyle,
  HeaderLogoStyle,
  HeaderFlexLeftStyle,
  HeaderFlexRightStyle,
  HeaderSeparatorStyle,
} from './style';

/**
 * Renders Main Header
 */
export const Header = () => {
  const isDesktop = useDesktop();

  return (
    <HeaderStyle id={MAIN_HEADER} className={PANEL_ARIA_NEGATIVE_TAB_CLASS}>
      <HeaderInnerStyle>
        {!isDesktop && <MobileMenu />}
        <HeaderFlexLeftStyle
          className={`${NAVIGATION_ELEMENT_ARIA_CLASS} ${SEARCH_ELEMENT_ARIA_CLASS}`}
        >
          <h1>
            <HeaderLogoLinkStyle to="/" onClick={trackClickMakeLogo}>
              <HeaderLogoStyle aria-label={i18n.t('header.logo_alt')} />
            </HeaderLogoLinkStyle>
          </h1>
          {isDesktop && <DesktopMenu />}
        </HeaderFlexLeftStyle>
        <HeaderFlexRightStyle className={NAVIGATION_ELEMENT_ARIA_CLASS}>
          {!isDesktop ? <MobileSearchInput /> : <DesktopSearchInput />}
          {isDesktop && <HeaderSeparatorStyle />}
          <HeaderAuthentication />
        </HeaderFlexRightStyle>
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
