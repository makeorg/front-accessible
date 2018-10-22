import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login';
import { login } from '../../actions/authentification';
import { pannelShowRegister } from '../../actions/pannel';

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

  togglePasswordIsDisplayed() {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
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
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
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
    dispatch(pannelShowRegister());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
