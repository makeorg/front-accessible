import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitAuthentificationComponent from '../../../components/ProposalSubmit/Authentification';
import { pannelShowRegister, pannelShowLogin } from '../../../actions/pannel';

export class ProposalSubmitAuthentification extends React.Component {
  render() {
    const { handleRegisterClick, handleLoginClick, isPannelOpen } = this.props;

    return (
      <ProposalSubmitAuthentificationComponent
        handleRegisterClick={handleRegisterClick}
        handleLoginClick={handleLoginClick}
        isPannelOpen={isPannelOpen}
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
