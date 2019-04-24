// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from 'Shared/api/UserApiService';
import { loginSocial } from 'Shared/store/actions/authentification';

type Props = {
  /** Google login method callback */
  handleGoogleLoginCallback: Function,
};

/**
 * Handles Google authentification
 */
class GoogleAuthentification extends React.Component<Props> {
  render() {
    const { handleGoogleLoginCallback } = this.props;
    return (
      <GoogleLogin
        {...this.props}
        clientId="810331964280-qtdupbrjusihad3b5da51i5p66qpmhmr.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={handleGoogleLoginCallback}
        onFailure={handleGoogleLoginCallback}
      />
    );
  }
}

const mapDispatchToProps = {
  handleGoogleLoginCallback: response =>
    loginSocial(GOOGLE_PROVIDER_ENUM, response.tokenId),
};

export const GoogleAuthentificationComponent = connect(
  null,
  mapDispatchToProps
)(GoogleAuthentification);
