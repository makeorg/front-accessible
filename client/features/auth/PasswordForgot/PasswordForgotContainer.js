/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { type ErrorObject } from 'Shared/types/form';
import { throttle } from 'Shared/helpers/throttle';
import { forgotPassword } from 'Shared/store/actions/forgotPassword';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { PasswordForgotComponent } from './PasswordForgotComponent';

type Props = {
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Boolean toggled when Form is succesfully submitted */
  isSuccess: boolean,
  /** Boolean toggled when Modalis opened / closed */
  isModalOpen: boolean,
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
  /** Method called to render ForgotPassword Component in Modal */
  handleForgotpassword: (email: string) => void,
};

type State = {
  /** User's email */
  email: string,
};

/**
 * Handles Forgot Password Business Logic
 */
class PasswordForgotHandler extends React.Component<Props, State> {
  throttleSubmit: any = undefined;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = event => {
    const email = event.target.value;
    this.setState({
      email,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email } = this.state;
    const { handleForgotpassword } = this.props;
    if (email) {
      handleForgotpassword(email);
    }
  };

  render() {
    const { email } = this.state;
    const { errors, isSuccess, isModalOpen, handleLoginModal } = this.props;

    return (
      <PasswordForgotComponent
        email={email}
        errors={errors}
        isSuccess={isSuccess}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
        handleLoginModal={handleLoginModal}
        isModalOpen={isModalOpen}
      />
    );
  }
}

const mapStateToProps = state => {
  const { errors, isSuccess } = state.forgotPassword;
  const { isModalOpen } = state.modal;

  return {
    errors,
    isSuccess,
    isModalOpen,
  };
};

const mapDispatchToProps = dispatch => ({
  handleForgotpassword: email => {
    dispatch(forgotPassword(email));
  },
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
});

export const PasswordForgotContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordForgotHandler);
