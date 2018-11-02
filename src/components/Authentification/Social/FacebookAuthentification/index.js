import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FACEBOOK_PROVIDER_ENUM } from '../../../../api/UserService';
import { loginSocial } from '../../../../actions/authentification';

/**
 * FacebookAuthentificationContainer handle facebook authentification
 * @extends React
 */
class FacebookAuthentificationComponent extends React.Component {
  render() {
    const {
      handleTracking,
      handleFacebookLoginCallback,
      tabIndex
    } = this.props;

    return (
      <FacebookLogin
        {...this.props}
        appId="317128238675603"
        version="2.8"
        fields="name,email,picture"
        callback={handleFacebookLoginCallback}
        onClick={handleTracking}
        disableMobileRedirect
        tabIndex={tabIndex}
      />
    );
  }
}

const mapDispatchToProps = {
  handleFacebookLoginCallback: response => loginSocial(FACEBOOK_PROVIDER_ENUM, response.accessToken)
};

export default connect(null, mapDispatchToProps)(FacebookAuthentificationComponent);
