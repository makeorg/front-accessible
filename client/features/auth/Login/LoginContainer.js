/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import type { ErrorObject } from 'Shared/types/form';
import { throttle } from 'Shared/helpers/throttle';
import { login } from 'Shared/store/actions/authentification';
import {
  pannelShowRegister,
  pannelShowForgotPassword,
} from 'Shared/store/actions/pannel';
import { LoginComponent } from './LoginComponent';

type Props = {
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterPannel: () => void,
  /** Method called to render ForgotPassword Component in Sliding Pannel */
  handleForgotPasswordPannel: () => void,
  /** Method called to submit Login Form */
  handleLogin: (string, string) => void,
};

type State = {
  email: string,
  password: string,
};

/**
 * Handles Login Business Logic
 */
class LoginHandler extends React.Component<Props, State> {
  throttleSubmit: any = undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { handleLogin } = this.props;
    if (email && password) {
      handleLogin(email, password);
    }
  };

  render() {
    return (
      <LoginComponent
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { errors } = state.authentification;
  const { isPannelOpen } = state.pannel;

  return {
    errors,
    isPannelOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => {
    dispatch(login(email, password));
  },
  handleRegisterPannel: () => {
    dispatch(pannelShowRegister());
  },
  handleForgotPasswordPannel: () => {
    dispatch(pannelShowForgotPassword());
  },
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginHandler);
