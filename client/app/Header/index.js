// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickMakeLogo } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { WHOAREWE_FR_LINK, WHOAREWE_EN_LINK } from 'Shared/constants/url';
import { useDesktop } from 'Client/hooks/useMedia';
import { SearchInput } from 'Client/features/search/Form';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { HeaderAuthentication } from './Authentication';
import {
  HeaderStyle,
  HeaderInnerStyle,
  HeaderLogoStyle,
  HeaderFlexLeftStyle,
  HeaderFlexRightStyle,
  WhoAreWeLinkStyle,
} from './style';

/**
 * Renders Main Header
 */
export const Header = () => {
  const isDesktop = useDesktop();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isFR = country === 'FR';

  return (
    <HeaderStyle>
      <HeaderInnerStyle>
        <HeaderFlexLeftStyle>
          <h1>
            <Link to="/">
              <HeaderLogoStyle
                onClick={() => trackClickMakeLogo()}
                src={Logo}
                alt={i18n.t('header.logo_alt')}
              />
            </Link>
          </h1>
          <SearchInput />
        </HeaderFlexLeftStyle>
        <HeaderFlexRightStyle>
          {isDesktop && (
            <WhoAreWeLinkStyle
              target="_blank"
              rel="noreferrer noopener"
              href={isFR ? WHOAREWE_FR_LINK : WHOAREWE_EN_LINK}
            >
              {i18n.t('header.whoarewe')}
            </WhoAreWeLinkStyle>
          )}
          <HeaderAuthentication />
        </HeaderFlexRightStyle>
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
