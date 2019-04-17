import React, { Component } from 'react';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { DeleteAccountComponent } from './DeleteAccountComponent';

export type TypeDeletePassword = {
  password?: string,
  email?: string,
};

type Props = {
  user: TypeUser,
  handleLogout: () => void,
};
type State = {
  values: TypeDeletePassword,
  formIsValid: boolean,
  submitDone: boolean,
  submitError: boolean,
};

const isFormValid = (password: string) => {
  return !!password;
};

export class DeleteAccountContainer extends Component<Props, State> {
  state = {
    values: {
      password: '',
      email: '',
    },
    formIsValid: false,
    submitDone: false,
    submitError: false,
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState(prevState => {
      const values = {
        ...prevState.values,
        [name]: value,
      };

      return {
        values,
        formIsValid: isFormValid(values),
      };
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { values } = this.state;
    const { user, handleLogout } = this.props;

    if (
      user.hasPassword ||
      (!user.hasPassword && values.email === user.email)
    ) {
      try {
        const password = values.password !== '' ? values.password : null;
        await UserService.deleteAccount(user.userId, password);
        this.setState({ submitDone: true, formIsValid: false });
        handleLogout();
      } catch {
        this.setState({ submitError: true, formIsValid: false });
      }
    } else {
      this.setState({ submitError: true, formIsValid: false });
    }
  };

  render() {
    const { values, submitDone, submitError, formIsValid } = this.state;
    const { user } = this.props;
    return (
      <DeleteAccountComponent
        hasPassword={user.hasPassword}
        values={values}
        formIsValid={formIsValid}
        submitDone={submitDone}
        submitError={submitError}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
