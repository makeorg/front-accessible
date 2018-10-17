import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login';
import { login } from '../../actions/authentification';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const { email, password } = this.state;
    const { errors } = this.props;
    return (
      <LoginComponent
        email={email}
        password={password}
        errors={errors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
