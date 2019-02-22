// @flow
import * as React from 'react';
import { AuthentificationStyle } from './Styled';
import { FacebookAuthentificationButtonComponent } from './FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from './GoogleAuthentification/Button';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Tacking method for Facebook Login */
  trackFacebookLogin: Function,
  /** Tacking method for Google Login */
  trackGoogleLogin: Function,
};

/**
 * Render the Facebook & Google Authentification components
 */
export const AuthentificationSocialComponent = (props: Props) => {
  const { tabIndex, trackFacebookLogin, trackGoogleLogin } = props;

  return (
    <AuthentificationStyle>
      <FacebookAuthentificationButtonComponent
        tabIndex={tabIndex}
        handleTracking={trackFacebookLogin}
      />
      <GoogleAuthentificationButtonComponent
        tabIndex={tabIndex}
        handleTracking={trackGoogleLogin}
      />
    </AuthentificationStyle>
  );
};
