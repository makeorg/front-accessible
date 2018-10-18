import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLink } from '../Styled/Content';
import { IconInButton } from '../../Elements/ButtonElements';
import GoogleAuthentificationComponent from './GoogleAuthentification';

const renderGoogleLogin = renderProps => (
  <GoogleLink onClick={renderProps.onClick}>
    <IconInButton>
      <FontAwesomeIcon icon={faGoogle} />
    </IconInButton>
    Google
  </GoogleLink>
);

const GoogleAuthentificationLinkComponent = props => (
  <GoogleAuthentificationComponent {...props} render={renderGoogleLogin} />
);

export default GoogleAuthentificationLinkComponent;
