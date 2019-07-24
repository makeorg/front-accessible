import React, { Component } from 'react';
import * as UserService from 'Shared/services/User';
import { type TypeUser } from 'Shared/types/user';
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

const userCanSubmit = (values: TypeDeletePassword, user: TypeUser) => {
  if (user.hasPassword) {
    return values.password !== '';
  }

  return values.email !== '';
};

const formIsValid = (values: TypeDeletePassword, user: TypeUser) => {
  if (user.hasPassword) {
    return values.password !== '';
  }

  return values.email === user.email;
};

export class DeleteAccountContainer extends Component<Props, State> {
  state = {
    values: {
      password: '',
      email: '',
    },
    canSubmit: false,
    submitDone: false,
    submitError: false,
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const { user } = this.props;

    this.setState(prevState => {
      const values = {
        ...prevState.values,
        [name]: value,
      };

      return {
        values,
        canSubmit: userCanSubmit(values, user),
      };
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { values } = this.state;
    const { user, handleLogout } = this.props;
    const isValid = formIsValid(values, user);

    if (isValid) {
      try {
        const password = values.password !== '' ? values.password : null;
        await UserService.deleteAccount(user.userId, password);
        this.setState({ submitDone: true, canSubmit: false });
        handleLogout();
      } catch {
        this.setState({ submitError: true, canSubmit: false });
      }
    } else {
      this.setState({ submitError: true, canSubmit: false });
    }
  };

  render() {
    const { values, submitDone, submitError, canSubmit } = this.state;
    const { user } = this.props;
    return (
      <DeleteAccountComponent
        hasPassword={user.hasPassword}
        values={values}
        canSubmit={canSubmit}
        submitDone={submitDone}
        submitError={submitError}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
