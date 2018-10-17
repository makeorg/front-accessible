import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/registration';
import RegisterComponent from '../../components/Register';
import { showLogin } from '../../actions/pannel';

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        firstname: '',
        age: '',
        postalcode: '',
        profession: ''
      },
      passwordIsDisplayed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showPassword = this.showPassword.bind(this);
    this.hidePassword = this.hidePassword.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [id]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { user } = this.state;
    const { handleRegister } = this.props;

    if (user.email && user.password && user.firstname) {
      handleRegister(user);
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
    const { user, passwordIsDisplayed } = this.state;
    const { handleLoginPannel, errors } = this.props;

    return (
      <RegisterComponent
        user={user}
        errors={errors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        showPassword={this.showPassword}
        hidePassword={this.hidePassword}
        passwordIsDisplayed={passwordIsDisplayed}
        handleLoginPannel={handleLoginPannel}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { errors } = state.registration;

  return {
    errors
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegister: (user) => {
    dispatch(register(user));
  },
  handleLoginPannel: () => {
    dispatch(showLogin());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
