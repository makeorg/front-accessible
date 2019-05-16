import * as React from 'react';
import { connect } from 'react-redux';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { Tracking } from 'Shared/services/Tracking';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

type Props = {
  handleRegisterClick: () => void,
  /** Method called to render Register Component in Sliding Pannel */
  handleLoginClick: () => void,
};
/**
 * Handles Authentification Business Logic after Proposal Submit
 */
export class ProposalSubmitAuthentificationClass extends React.Component<Props> {
  componentDidMount() {
    Tracking.trackDisplayAuthentificationForm();
  }

  trackPersonnalDataLink = () => {
    Tracking.trackClickPersonnalDataLink();
  };

  render() {
    const { handleRegisterClick, handleLoginClick } = this.props;
    return (
      <ProposalSubmitAuthentificationComponent
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
        trackPersonnalDataLink={this.trackPersonnalDataLink}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => {
    dispatch(modalShowRegister());
  },
  handleLoginClick: () => {
    dispatch(modalShowLogin());
  },
});

export const ProposalSubmitAuthentificationContainer = connect(
  null,
  mapDispatchToProps
)(ProposalSubmitAuthentificationClass);
