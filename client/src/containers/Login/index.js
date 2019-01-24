/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import type { ErrorObject } from 'Src/types/form';
import { throttle } from 'Shared/helpers/throttle';
import LoginComponent from 'Src/components/Login';
import { login } from 'Src/actions/authentification';
import { pannelShowRegister, pannelShowForgotPassword } from 'Src/actions/pannel';

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
  handleLogin: (string, string) => void
}

type State = {
  email: string,
  password: string,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean
}

/**
 * Handles Login Business Logic
 */
class LoginContainer extends React.Component<Props, State> {
  throttleSubmit: any = undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordIsDisplayed: false
    };

    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { handleLogin } = this.props;
    if (email && password) {
      handleLogin(email, password);
    }
  }

  togglePasswordIsDisplayed = () => {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
  }

  render() {
    const { email, password, passwordIsDisplayed } = this.state;
    const {
      errors,
      isPannelOpen,
      handleRegisterPannel,
      handleForgotPasswordPannel
    } = this.props;

    return (
      <LoginComponent
        email={email}
        password={password}
        errors={errors}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
        passwordIsDisplayed={passwordIsDisplayed}
        handleRegisterPannel={handleRegisterPannel}
        handleForgotPasswordPannel={handleForgotPasswordPannel}
        isPannelOpen={isPannelOpen}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { errors } = state.authentification;
  const { isPannelOpen } = state.pannel;

  return {
    errors,
    isPannelOpen
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
