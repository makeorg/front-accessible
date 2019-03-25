// @flow
import * as React from 'react';
import { Svg } from 'Client/ui/Svg';
import { GoogleLinkStyle, SocialIconStyle } from '../../Styled';
import { GoogleAuthentificationComponent } from '..';

const renderGoogleLogin = () => renderProps => (
  <GoogleLinkStyle onClick={renderProps.onClick}>
    <SocialIconStyle>
      <Svg aria-hidden type="SvgGoogleLogoG" />
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
