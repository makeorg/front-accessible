// @flow
import * as React from 'react';
import Authentification from '../Styled';
import FacebookAuthentificationButtonComponent from './FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from './GoogleAuthentification/Button';

type Props = {
  tabIndex: number;
  trackFacebookLogin: Function;
  trackGoogleLogin: Function;
};

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
