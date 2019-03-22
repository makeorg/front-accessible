import * as React from 'react';
import { connect } from 'react-redux';
import { type Question } from 'Shared/types/question';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { Tracking } from 'Shared/services/Tracking';
import { selectSequenceQuestion } from 'Shared/store/selectors/sequence.selector';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

type Props = {
  question: Question,
  isModalOpen: boolean,
  handleRegisterClick: () => void,
  handleLoginClick: () => void,
};
/**
 * Handles Authentification Business Logic after Proposal Submit
 */
export class ProposalSubmitAuthentification extends React.Component<Props> {
  componentDidMount() {
    Tracking.trackDisplayAuthentificationForm();
  }

  trackPersonnalDataLink = () => {
    Tracking.trackClickPersonnalDataLink();
  };

  render() {
    return (
      <ProposalSubmitAuthentificationComponent
        {...this.props}
        trackPersonnalDataLink={this.trackPersonnalDataLink}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isModalOpen } = state.modal;

  return {
    question: selectSequenceQuestion(state),
    isModalOpen,
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
)(ProposalSubmitAuthentification);
