// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLinkStyle, SocialIconStyle } from '../../Styled';
import { GoogleAuthentificationComponent } from '..';

const renderGoogleLogin = () => renderProps => (
  <GoogleLinkStyle onClick={renderProps.onClick}>
    <SocialIconStyle>
      <FontAwesomeIcon icon={faGoogle} />
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
