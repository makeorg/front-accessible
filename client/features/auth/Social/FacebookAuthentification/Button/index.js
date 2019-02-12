// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { IconInButtonStyle, FacebookButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookButtonStyle onClick={renderProps.onClick} tabIndex={tabIndex}>
    <IconInButtonStyle>
      <FontAwesomeIcon icon={faFacebookF} />
    </IconInButtonStyle>
    Facebook
  </FacebookButtonStyle>
);

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number
};

/**
 * Renders Facebook authentification button
 */
export const FacebookAuthentificationButtonComponent = (props: Props) => {
  const { tabIndex } = props;
  return (
    <FacebookAuthentificationComponent {...props} render={renderFacebookLogin(tabIndex)} />
  );
};
