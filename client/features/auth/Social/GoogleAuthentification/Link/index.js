// @flow
import * as React from 'react';
import { SvgGoogleLogoG } from 'Client/ui/Svg/elements';
import { GoogleLinkStyle, SocialIconStyle } from '../../Styled';
import { GoogleAuthentificationComponent } from '..';

const renderGoogleLogin = () => renderProps => (
  <GoogleLinkStyle onClick={renderProps.onClick}>
    <SocialIconStyle>
      <SvgGoogleLogoG />
    </SocialIconStyle>
    Google
  </GoogleLinkStyle>
);

/**
 * Renders Google authentification link
 */
export const GoogleAuthentificationLinkComponent = () => {
  return <GoogleAuthentificationComponent render={renderGoogleLogin()} />;
};
