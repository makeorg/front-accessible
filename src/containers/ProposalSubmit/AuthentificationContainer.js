import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitAuthentificationComponent from '../../components/ProposalSubmit/AuthentificationComponent';
import { pannelShowRegister, pannelShowLogin } from '../../actions/pannel';

export class ProposalSubmitAuthentification extends React.Component {
  render() {
    const { handleRegisterClick, handleLoginClick } = this.props;

    return (
      <ProposalSubmitAuthentificationComponent
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => { dispatch(pannelShowRegister()); },
  handleLoginClick: () => { dispatch(pannelShowLogin()); }
});

export default connect(null, mapDispatchToProps)(ProposalSubmitAuthentification);
