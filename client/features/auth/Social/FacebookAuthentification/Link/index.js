// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FacebookLinkStyle, SocialIconStyle } from '../../Styled';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = () => renderProps => (
  <FacebookLinkStyle onClick={renderProps.onClick}>
    <SocialIconStyle>
      <FontAwesomeIcon icon={faFacebook} />
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
