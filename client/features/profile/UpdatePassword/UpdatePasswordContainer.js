import React, { Component } from 'react';
import { Passwords } from 'Shared/types/user';
import { UpdatePasswordComponent } from './UpdatePasswordComponent';

type Props = {};
type State = {
  formIsValid: boolean,
  passwords: Passwords,
};

export class UpdatePasswordContainer extends Component<Props, State> {
  state = {
    formIsValid: false,
    passwords: {
      newPassword: '',
      oldPassword: '',
    },
  };

  formIsValid = (passwords: Passwords) => {
    return !!passwords.newPassword && !!passwords.oldPassword;
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    this.setState(prevState => {
      const passwords = {
        ...prevState.passwords,
        [id]: value,
      };

      return {
        passwords,
        formIsValid: this.formIsValid(passwords),
      };
    });
  };

  handleSubmit = () => {
    // TODO make API call
    console.log('TODO make API call'); // eslint-disable-line
  };

  render() {
    const { formIsValid, passwords } = this.state;
    return (
      <UpdatePasswordComponent
        passwords={passwords}
        formIsValid={formIsValid}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
