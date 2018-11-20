// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FacebookLink, SocialIcon } from '../../../Styled/Content';
import FacebookAuthentificationComponent from '..';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookLink onClick={renderProps.onClick} tabIndex={tabIndex}>
    <SocialIcon>
      <FontAwesomeIcon icon={faFacebook} />
    </SocialIcon>
    Facebook
  </FacebookLink>
);

type Props = {
  tabIndex: number,
  handleTracking: Function
};

const FacebookAuthentificationLinkComponent = (props: Props) => {
  const { tabIndex } = props;

  return (
    <FacebookAuthentificationComponent {...props} render={renderFacebookLogin(tabIndex)} />
  );
};

export default FacebookAuthentificationLinkComponent;
