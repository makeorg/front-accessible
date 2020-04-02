// @flow
import React from 'react';
import {
  IconWrapperStyle,
  GoogleButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { SvgGoogleLogoG } from 'Client/ui/Svg/elements';
import { GoogleAuthentificationComponent } from '../index';

const renderGoogleLogin = () => renderProps => (
  <GoogleButtonStyle onClick={renderProps.onClick}>
    <IconWrapperStyle>
      <SvgGoogleLogoG aria-hidden />
    </IconWrapperStyle>
    Google
  </GoogleButtonStyle>
);

/**
 * Renders Google authentification button
 */
export const GoogleAuthentificationButtonComponent = () => {
  return <GoogleAuthentificationComponent render={renderGoogleLogin()} />;
};
