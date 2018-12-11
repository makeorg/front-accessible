// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FacebookLink, SocialIcon } from 'Components/Authentification/Styled/Content';
import FacebookAuthentificationComponent from '../index';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookLink onClick={renderProps.onClick} tabIndex={tabIndex}>
    <SocialIcon>
      <FontAwesomeIcon icon={faFacebook} />
    </SocialIcon>
    Facebook
  </FacebookLink>
);

type Props = {
  tabIndex: number
};

const FacebookAuthentificationLinkComponent = (props: Props) => {
  const { tabIndex } = props;

  return (
    <FacebookAuthentificationComponent {...props} render={renderFacebookLogin(tabIndex)} />
  );
};

export default FacebookAuthentificationLinkComponent;
