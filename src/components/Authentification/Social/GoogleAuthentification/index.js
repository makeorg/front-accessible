import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { GOOGLE_PROVIDER_ENUM } from '../../../../api/UserService';
import { loginSocial } from '../../../../actions/authentification';

class GoogleAuthentificationComponent extends React.Component {
  render() {
    const { handleGoogleLoginCallback, tabIndex, handleTracking } = this.props;
    return (
      <GoogleLogin
        {...this.props}
        clientId="810331964280-qtdupbrjusihad3b5da51i5p66qpmhmr.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={handleGoogleLoginCallback}
        onFailure={handleGoogleLoginCallback}
        tabIndex={tabIndex}
        onRequest={handleTracking}
      />
    );
  }
}
const mapDispatchToProps = {
  handleGoogleLoginCallback: response => loginSocial(GOOGLE_PROVIDER_ENUM, response.tokenId)
};

export default connect(null, mapDispatchToProps)(GoogleAuthentificationComponent);
