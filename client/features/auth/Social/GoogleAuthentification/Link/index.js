// @flow
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleLinkStyle, SocialIconStyle } from '../../Styled';
import { GoogleAuthentificationComponent } from '..';

const renderGoogleLogin = tabIndex => renderProps => (
  <GoogleLinkStyle onClick={renderProps.onClick} tabIndex={tabIndex}>
    <SocialIconStyle>
      <FontAwesomeIcon icon={faGoogle} />
    </SocialIconStyle>
    Google
  </GoogleLinkStyle>
);

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number
};

/**
 * Renders Google authentification link
 */
export const GoogleAuthentificationLinkComponent = (props: Props) => {
  const { tabIndex } = props;
  return (
    <GoogleAuthentificationComponent {...props} render={renderGoogleLogin(tabIndex)} />
  );
};
