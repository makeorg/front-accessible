/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import type { ErrorObject } from 'Shared/types/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from 'Src/components/Elements/ButtonElements';
import {
  Form,
  InputErrorMessage,
  FormErrors,
  FormError
} from 'Src/components/Elements/Form';
import { fieldErrors } from 'Shared/helpers/form';
import UntypedInput from 'Src/components/Elements/Form/UntypedInput';
import PasswordInput from 'Src/components/Elements/Form/PasswordInput';

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
const LoginFormComponent = (props: Props) => {
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
    <Form id="login" onSubmit={handleSubmit}>
      {globalError
        && (
          <FormErrors id="authentification-login-error">
            <FormError key={globalError}>{globalError}</FormError>
          </FormErrors>
        )
      }
      <UntypedInput
        type="email"
        name="email"
        icon={faEnvelope}
        value={email}
        label={i18next.t('common.form.email_label')}
        required
        errors={emailError}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      {emailError && <InputErrorMessage id="authentification-email-error">{emailError}</InputErrorMessage>}
      <PasswordInput
        type="password"
        name="password"
        icon={faLock}
        value={password}
        label={i18next.t('common.form.password_label')}
        required
        errors={passwordError}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        passwordIsDisplayed={passwordIsDisplayed}
        togglePasswordIsDisplayed={togglePasswordIsDisplayed}
      />
      {passwordError && <InputErrorMessage id="authentification-password-error">{passwordError}</InputErrorMessage>}
      <SmallRedButton
        type="submit"
        form="login"
        tabIndex={isPannelOpen ? 0 : -1}
        id="authentification-login-submit"
      >
        <IconInButton>
          <FontAwesomeIcon icon={faThumbsUp} />
        </IconInButton>
        {i18next.t('common.connexion_label')}
      </SmallRedButton>
    </Form>
  );
};

export default LoginFormComponent;
