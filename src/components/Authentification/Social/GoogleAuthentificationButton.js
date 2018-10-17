import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconInButton, GoogleButton } from '../../Elements/ButtonElements';
import GoogleAuthentificationComponent from './GoogleAuthentification';

const renderGoogleLogin = renderProps => (
  <GoogleButton onClick={renderProps.onClick}>
    <IconInButton>
      <FontAwesomeIcon icon={faGoogle} />
    </IconInButton>
    Google
  </GoogleButton>

);

const GoogleAuthentificationButtonComponent = props => (
  <GoogleAuthentificationComponent {...props} render={renderGoogleLogin} />
);

export default GoogleAuthentificationButtonComponent;
