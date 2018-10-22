import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FacebookLink, SocialIcon } from '../../../Styled/Content';
import FacebookAuthentificationComponent from '..';

const renderFacebookLogin = renderProps => (
  <FacebookLink onClick={renderProps.onClick}>
    <SocialIcon>
      <FontAwesomeIcon icon={faFacebook} />
    </SocialIcon>
    Facebook
  </FacebookLink>
);

const FacebookAuthentificationLinkComponent = props => (
  <FacebookAuthentificationComponent {...props} render={renderFacebookLogin} />
);

export default FacebookAuthentificationLinkComponent;
