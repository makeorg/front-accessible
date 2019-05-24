// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { WHOAREWE_FR_LINK } from 'Shared/constants/url';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
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
  return (
    <HeaderStyle>
      <HeaderInnerStyle>
        <Link to="/">
          <h1>
            <HeaderLogoStyle
              onClick={() => Tracking.trackClickMakeLogo()}
              src={Logo}
              alt={i18n.t('header.logo_alt')}
            />
          </h1>
        </Link>
        <FlexElementStyle>
          <HiddenOnMobileStyle as={WhoAreWeLinkStyle} href={WHOAREWE_FR_LINK}>
            {i18n.t('header.whoarewe')}
          </HiddenOnMobileStyle>
          <HeaderAuthentification />
        </FlexElementStyle>
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
