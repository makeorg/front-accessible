// @flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { GOOGLE_LOGIN_ID } from 'Shared/constants/config';
import { SvgGoogleLogoG } from 'Client/ui/Svg/elements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { UserService } from 'Shared/services/User';
import {
  modalClose,
  modalShowDataPolicySocial,
} from 'Shared/store/actions/modal';
import { trackAuthenticationSocialFailure } from 'Shared/services/Tracking';

import {
  loginSocialSuccess,
  getUser,
} from 'Shared/store/actions/authentication';
import { GoogleButtonStyle } from './style';
/**
 * Handles Google authentication
 */
export const GoogleAuthentication = () => {
  const dispatch = useDispatch();
  const { privacyPolicy } = useSelector((state: StateRoot) => state.appConfig);
  /** Google login method callback */
  const handleGoogleLoginCallback = response => {
    const success = () => {
      dispatch(loginSocialSuccess());
      dispatch(getUser());
    };

    const handleErrors = () => {
      trackAuthenticationSocialFailure();
    };
    const unexpectedError = () => dispatch(modalClose());

    UserService.checkSocialPrivacyPolicy(
      GOOGLE_PROVIDER_ENUM,
      response.accessToken,
      privacyPolicy,
      () =>
        dispatch(
          modalShowDataPolicySocial(GOOGLE_PROVIDER_ENUM, response.accessToken)
        ),
      success,
      handleErrors,
      unexpectedError
    );
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
