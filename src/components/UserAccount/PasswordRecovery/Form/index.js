// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from 'Components/Elements/ButtonElements';
import { InputError } from 'Components/Elements/Form';
import PasswordInput from 'Components/Elements/Form/PasswordInput';
import { PasswordRecovery } from '../Styled';

type Props = {
  /** User email value */
  password: string,
  /** Boolean to check if the theres an error */
  error: boolean,
  /** Error message of the form  */
  errorMessage: string,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void,
  /** Method called when field's value changes */
  handleChange: () => void,
  /** Method called when field's value is submitted */
  handleSubmit: () => void
};

/**
 * Renders ForgotPassword Form
 */
export const PasswordRecoveryFormComponent = (props: Props) => {
  const {
    password,
    error,
    errorMessage,
    passwordIsDisplayed,
    togglePasswordIsDisplayed,
    handleChange,
    handleSubmit
  } = props;

  return (
    <PasswordRecovery.Form id="password_recovery" onSubmit={handleSubmit}>
      {error && <InputError id="authentification-email-error">{errorMessage}</InputError>}
      <PasswordInput
        type="password"
        name="password"
        icon={faLock}
        errors={error}
        value={password}
        label={i18next.t('common.form.password_label')}
        required
        handleChange={handleChange}
        tabIndex={0}
        passwordIsDisplayed={passwordIsDisplayed}
        togglePasswordIsDisplayed={togglePasswordIsDisplayed}
      />

      <SmallRedButton
        type="submit"
        form="password_recovery"
        tabIndex={0}
      >
        <IconInButton>
          <FontAwesomeIcon icon={faPaperPlane} />
        </IconInButton>
        {i18next.t('reset_password.send_cta')}
      </SmallRedButton>
    </PasswordRecovery.Form>
  );
};
