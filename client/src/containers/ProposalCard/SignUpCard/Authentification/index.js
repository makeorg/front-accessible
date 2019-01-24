/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import SignUpCardAuthentificationComponent from 'Src/components/ProposalCard/SignUpCard/Authentification';
import { pannelShowRegister, pannelShowLogin } from 'Src/actions/pannel';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterClick: Function,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginClick: Function
}

/**
 * Handles Authentification Business Logic in Sign Up Card
 */
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
