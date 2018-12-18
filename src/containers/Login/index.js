/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import LoginComponent from 'Components/Login';
import { login } from 'Actions/authentification';
import { pannelShowRegister, pannelShowForgotPassword } from 'Actions/pannel';

type Props = {
  errors: Array<string>,
  isPannelOpen: boolean,
  handleRegisterPannel: Function,
  handleForgotPasswordPannel: Function,
  handleLogin: Function
}

type State = {
  email: string,
  password: string,
  passwordIsDisplayed: boolean
}

class LoginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordIsDisplayed: false
    };
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
        handleSubmit={this.handleSubmit}
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
