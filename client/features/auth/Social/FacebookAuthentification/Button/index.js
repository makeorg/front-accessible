// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { IconInButton, FacebookButton } from 'Client/ui/Elements/ButtonElements';
import FacebookAuthentificationComponent from '../index';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookButton onClick={renderProps.onClick} tabIndex={tabIndex}>
    <IconInButton>
      <FontAwesomeIcon icon={faFacebookF} />
    </IconInButton>
    Facebook
  </FacebookButton>
);

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number
};

/**
 * Renders Facebook authentification button
 */
const FacebookAuthentificationButtonComponent = (props: Props) => {
  const { tabIndex } = props;
  return (
    <FacebookAuthentificationComponent {...props} render={renderFacebookLogin(tabIndex)} />
  );
};

export default FacebookAuthentificationButtonComponent;
