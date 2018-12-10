/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import ForgotPasswordComponent from 'Components/ForgotPassword';
import { forgotPassword } from 'Actions/forgotPassword';
import { pannelShowLogin } from 'Actions/pannel';

type Props = {
  errors: Array<string>,
  isSuccess: boolean,
  isPannelOpen: boolean,
  handleLoginPannel: Function,
  handleForgotpassword: Function
};

type State = {
  email: string
}

class ForgotPasswordContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const email = event.target.value;
    this.setState({
      email
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;
    const { handleForgotpassword } = this.props;
    if (email) {
      handleForgotpassword(email);
    }
  }

  render() {
    const { email } = this.state;
    const {
      errors,
      isSuccess,
      isPannelOpen,
      handleLoginPannel
    } = this.props;

    return (
      <ForgotPasswordComponent
        email={email}
        errors={errors}
        isSuccess={isSuccess}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLoginPannel={handleLoginPannel}
        isPannelOpen={isPannelOpen}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { errors, isSuccess } = state.forgotPassword;
  const { isPannelOpen } = state.pannel;

  return {
    errors,
    isSuccess,
    isPannelOpen
  };
};

const mapDispatchToProps = dispatch => ({
  handleForgotpassword: (email) => {
    dispatch(forgotPassword(email));
  },
  handleLoginPannel: () => {
    dispatch(pannelShowLogin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
