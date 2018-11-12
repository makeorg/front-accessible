import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitAuthentificationComponent from '../../../components/ProposalSubmit/Authentification';
import { pannelShowRegister, pannelShowLogin } from '../../../actions/pannel';
import Tracking from '../../../services/Tracking';

export class ProposalSubmitAuthentification extends React.Component {
  constructor(props) {
    super(props);
    this.trackFacebookSignUpButton = this.trackFacebookSignUpButton.bind(this);
    this.trackGoogleSignUpButton = this.trackGoogleSignUpButton.bind(this);
    this.trackPersonnalDataLink = this.trackPersonnalDataLink.bind(this);
  }

  componentDidMount() {
    Tracking.trackDisplayProposalSubmitAuthentification();
  }

  trackFacebookSignUpButton() {
    Tracking.trackFacebookSignUpButton();
    return this;
  }

  trackGoogleSignUpButton() {
    Tracking.trackGoogleSignUpButton();
    return this;
  }

  trackPersonnalDataLink() {
    Tracking.trackClickPersonnalDataLink();
    return this;
  }

  render() {
    const { isPannelOpen, handleRegisterClick, handleLoginClick } = this.props;

    return (
      <ProposalSubmitAuthentificationComponent
        isPannelOpen={isPannelOpen}
        trackFacebookSignUpButton={this.trackFacebookSignUpButton}
        trackGoogleSignUpButton={this.trackGoogleSignUpButton}
        trackPersonnalDataLink={this.trackPersonnalDataLink}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    isPannelOpen
  } = state.pannel;

  return {
    isPannelOpen
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => { dispatch(pannelShowRegister()); },
  handleLoginClick: () => { dispatch(pannelShowLogin()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProposalSubmitAuthentification);
