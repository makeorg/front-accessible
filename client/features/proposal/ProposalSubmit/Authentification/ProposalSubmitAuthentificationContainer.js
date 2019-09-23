import * as React from 'react';
import { connect } from 'react-redux';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import {
  trackDisplayAuthentificationForm,
  trackClickPersonnalDataLink,
} from 'Shared/services/Tracking';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

type Props = {
  country: string,
  language: string,
  handleRegisterClick: () => void,
  /** Method called to render Register Component in Sliding Pannel */
  handleLoginClick: () => void,
};
/**
 * Handles Authentification Business Logic after Proposal Submit
 */
export class ProposalSubmitAuthentificationClass extends React.Component<Props> {
  componentDidMount() {
    trackDisplayAuthentificationForm();
  }

  render() {
    const {
      country,
      language,
      handleRegisterClick,
      handleLoginClick,
    } = this.props;
    return (
      <ProposalSubmitAuthentificationComponent
        country={country}
        language={language}
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
        trackPersonnalDataLink={() => trackClickPersonnalDataLink()}
      />
    );
  }
}

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => {
    dispatch(modalShowRegister());
  },
  handleLoginClick: () => {
    dispatch(modalShowLogin());
  },
});

export const ProposalSubmitAuthentificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalSubmitAuthentificationClass);
