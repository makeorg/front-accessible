import React, { Component } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type Passwords, type PasswordsErrors } from 'Shared/types/user';
import { getUser } from 'Shared/store/actions/authentification';
import * as UserService from 'Shared/services/User';
import { modalShowForgotPassword } from 'Shared/store/actions/modal';
import { UpdatePasswordComponent } from './UpdatePasswordComponent';

const validateForm = ({ newPassword, actualPassword, hasPassword }) => {
  return {
    newPassword:
      !newPassword || newPassword.trim().length === 0
        ? i18n.t('common.form.required_field')
        : false,
    actualPassword:
      hasPassword && (!actualPassword || actualPassword.trim().length === 0)
        ? i18n.t('common.form.required_field')
        : false,
  };
};

const checkFormIsValid = (errors: PasswordsErrors) =>
  Object.values(errors).reduce((sum, next) => sum && !next, true);

type Props = {
  userId: string,
  hasPassword: boolean,
};
type State = {
  passwords: Passwords,
  errors: PasswordsErrors,
  submitDone: boolean,
};

class UpdatePasswordHandler extends Component<Props, State> {
  state = {
    passwords: {
      newPassword: '',
      actualPassword: '',
    },
    errors: {
      newPassword: false,
      actualPassword: false,
    },
    formIsValid: false,
    submitDone: false,
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const { hasPassword } = this.props;
    this.setState(prevState => {
      const passwords = {
        ...prevState.passwords,
        [id]: value,
      };

      const errors = validateForm({
        newPassword: passwords.newPassword,
        actualPassword: passwords.actualPassword,
        hasPassword,
      });

      const formIsValid = checkFormIsValid(errors);

      return {
        passwords,
        formIsValid,
      };
    });
  };

  handleSubmit = async (event: SyntheticInputEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { passwords } = this.state;
    const { newPassword, actualPassword } = passwords;
    const { userId, hasPassword, handleGetUser } = this.props;
    const errors = validateForm({
      newPassword,
      actualPassword,
      hasPassword,
    });
    const formIsValid = checkFormIsValid(errors);

    this.setState(prevState => ({
      ...prevState,
      formIsValid,
      errors,
      submitDone: false,
    }));

    if (formIsValid) {
      try {
        await UserService.updatePassword(userId, passwords, hasPassword);
        this.setState({
          submitDone: true,
          passwords: {
            newPassword: '',
            actualPassword: '',
          },
          errors: {
            newPassword: false,
            actualPassword: false,
          },
          formIsValid: false,
        });
        handleGetUser();
      } catch (exceptions) {
        const actualPasswordApiError = exceptions.find(
          exception => exception.field === 'password'
        );
        const newPasswordApiError = exceptions.find(
          exception => exception.field === 'newPassword'
        );

        const actualPasswordError = actualPasswordApiError ? true : '';
        const newPasswordError = newPasswordApiError
          ? i18n.t(`common.form.${newPasswordApiError.message}`)
          : '';
        this.setState({
          errors: {
            newPassword: newPasswordError,
            actualPassword: actualPasswordError,
          },
          formIsValid: false,
        });
      }
    }
  };

  render() {
    const { hasPassword, handleForgotPasswordModal } = this.props;
    const { passwords, errors, formIsValid, submitDone } = this.state;

    return (
      <UpdatePasswordComponent
        passwords={passwords}
        errors={errors}
        hasPassword={hasPassword}
        formIsValid={formIsValid}
        submitDone={submitDone}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleForgotPasswordModal={handleForgotPasswordModal}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleGetUser: () => {
    dispatch(getUser());
  },
  handleForgotPasswordModal: () => {
    dispatch(modalShowForgotPassword());
  },
});

export const UpdatePasswordContainer = connect(
  null,
  mapDispatchToProps
)(UpdatePasswordHandler);
