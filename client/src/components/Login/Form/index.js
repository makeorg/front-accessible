/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import type { ErrorObject } from 'Src/types/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from 'Src/components/Elements/ButtonElements';
import {
  Form,
  FormErrors,
  FormError
} from 'Src/components/Elements/Form';
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

  return (
    <Form id="login" onSubmit={handleSubmit}>
      {errors.length > 0
        && (
          <FormErrors id="authentification-login-error">
            {errors.map(error => <FormError key={error.field}>{error}</FormError>)}
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
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <PasswordInput
        type="password"
        name="password"
        icon={faLock}
        value={password}
        label={i18next.t('common.form.password_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        passwordIsDisplayed={passwordIsDisplayed}
        togglePasswordIsDisplayed={togglePasswordIsDisplayed}
      />
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
