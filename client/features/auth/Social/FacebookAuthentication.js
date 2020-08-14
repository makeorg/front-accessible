// @flow
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { loginSocial } from 'Shared/store/actions/authentication';
import { FACEBOOK_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { FacebookPlainIconStyle } from 'Client/ui/Elements/Buttons/style';
import { SvgFacebookLogoF } from 'Client/ui/Svg/elements';
import { FacebookLinkStyle, FacebookButtonStyle } from './style';

type Props = {
  link?: boolean,
};

/**
 * Handles Facebook authentication
 */

export const FacebookAuthentication = ({ link }: Props) => {
  // setting facebook browser to true or false
  const [isFacebookBrowser, setFacebookBrowser] = useState(false);
  const { language } = useSelector((state: StateRoot) => state.appConfig);
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
        fields="name,email,picture,birthday"
        callback={handleFacebookLoginCallback}
        language={language}
        disableMobileRedirect
        render={renderProps =>
          link ? (
            <FacebookLinkStyle onClick={renderProps.onClick}>
              <FacebookPlainIconStyle aria-hidden />
              Facebook
            </FacebookLinkStyle>
          ) : (
            <FacebookButtonStyle onClick={renderProps.onClick}>
              <SvgFacebookLogoF aria-label="Facebook" />
            </FacebookButtonStyle>
          )
        }
      />
    );
  }
  return null;
};
