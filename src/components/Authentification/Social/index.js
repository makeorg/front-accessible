import React from 'react';
import Authentification from '../Styled';
import FacebookAuthentificationButtonComponent from './FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from './GoogleAuthentification/Button';

class AuthentificationSocialComponent extends React.Component {
  render() {
    const { tabIndex, trackFacebookLogin, trackGoogleLogin } = this.props;
    return (
      <Authentification>
        <FacebookAuthentificationButtonComponent tabIndex={tabIndex} handleTracking={trackFacebookLogin} />
        <GoogleAuthentificationButtonComponent tabIndex={tabIndex} handleTracking={trackGoogleLogin} />
      </Authentification>
    );
  }
}

export default AuthentificationSocialComponent;
