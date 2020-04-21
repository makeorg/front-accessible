import * as React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { loginSocial } from 'Shared/store/actions/authentification';
import { FACEBOOK_PROVIDER_ENUM } from 'Shared/api/UserApiService';

type Props = {
  /** Facebook login method callback */
  handleFacebookLoginCallback: Function,
};

type State = {
  isFacebookBrowser: boolean,
};

/**
 * Handles Facebook authentification
 */
class FacebookAuthentification extends React.Component<Props, State> {
  state = {
    isFacebookBrowser: false,
  };

  /** Dirty Hack to disable facebook connect in webview / FB browser due to unstable SDK methods
   *  https://developers.facebook.com/docs/facebook-login/best-practices/#avoidwebview
   */
  componentDidMount() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1) {
      this.setState({ isFacebookBrowser: true });
    }
  }

  render() {
    const { handleFacebookLoginCallback } = this.props;

    const { isFacebookBrowser } = this.state;

    if (!isFacebookBrowser) {
      return (
        <FacebookLogin
          {...this.props}
          appId="317128238675603"
          version="6.0"
          fields="name,email,picture"
          callback={handleFacebookLoginCallback}
          disableMobileRedirect
        />
      );
    }

    return null;
  }
}

const mapDispatchToProps = {
  handleFacebookLoginCallback: response =>
    loginSocial(FACEBOOK_PROVIDER_ENUM, response.accessToken),
};

export const FacebookAuthentificationComponent = connect(
  null,
  mapDispatchToProps
)(FacebookAuthentification);
