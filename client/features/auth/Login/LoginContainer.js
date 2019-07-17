/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { type TypeErrorObject } from 'Shared/types/api';
import { throttle } from 'Shared/helpers/throttle';
import { login } from 'Shared/store/actions/authentification';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import {
  modalShowRegister,
  modalShowForgotPassword,
} from 'Shared/store/actions/modal';
import { LoginComponent } from './LoginComponent';

type Props = {
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called to render Register Component in Modal */
  handleRegisterModal: () => void,
  /** Method called to render ForgotPassword Component in Modal */
  handleForgotPasswordModal: () => void,
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
  const { errors } = selectAuthentification(state);

  return { errors };
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => {
    dispatch(login(email, password));
  },
  handleRegisterModal: () => {
    dispatch(modalShowRegister());
  },
  handleForgotPasswordModal: () => {
    dispatch(modalShowForgotPassword());
  },
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginHandler);
