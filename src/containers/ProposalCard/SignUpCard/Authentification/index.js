/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import SignUpCardAuthentificationComponent from 'Components/ProposalCard/SignUpCard/Authentification';
import { pannelShowRegister, pannelShowLogin } from 'Actions/pannel';

type Props = {
  tabIndex: number,
  handleRegisterClick: Function,
  handleLoginClick: Function
}

const SignUpCardAuthentification = (props: Props) => (
  <SignUpCardAuthentificationComponent {...props} />
);

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => {
    dispatch(pannelShowRegister());
  },
  handleLoginClick: () => {
    dispatch(pannelShowLogin());
  }
});

export default connect(null, mapDispatchToProps)(SignUpCardAuthentification);
