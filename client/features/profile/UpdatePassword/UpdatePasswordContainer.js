import React, { Component } from 'react';
import { UpdatePasswordComponent } from './UpdatePasswordComponent';

type Props = {};
type State = {
  disableSubmit: boolean,
  password: string,
  newPassword: string,
};

export class UpdatePasswordContainer extends Component<Props, State> {
  state = { disableSubmit: true, password: '', newPassword: '' };

  formIsValid = (password, newPassword) => {
    return !!password && !!newPassword;
  };

  handlePassword = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const { newPassword } = this.state;
    this.setState({
      password: value,
      disableSubmit: !this.formIsValid(value, newPassword),
    });
  };

  handleNewPassword = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    const { password } = this.state;
    this.setState({
      newPassword: value,
      disableSubmit: !this.formIsValid(password, value),
    });
  };

  handleSubmit = () => {
    // TODO make API call
    console.log('TODO make API call'); // eslint-disable-line
  };

  render() {
    const { disableSubmit, password, newPassword } = this.state;
    return (
      <UpdatePasswordComponent
        handleNewPassword={this.handleNewPassword}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
        disableSubmit={disableSubmit}
        password={password}
        newPassword={newPassword}
      />
    );
  }
}
