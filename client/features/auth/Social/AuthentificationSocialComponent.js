// @flow
import * as React from 'react';
import { AuthentificationStyle } from './Styled';
import { FacebookAuthentificationButtonComponent } from './FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from './GoogleAuthentification/Button';

/**
 * Render the Facebook & Google Authentification components
 */
export const AuthentificationSocialComponent = () => {
  return (
    <AuthentificationStyle>
      <FacebookAuthentificationButtonComponent />
      <GoogleAuthentificationButtonComponent />
    </AuthentificationStyle>
  );
};
