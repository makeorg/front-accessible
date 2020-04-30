// @flow
import * as React from 'react';
import { AuthenticationStyle } from './Styled';
import { FacebookAuthentication } from './FacebookAuthentication';
import { GoogleAuthentication } from './GoogleAuthentication';

/**
 * Render the Facebook & Google Authentication components
 */
export const AuthenticationSocialComponent = () => {
  return (
    <AuthenticationStyle>
      <FacebookAuthentication />
      <GoogleAuthentication />
    </AuthenticationStyle>
  );
};
