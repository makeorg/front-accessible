import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login';
import { login } from '../../actions/authentification';
import { showRegister } from '../../actions/pannel';

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
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
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
    }
  }

  showPassword(event) {
    event.preventDefault();
    const { passwordIsDisplayed } = this.state;

    this.setState({
      ...passwordIsDisplayed,
      passwordIsDisplayed: true
    });
  }

  hidePassword(event) {
    event.preventDefault();
    const { passwordIsDisplayed } = this.state;

    this.setState({
      ...passwordIsDisplayed,
      passwordIsDisplayed: false
    });
  }

  render() {
    const { email, password, passwordIsDisplayed } = this.state;
    const { handleRegisterPannel, errors } = this.props;
    return (
      <LoginComponent
        email={email}
        password={password}
        errors={errors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleRegisterPannel={handleRegisterPannel}
        showPassword={this.showPassword}
        hidePassword={this.hidePassword}
        passwordIsDisplayed={passwordIsDisplayed}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { errors } = state.authentification;

  return {
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => {
    dispatch(login(email, password));
  },
  handleRegisterPannel: () => {
    dispatch(showRegister());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
