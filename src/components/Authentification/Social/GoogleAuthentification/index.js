// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Api/UserService';
import { loginSocial } from 'Actions/authentification';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Google login method callback */
  handleGoogleLoginCallback: Function
}

/**
 * Handles Google authentification
 */
class GoogleAuthentificationComponent extends React.Component<Props> {
  render() {
    const { handleGoogleLoginCallback, tabIndex } = this.props;
    return (
      <GoogleLogin
        {...this.props}
        clientId="810331964280-qtdupbrjusihad3b5da51i5p66qpmhmr.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={handleGoogleLoginCallback}
        onFailure={handleGoogleLoginCallback}
        tabIndex={tabIndex}
      />
    );
  }
}

const mapDispatchToProps = {
  handleGoogleLoginCallback: response => loginSocial(GOOGLE_PROVIDER_ENUM, response.tokenId)
};

export default connect(null, mapDispatchToProps)(GoogleAuthentificationComponent);
