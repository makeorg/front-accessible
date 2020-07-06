// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { GOOGLE_LOGIN_ID } from 'Shared/constants/config';
import { loginSocial } from 'Shared/store/actions/authentication';
import {
  GoogleButtonStyle,
  GoogleIconStyle,
} from 'Client/ui/Elements/Buttons/style';
import { GoogleLinkStyle } from './Styled';

type Props = {
  link?: boolean,
};

/**
 * Handles Google authentication
 */
export const GoogleAuthentication = ({ link }: Props) => {
  const dispatch = useDispatch();

  /** Google login method callback */
  const handleGoogleLoginCallback = response => {
    dispatch(loginSocial(GOOGLE_PROVIDER_ENUM, response.tokenId));
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_LOGIN_ID}
      buttonText="Google"
      onSuccess={handleGoogleLoginCallback}
      onFailure={handleGoogleLoginCallback}
      render={renderProps =>
        link ? (
          <GoogleLinkStyle onClick={renderProps.onClick}>
            <GoogleIconStyle aria-hidden />
            Google
          </GoogleLinkStyle>
        ) : (
          <GoogleButtonStyle onClick={renderProps.onClick}>
            <GoogleIconStyle aria-hidden />
            Google
          </GoogleButtonStyle>
        )
      }
    />
  );
};
