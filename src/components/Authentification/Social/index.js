// @flow
import * as React from 'react';
import Authentification from '../Styled';
import FacebookAuthentificationButtonComponent from './FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from './GoogleAuthentification/Button';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number;
  /** Tacking method for Facebook Login */
  trackFacebookLogin: Function;
  /** Tacking method for Google Login */
  trackGoogleLogin: Function;
};

/**
 * Render the Facebook & Google Authentification components
 */
const AuthentificationSocialComponent = (props: Props) => {
  const {
    tabIndex,
    trackFacebookLogin,
    trackGoogleLogin
  } = props;

  return (
    <Authentification>
      <FacebookAuthentificationButtonComponent tabIndex={tabIndex} handleTracking={trackFacebookLogin} />
      <GoogleAuthentificationButtonComponent tabIndex={tabIndex} handleTracking={trackGoogleLogin} />
    </Authentification>
  );
};

export default AuthentificationSocialComponent;
