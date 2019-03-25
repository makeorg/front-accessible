// @flow
import * as React from 'react';
import { Svg } from 'Client/ui/Svg';
import { FacebookLinkStyle, SocialIconStyle } from '../../Styled';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = () => renderProps => (
  <FacebookLinkStyle onClick={renderProps.onClick}>
    <SocialIconStyle>
      <Svg aria-hidden type="SvgFacebookLogo" />
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
