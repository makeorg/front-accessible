// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FacebookLinkStyle, SocialIconStyle } from '../../Styled';
import { FacebookAuthentificationComponent } from '../index';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookLinkStyle onClick={renderProps.onClick} tabIndex={tabIndex}>
    <SocialIconStyle>
      <FontAwesomeIcon icon={faFacebook} />
    </SocialIconStyle>
    Facebook
  </FacebookLinkStyle>
);

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number
};

/**
 * Renders Facebook authentification link
 */
export const FacebookAuthentificationLinkComponent = (props: Props) => {
  const { tabIndex } = props;

  return (
    <FacebookAuthentificationComponent {...props} render={renderFacebookLogin(tabIndex)} />
  );
};
