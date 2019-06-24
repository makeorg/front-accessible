// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { WHOAREWE_FR_LINK } from 'Shared/constants/url';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { useMobile } from 'Client/hooks/useMedia';
import { HeaderAuthentification } from './Authentification';
import {
  HeaderStyle,
  HeaderInnerStyle,
  HeaderLogoStyle,
  WhoAreWeLinkStyle,
} from './Styled';

/**
 * Renders Main Header
 */
export const Header = () => {
  const isMobile = useMobile();
  return (
    <HeaderStyle>
      <HeaderInnerStyle>
        <h1>
          <Link to="/">
            <HeaderLogoStyle
              onClick={() => Tracking.trackClickMakeLogo()}
              src={Logo}
              alt={i18n.t('header.logo_alt')}
            />
          </Link>
        </h1>
        <FlexElementStyle>
          {!isMobile && (
            <WhoAreWeLinkStyle href={WHOAREWE_FR_LINK}>
              {i18n.t('header.whoarewe')}
            </WhoAreWeLinkStyle>
          )}
          <HeaderAuthentification />
        </FlexElementStyle>
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
