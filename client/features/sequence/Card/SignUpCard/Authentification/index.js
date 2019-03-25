/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import { SignUpCardAuthentificationComponent } from './SignUpCardAuthentificationComponent';

type Props = {
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterClick: Function,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginClick: Function,
};

/**
 * Handles Authentification Business Logic in Sign Up Card
 */
const SignUpCardAuthentification = (props: Props) => (
  <SignUpCardAuthentificationComponent {...props} />
);

const mapDispatchToProps = dispatch => ({
  handleRegisterClick: () => {
    dispatch(modalShowRegister());
  },
  handleLoginClick: () => {
    dispatch(modalShowLogin());
  },
});

export const SignUpCardAuthentificationContainer = connect(
  null,
  mapDispatchToProps
)(SignUpCardAuthentification);
