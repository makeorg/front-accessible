// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from 'Client/ui/Elements/ButtonElements';
import { InputErrorMessage } from 'Client/ui/Elements/Form';
import PasswordInput from 'Client/ui/Elements/Form/PasswordInput';
import { PasswordRecoveryStyle } from '../Styled';

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
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void
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
    <PasswordRecoveryStyle.Form id="password_recovery" onSubmit={handleSubmit}>
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
      {error && <InputErrorMessage id="authentification-email-error">{errorMessage}</InputErrorMessage>}
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
    </PasswordRecoveryStyle.Form>
  );
};
