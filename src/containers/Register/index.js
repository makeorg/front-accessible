/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/registration';
import RegisterComponent from '../../components/Register';
import { pannelShowLogin } from '../../actions/pannel';
import Tracking from '../../services/Tracking';

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
      Tracking.trackClickFormRegister();
    }
  }

  togglePasswordIsDisplayed = () => {
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

  trackFacebookSignUpLink = () => {
    Tracking.trackFacebookSignUpLink();
    return this;
  }

  trackGoogleSignUpLink = () => {
    Tracking.trackGoogleSignUpLink();
    return this;
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
        trackFacebookSignUpLink={this.trackFacebookSignUpLink}
        trackGoogleSignUpLink={this.trackGoogleSignUpLink}
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
