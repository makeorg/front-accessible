// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { GOOGLE_LOGIN_ID } from 'Shared/constants/config';
import { loginSocial } from 'Shared/store/actions/authentication';
import { SvgGoogleLogoG } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { GoogleButtonStyle } from './style';

/**
 * Handles Google authentication
 */
export const GoogleAuthentication = () => {
  const dispatch = useDispatch();

  /** Google login method callback */
  const handleGoogleLoginCallback = response => {
    dispatch(loginSocial(GOOGLE_PROVIDER_ENUM, response.accessToken));
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_LOGIN_ID}
      scope="https://www.googleapis.com/auth/user.birthday.read"
      buttonText="Google"
      onSuccess={handleGoogleLoginCallback}
      onFailure={handleGoogleLoginCallback}
      render={renderProps => (
        <GoogleButtonStyle onClick={renderProps.onClick} type="button">
          <SvgGoogleLogoG aria-hidden focusable="false" />
          <ScreenReaderItemStyle>Google</ScreenReaderItemStyle>
        </GoogleButtonStyle>
      )}
    />
  );
};
