// @flow
import * as React from 'react';
import { SvgFacebookLogo } from 'Client/ui/Svg/elements';
import { FacebookLinkStyle, SocialIconStyle } from '../../Styled';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = () => renderProps => (
  <FacebookLinkStyle onClick={renderProps.onClick}>
    <SocialIconStyle>
      <SvgFacebookLogo aria-hidden />
    </SocialIconStyle>
    Facebook
  </FacebookLinkStyle>
);

/**
 * Renders Facebook authentification link
 */
export const FacebookAuthentificationLinkComponent = () => {
  return <FacebookAuthentificationComponent render={renderFacebookLogin()} />;
};
