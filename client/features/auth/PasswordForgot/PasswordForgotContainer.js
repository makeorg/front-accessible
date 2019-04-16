/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { type ErrorObject } from 'Shared/types/form';
import { throttle } from 'Shared/helpers/throttle';
import { modalShowLogin } from 'Shared/store/actions/modal';
import * as UserService from 'Shared/services/User';
import { PasswordForgotComponent } from './PasswordForgotComponent';

type Props = {
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
};

type State = {
  /** User's email */
  email: string,
  /** Array with form errors */
  errors: ErrorObject[],
  /** Boolean toggled when Form is succesfully submitted */
  isSuccess: boolean,
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
      errors: [],
      isSuccess: false,
    };

    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = event => {
    const email = event.target.value;
    this.setState({
      email,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email } = this.state;
    if (email.trim() !== '') {
      try {
        await UserService.forgotPassword(email.trim());
        this.setState({ isSuccess: true });
      } catch (errors) {
        this.setState({ errors });
      }
    }
  };

  render() {
    const { email, errors, isSuccess } = this.state;
    const { handleLoginModal } = this.props;

    return (
      <PasswordForgotComponent
        email={email}
        errors={errors}
        isSuccess={isSuccess}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
        handleLoginModal={handleLoginModal}
      />
    );
  }
}

const mapStateToProps = state => {
  const { errors, isSuccess } = state;

  return {
    errors,
    isSuccess,
  };
};

const mapDispatchToProps = dispatch => ({
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
});

export const PasswordForgotContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordForgotHandler);
