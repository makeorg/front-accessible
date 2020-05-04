// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { GOOGLE_LOGIN_ID } from 'Shared/constants/config';
import { loginSocial } from 'Shared/store/actions/authentification';

/**
 * Handles Google authentification
 */
export const GoogleAuthentificationComponent = (props: any) => {
  const dispatch = useDispatch();

  /** Google login method callback */
  const handleGoogleLoginCallback = response => {
    dispatch(loginSocial(GOOGLE_PROVIDER_ENUM, response.tokenId));
  };

  const { render } = props;

  return (
    <GoogleLogin
      render={render}
      clientId={GOOGLE_LOGIN_ID}
      buttonText="Google"
      onSuccess={handleGoogleLoginCallback}
      onFailure={handleGoogleLoginCallback}
    />
  );
};
