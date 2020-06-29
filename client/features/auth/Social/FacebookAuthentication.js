// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { loginSocial } from 'Shared/store/actions/authentication';
import { FACEBOOK_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { SvgFacebookLogo, SvgFacebookLogoF } from 'Client/ui/Svg/elements';
import {
  FacebookLinkStyle,
  SocialIconStyle,
} from 'Client/features/auth/Social/Styled/index';
import {
  IconWrapperStyle,
  FacebookButtonStyle,
} from 'Client/ui/Elements/Buttons/style';

type Props = {
  link?: boolean,
};

/**
 * Handles Facebook authentication
 */

export const FacebookAuthentication = ({ link }: Props) => {
  // setting facebook browser to true or false
  const [isFacebookBrowser, setFacebookBrowser] = useState(false);
  const dispatch = useDispatch();
  const handleFacebookLoginCallback = response => {
    dispatch(loginSocial(FACEBOOK_PROVIDER_ENUM, response.accessToken));
  };

  useEffect(() => {
    /** Dirty Hack to disable facebook connect in webview / FB browser due to unstable SDK methods
     *  https://developers.facebook.com/docs/facebook-login/best-practices/#avoidwebview
     */
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1) {
      setFacebookBrowser(true);
    }
  });

  if (!isFacebookBrowser) {
    return (
      <FacebookLogin
        appId="317128238675603"
        version="7.0"
        fields="name,email,picture"
        callback={handleFacebookLoginCallback}
        disableMobileRedirect
        render={renderProps =>
          link ? (
            <FacebookLinkStyle onClick={renderProps.onClick}>
              <SocialIconStyle>
                <SvgFacebookLogo />
              </SocialIconStyle>
              Facebook
            </FacebookLinkStyle>
          ) : (
            <FacebookButtonStyle onClick={renderProps.onClick}>
              <IconWrapperStyle>
                <SvgFacebookLogoF />
              </IconWrapperStyle>
              Facebook
            </FacebookButtonStyle>
          )
        }
      />
    );
  }
  return null;
};
