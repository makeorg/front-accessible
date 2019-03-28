// @flow
import * as React from 'react';
import {
  IconWrapperStyle,
  FacebookButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { SvgFacebookLogoF } from 'Client/ui/Svg/elements';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = () => renderProps => (
  <FacebookButtonStyle onClick={renderProps.onClick}>
    <IconWrapperStyle>
      <SvgFacebookLogoF aria-hidden />
    </IconWrapperStyle>
    Facebook
  </FacebookButtonStyle>
);

/**
 * Renders Facebook authentification button
 */
export const FacebookAuthentificationButtonComponent = () => {
  return <FacebookAuthentificationComponent render={renderFacebookLogin()} />;
};
