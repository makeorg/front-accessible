import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login';
import { login } from '../../actions/authentification';
import { pannelShowRegister, pannelShowForgotPassword } from '../../actions/pannel';
import Tracking from '../../services/Tracking';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordIsDisplayed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePasswordIsDisplayed = this.togglePasswordIsDisplayed.bind(this);
    this.trackFacebookLogin = this.trackFacebookLogin.bind(this);
    this.trackGoogleLogin = this.trackGoogleLogin.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;
    const { handleLogin } = this.props;
    if (email && password) {
      handleLogin(email, password);
      Tracking.trackClickFormLogin();
    }
  }

  togglePasswordIsDisplayed() {
    const { passwordIsDisplayed } = this.state;
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
    if (!passwordIsDisplayed) {
      Tracking.trackDisplayPassword();
    } else {
      Tracking.trackHidePassword();
    }
  }

  trackFacebookLogin() {
    Tracking.trackFacebookLogin();
    return this;
  }

  trackGoogleLogin() {
    Tracking.trackGoogleLogin();
    return this;
  }

  render() {
    const { email, password, passwordIsDisplayed } = this.state;
    const {
      handleRegisterPannel,
      handleForgotPasswordPannel,
      errors,
      isPannelOpen
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
        trackFacebookLogin={this.trackFacebookLogin}
        trackGoogleLogin={this.trackGoogleLogin}
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
