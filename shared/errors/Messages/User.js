// @flow
import React from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { i18n } from 'Shared/i18n';
import {
  MessageWithDynamicLabel,
  LoginErrorMessage,
} from 'Client/ui/Elements/Form/Errors/Message';
import { ErrorMessageForgotPassword } from 'Client/ui/Elements/Form/Errors/Message/Password';

export const loginErrors: TypeErrorObject[] = [
  {
    field: 'global',
    key: 'invalid',
    message: <LoginErrorMessage />,
  },
];

export const registerErrors: TypeErrorObject[] = [
  {
    field: 'email',
    key: 'already_registered',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.already_registered"
        field="email"
        labelKey="common.form.label.email"
      />
    ),
  },
  {
    field: 'email',
    key: 'invalid_email',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_email"
        field="email"
        labelKey="common.form.label.email"
      />
    ),
  },
  {
    field: 'password',
    key: 'invalid_password',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_password"
        field="password"
        labelKey="common.form.label.password"
      />
    ),
  },
  {
    field: 'firstname',
    key: 'mandatory',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.firstname_is_mandatory"
        field="firstname"
        labelKey="common.form.label.firstname"
      />
    ),
  },
  {
    field: 'dateofbirth',
    key: 'invalid_age',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_age"
        field="age"
        labelKey="common.form.label.age"
      />
    ),
  },
  {
    field: 'postalcode',
    key: 'invalid_postal_code',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_postal_code"
        field="postalcode"
        labelKey="common.form.label.postalcode"
      />
    ),
  },
];

export const updateUserErrors: TypeErrorObject[] = [
  {
    field: 'firstname',
    key: 'mandatory',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.mandatory"
        field="firstName"
        labelKey="common.form.label.firstname"
      />
    ),
  },
  {
    field: 'dateofbirth',
    key: 'invalid_age',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_age"
        field="age"
        labelKey="common.form.label.age"
      />
    ),
  },
  {
    field: 'postalcode',
    key: 'invalid_postal_code',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_postal_code"
        field="postalCode"
        labelKey="common.form.label.postalcode"
      />
    ),
  },
];

export const updatePasswordErrors: TypeErrorObject[] = [
  {
    field: 'password',
    key: 'invalid_password',
    message: (
      <ErrorMessageForgotPassword
        inputId="actualPassword"
        labelText={i18n.t('profile.password_update.actual_password.label')}
      />
    ),
  },
  {
    field: 'newpassword',
    key: 'invalid_password',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_password"
        field="newPassword"
        labelKey="profile.password_update.newpassword"
      />
    ),
  },
];

export const forgotPasswordErrors: TypeErrorObject[] = [
  {
    field: 'email',
    key: 'invalid_email',
    message: (
      <MessageWithDynamicLabel
        messageKey="common.form.messages.invalid_email"
        field="email"
        labelKey="common.form.label.email"
      />
    ),
  },
];

export const emailNotExistError: TypeErrorObject = {
  field: 'email',
  key: 'invalid_email',
  message: (
    <MessageWithDynamicLabel
      messageKey="common.form.messages.email_doesnot_exist"
      field="email"
      labelKey="common.form.label.email"
    />
  ),
};
