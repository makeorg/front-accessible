// @flow
import * as React from 'react';
import { AuthentificationStyle } from './Styled';
import { FacebookAuthentificationButtonComponent } from './FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from './GoogleAuthentification/Button';

type Props = {
  /** Tacking method for Facebook Login */
  trackFacebookLogin: Function,
  /** Tacking method for Google Login */
  trackGoogleLogin: Function,
};

/**
 * Render the Facebook & Google Authentification components
 */
export const AuthentificationSocialComponent = (props: Props) => {
  const { trackFacebookLogin, trackGoogleLogin } = props;

  return (
    <AuthentificationStyle>
      <FacebookAuthentificationButtonComponent
        handleTracking={trackFacebookLogin}
      />
      <GoogleAuthentificationButtonComponent
        handleTracking={trackGoogleLogin}
      />
    </AuthentificationStyle>
  );
};
