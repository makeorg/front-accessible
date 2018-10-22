import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/registration';
import RegisterComponent from '../../components/Register';
import { pannelShowLogin } from '../../actions/pannel';

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
    this.togglePasswordIsDisplayed = this.togglePasswordIsDisplayed.bind(this);
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

  togglePasswordIsDisplayed() {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
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
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
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
    dispatch(pannelShowLogin());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
