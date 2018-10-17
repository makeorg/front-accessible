import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { IconInButton, FacebookButton } from '../../Elements/ButtonElements';
import FacebookAuthentificationComponent from './FacebookAuthentification';

const renderFacebookLogin = renderProps => (
  <FacebookButton onClick={renderProps.onClick}>
    <IconInButton>
      <FontAwesomeIcon icon={faFacebookF} />
    </IconInButton>
    Facebook
  </FacebookButton>
);

const FacebookAuthentificationButtonComponent = props => (
  <FacebookAuthentificationComponent {...props} render={renderFacebookLogin} />
);

export default FacebookAuthentificationButtonComponent;
