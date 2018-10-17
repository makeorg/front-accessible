import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLink, SocialIcon } from '../../../Styled/Content';
import GoogleAuthentificationComponent from '..';

const renderGoogleLogin = renderProps => (
  <GoogleLink onClick={renderProps.onClick}>
    <SocialIcon>
      <FontAwesomeIcon icon={faGoogle} />
    </SocialIcon>
    Google
  </GoogleLink>
);

const GoogleAuthentificationLinkComponent = props => (
  <GoogleAuthentificationComponent {...props} render={renderGoogleLogin} />
);

export default GoogleAuthentificationLinkComponent;
