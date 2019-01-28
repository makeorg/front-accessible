/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import type { ErrorObject } from 'Src/types/form';
import { throttle } from 'Shared/helpers/throttle';
import ForgotPasswordComponent from 'Src/components/ForgotPassword';
import { forgotPassword } from 'Shared/store/actions/forgotPassword';
import { pannelShowLogin } from 'Shared/store/actions/pannel';

type Props = {
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Boolean toggled when Form is succesfully submitted */
  isSuccess: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginPannel: Function,
  /** Method called to render ForgotPassword Component in Sliding Pannel */
  handleForgotpassword: Function
};

type State = {
  /** User's email */
  email: string
}

/**
 * Handles Forgot Password Business Logic
 */
class ForgotPasswordContainer extends React.Component<Props, State> {
  throttleSubmit: any = undefined

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.throttleSubmit = throttle(this.handleSubmit);
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
        handleSubmit={this.throttleSubmit}
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
