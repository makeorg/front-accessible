import * as React from 'react';
import { connect } from 'react-redux';
import { type Question } from 'Shared/types/question';
import {
  pannelShowRegister,
  pannelShowLogin,
} from 'Shared/store/actions/pannel';
import { Tracking } from 'Shared/services/Tracking';
import { selectSequenceQuestion } from 'Shared/store/selectors/sequence.selector';
import { ProposalSubmitAuthentificationComponent } from './ProposalSubmitAuthentificationComponent';

type Props = {
  question: Question,
  isPannelOpen: boolean,
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
  const { isPannelOpen } = state.pannel;

  return {
    question: selectSequenceQuestion(state),
    isPannelOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => {
    dispatch(pannelShowRegister());
  },
  handleLoginClick: () => {
    dispatch(pannelShowLogin());
  },
});

export const ProposalSubmitAuthentificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalSubmitAuthentification);
