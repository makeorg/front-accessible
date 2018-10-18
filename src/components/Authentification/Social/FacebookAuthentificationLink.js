import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IconInButton } from '../../Elements/ButtonElements';
import { FacebookLink } from '../Styled/Content';
import FacebookAuthentificationComponent from './FacebookAuthentification';

const renderFacebookLogin = renderProps => (
  <FacebookLink onClick={renderProps.onClick}>
    <IconInButton>
      <FontAwesomeIcon icon={faFacebook} />
    </IconInButton>
    Facebook
  </FacebookLink>
);

const FacebookAuthentificationLinkComponent = props => (
  <FacebookAuthentificationComponent {...props} render={renderFacebookLogin} />
);

export default FacebookAuthentificationLinkComponent;
