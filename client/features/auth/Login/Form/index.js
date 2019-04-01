/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type ErrorObject } from 'Shared/types/form';
import {
  ErrorMessageStyle,
  FormErrorsListStyle,
  FormErrorStyle,
} from 'Client/ui/Elements/Form/Styled/Errors';
import { FormStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { fieldErrors } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { LOGIN_FORMNAME } from 'Shared/constants/form';
import {
  EmailFieldIcon,
  PasswordFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';

type Props = {
  /** User's email */
  email: string,
  /** User's password */
  password: string,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Login Form
 */
export const LoginFormComponent = (props: Props) => {
  const { email, password, errors, handleChange, handleSubmit } = props;

  const emailError = fieldErrors('email', errors);
  const passwordError = fieldErrors('password', errors);
  const globalError = fieldErrors('global', errors);

  return (
    <FormStyle id={LOGIN_FORMNAME} onSubmit={handleSubmit}>
      {globalError && (
        <FormErrorsListStyle id="authentification-login-error">
          <FormErrorStyle key={globalError}>{globalError}</FormErrorStyle>
        </FormErrorsListStyle>
      )}
      <UntypedInput
        type="email"
        name="email"
        icon={EmailFieldIcon}
        value={email}
        label={i18n.t('common.form.email_label')}
        required
        errors={emailError}
        handleChange={handleChange}
      />
      {emailError && (
        <ErrorMessageStyle id="authentification-email-error">
          {emailError}
        </ErrorMessageStyle>
      )}
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={password}
        label={i18n.t('common.form.password_label')}
        required
        errors={passwordError}
        handleChange={handleChange}
      />
      {passwordError && (
        <ErrorMessageStyle id="authentification-password-error">
          {passwordError}
        </ErrorMessageStyle>
      )}
      <SubmitButton
        formName={LOGIN_FORMNAME}
        icon={SubmitThumbsUpIcon}
        id="authentification-login-submit"
        label={i18n.t('common.connexion_label')}
      />
    </FormStyle>
  );
};
