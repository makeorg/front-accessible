import React, { Component } from 'react';
import * as UserService from 'Shared/services/User';
import { DeleteAccountComponent } from './DeleteAccountComponent';

type Props = {
  userId: string,
  handleLogout: () => void,
};
type State = {
  password: string,
  formIsValid: boolean,
  submitDone: boolean,
  submitError: boolean,
};

const isFormValid = (password: string) => {
  return !!password;
};

export class DeleteAccountContainer extends Component<Props, State> {
  state = {
    password: '',
    formIsValid: false,
    submitDone: false,
    submitError: false,
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      password: value,
      formIsValid: isFormValid(value),
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { password } = this.state;
    const { userId, handleLogout } = this.props;
    try {
      await UserService.deleteAccount(password, userId);
      this.setState({ submitDone: true, formIsValid: false });
      handleLogout();
    } catch {
      this.setState({ submitError: true, formIsValid: false });
    }
  };

  render() {
    const { password, submitDone, submitError, formIsValid } = this.state;
    return (
      <DeleteAccountComponent
        password={password}
        formIsValid={formIsValid}
        submitDone={submitDone}
        submitError={submitError}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
