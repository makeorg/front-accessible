/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import type { ErrorObject } from 'Shared/types/form';
import { faThumbsUp, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import {
  FormStyle,
  InputErrorMessageStyle,
  FormErrorsListStyle,
  FormErrorStyle
} from 'Client/ui/Elements/Form/Styled';
import { fieldErrors } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { LOGIN_FORMNAME } from 'Shared/constants/form';

type Props = {
  /** User's email */
  email: string,
  /** User's password */
  password: string,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean
}

/**
 * Renders Login Form
 */
export const LoginFormComponent = (props: Props) => {
  const {
    email,
    password,
    errors,
    handleChange,
    handleSubmit,
    passwordIsDisplayed,
    togglePasswordIsDisplayed,
    isPannelOpen
  } = props;

  const emailError = fieldErrors('email', errors);
  const passwordError = fieldErrors('password', errors);
  const globalError = fieldErrors('global', errors);

  return (
    <FormStyle id={LOGIN_FORMNAME} onSubmit={handleSubmit}>
      {globalError
        && (
          <FormErrorsListStyle id="authentification-login-error">
            <FormErrorStyle key={globalError}>{globalError}</FormErrorStyle>
          </FormErrorsListStyle>
        )
      }
      <UntypedInput
        type="email"
        name="email"
        icon={faEnvelope}
        value={email}
        label={i18n.t('common.form.email_label')}
        required
        errors={emailError}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      {emailError && <InputErrorMessageStyle id="authentification-email-error">{emailError}</InputErrorMessageStyle>}
      <PasswordInput
        type="password"
        name="password"
        icon={faLock}
        value={password}
        label={i18n.t('common.form.password_label')}
        required
        errors={passwordError}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        passwordIsDisplayed={passwordIsDisplayed}
        togglePasswordIsDisplayed={togglePasswordIsDisplayed}
      />
      {passwordError && (
        <InputErrorMessageStyle id="authentification-password-error">
          {passwordError}
        </InputErrorMessageStyle>
      )}
      <SubmitButton
        formName={LOGIN_FORMNAME}
        tabIndex={isPannelOpen ? 0 : -1}
        icon={faThumbsUp}
        id="authentification-login-submit"
        label={i18n.t('common.connexion_label')}
      />
    </FormStyle>
  );
};
