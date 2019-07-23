// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ErrorMessageStyle } from 'Client/ui/Elements/Form/Styled/Errors';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PASSWORD_RECOVERY_FORMNAME } from 'Shared/constants/form';
import {
  PasswordFieldIcon,
  SubmitPaperPlaneIcon,
} from 'Shared/constants/icons';
import { PasswordRecoveryFormStyle } from '../Styled';

type Props = {
  /** User email value */
  password: string,
  /** Boolean to check if the theres an error */
  error: boolean,
  /** Error message of the form  */
  errorMessage: string,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

/**
 * Renders ForgotPassword Form
 */
export const PasswordRecoveryFormComponent = (props: Props) => {
  const { password, error, errorMessage, handleChange, handleSubmit } = props;

  return (
    <PasswordRecoveryFormStyle
      id={PASSWORD_RECOVERY_FORMNAME}
      onSubmit={handleSubmit}
    >
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={password}
        label={i18n.t('common.form.password_label')}
        handleChange={handleChange}
      />
      {error && (
        <ErrorMessageStyle id="authentification-email-error">
          {errorMessage}
        </ErrorMessageStyle>
      )}
      <SubmitButton
        formName={PASSWORD_RECOVERY_FORMNAME}
        icon={SubmitPaperPlaneIcon}
        label={i18n.t('reset_password.send_cta')}
      />
    </PasswordRecoveryFormStyle>
  );
};
