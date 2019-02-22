/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';

import { passwordRecovery } from 'Shared/store/actions/user/passwordRecovery';
import { throttle } from 'Shared/helpers/throttle';
import { PasswordRecoveryComponent } from './PasswordRecoveryComponent';

type Props = {
  /** Boolean to check if form contain errors */
  error: boolean,
  /** Error message to display to the user */
  errorMessage: string,
  /** Boolean toggled when Form is succesfully submitted */
  updated: boolean,
  /** Function to dispatch form submit */
  handleSubmitForm: (password: string) => void,
};

type State = {
  /** User's email */
  password: string,
  /** show the password as text or not */
  passwordIsDisplayed: boolean,
};

/**
 * Handles Password Recovery Business Logic
 */
class PasswordRecovery extends React.Component<Props, State> {
  throttleSubmit: any = undefined;

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordIsDisplayed: false,
    };
    this.throttleSubmit = throttle(this.handleSubmit);
  }

  togglePasswordIsDisplayed = () => {
    this.setState(prevstate => ({
      passwordIsDisplayed: !prevstate.passwordIsDisplayed,
    }));
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const password = event.target.value;
    this.setState({
      password,
    });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { password } = this.state;
    const { handleSubmitForm } = this.props;
    if (password) {
      handleSubmitForm(password);
    }
  };

  render() {
    const { password, passwordIsDisplayed } = this.state;
    const { error, errorMessage, updated } = this.props;

    return (
      <PasswordRecoveryComponent
        password={password}
        passwordIsDisplayed={passwordIsDisplayed}
        error={error}
        errorMessage={errorMessage}
        updated={updated}
        togglePasswordIsDisplayed={this.togglePasswordIsDisplayed}
        handleChange={this.handleChange}
        handleSubmit={this.throttleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  const { error, errorMessage, updated } = state.user.passwordRecovery;

  return { error, errorMessage, updated };
};

const mapDispatchToProps = dispatch => ({
  handleSubmitForm: password => {
    dispatch(passwordRecovery(password));
  },
});

export const PasswordRecoveryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordRecovery);
