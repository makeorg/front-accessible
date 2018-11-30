/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/registration';
import RegisterComponent from '../../components/Register';
import { pannelShowLogin } from '../../actions/pannel';

type Props = {
  errors: Array<string>,
  isPannelOpen: boolean,
  handleLoginPannel: Function,
  handleRegister: Function
};

type State = {
  user: Object,
  passwordIsDisplayed: boolean
};

class RegisterContainer extends React.Component<Props, State> {
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
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [id]: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { user } = this.state;
    const { handleRegister } = this.props;

    if (user.email && user.password && user.firstname) {
      handleRegister(user);
    }
  }

  togglePasswordIsDisplayed = () => {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed
    }));
  }

  render() {
    const { user, passwordIsDisplayed } = this.state;
    const { errors, isPannelOpen, handleLoginPannel } = this.props;

    return (
      <RegisterComponent
        user={user}
        errors={errors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
        passwordIsDisplayed={passwordIsDisplayed}
        handleLoginPannel={handleLoginPannel}
        isPannelOpen={isPannelOpen}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { errors } = state.registration;
  const { isPannelOpen } = state.pannel;

  return {
    errors,
    isPannelOpen
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
