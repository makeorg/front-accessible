/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import {
  pannelShowRegister,
  pannelShowLogin,
} from 'Shared/store/actions/pannel';
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
    dispatch(pannelShowRegister());
  },
  handleLoginClick: () => {
    dispatch(pannelShowLogin());
  },
});

export const SignUpCardAuthentificationContainer = connect(
  null,
  mapDispatchToProps
)(SignUpCardAuthentification);
