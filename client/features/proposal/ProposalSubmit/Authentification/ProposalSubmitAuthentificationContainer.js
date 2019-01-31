import * as React from 'react';
import { connect } from 'react-redux';
import { pannelShowRegister, pannelShowLogin } from 'Shared/store/actions/pannel';
import Tracking from 'Shared/services/Tracking';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

/**
 * Handles Authentification Business Logic after Proposal Submit
 */
export class ProposalSubmitAuthentification extends React.Component {
  constructor(props) {
    super(props);
    this.trackPersonnalDataLink = this.trackPersonnalDataLink.bind(this);
  }

  componentDidMount() {
    Tracking.trackDisplayAuthentificationForm();
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

export const ProposalSubmitAuthentificationContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ProposalSubmitAuthentification);
