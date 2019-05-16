// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import Logo from 'Client/app/assets/images/logo.svg';
import { FRONT_LEGACY_ROOT, WHOAREWE_FR_LINK } from 'Shared/constants/url';
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
        <a href={FRONT_LEGACY_ROOT}>
          <h1>
            <HeaderLogoStyle
              onClick={() => Tracking.trackClickMakeLogo()}
              src={Logo}
              alt={i18n.t('header.logo_alt')}
            />
          </h1>
        </a>
        <FlexElementStyle>
          <HiddenOnMobileStyle>
            <WhoAreWeLinkStyle href={WHOAREWE_FR_LINK} target="blank_">
              {i18n.t('header.whoarewe')}
            </WhoAreWeLinkStyle>
          </HiddenOnMobileStyle>
          <HeaderAuthentification />
        </FlexElementStyle>
      </HeaderInnerStyle>
    </HeaderStyle>
  );
};
