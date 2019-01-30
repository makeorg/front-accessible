// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { IconInButton, GoogleButton } from 'Client/ui/Elements/ButtonElements';
import GoogleAuthentificationComponent from '../index';

const renderGoogleLogin = tabIndex => renderProps => (
  <GoogleButton onClick={renderProps.onClick} tabIndex={tabIndex}>
    <IconInButton>
      <FontAwesomeIcon icon={faGoogle} />
    </IconInButton>
    Google
  </GoogleButton>

);

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number
};

/**
 * Renders Google authentification button
 */
const GoogleAuthentificationButtonComponent = (props: Props) => {
  const { tabIndex } = props;

  return (
    <GoogleAuthentificationComponent {...props} render={renderGoogleLogin(tabIndex)} />
  );
};


export default GoogleAuthentificationButtonComponent;
