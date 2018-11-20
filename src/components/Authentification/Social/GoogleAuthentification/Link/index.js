// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLink, SocialIcon } from '../../../Styled/Content';
import GoogleAuthentificationComponent from '..';

const renderGoogleLogin = tabIndex => renderProps => (
  <GoogleLink onClick={renderProps.onClick} tabIndex={tabIndex}>
    <SocialIcon>
      <FontAwesomeIcon icon={faGoogle} />
    </SocialIcon>
    Google
  </GoogleLink>
);

type Props = {
  tabIndex: number,
  handleTracking: Function
};

const GoogleAuthentificationLinkComponent = (props: Props) => {
  const { tabIndex } = props;
  return (
    <GoogleAuthentificationComponent {...props} render={renderGoogleLogin(tabIndex)} />
  );
};

export default GoogleAuthentificationLinkComponent;
