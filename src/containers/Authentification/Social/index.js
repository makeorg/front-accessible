import React from 'react';
import { connect } from 'react-redux';
import AuthentificationSocialComponent from 'Components/Authentification/Social';

class AuthentificationSocialContainer extends React.Component {
  render() {
    const { isPannelOpen, trackFacebookLogin, trackGoogleLogin } = this.props;
    return (
      <AuthentificationSocialComponent
        tabIndex={isPannelOpen ? 0 : -1}
        trackFacebookLogin={trackFacebookLogin}
        trackGoogleLogin={trackGoogleLogin}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;

  return {
    isPannelOpen
  };
};

export default connect(mapStateToProps)(AuthentificationSocialContainer);
