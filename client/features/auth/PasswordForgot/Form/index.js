// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type TypeErrorObject } from 'Shared/types/api';
import {
  ErrorMessageStyle,
  FormErrorsListStyle,
  FormErrorStyle,
} from 'Client/ui/Elements/Form/Styled/Errors';
import { fieldErrors, getFieldError } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { FORGOT_PASSWORD_FORMNAME } from 'Shared/constants/form';
import { EmailFieldIcon, SubmitPaperPlaneIcon } from 'Shared/constants/icons';
import { ForgotPasswordFormStyle } from '../Styled';

type Props = {
  /** User email value */
  email: string,
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
};

/**
 * Renders ForgotPassword Form
 */
export const ForgotPasswordFormComponent = (props: Props) => {
  const { email, errors, handleChange, handleSubmit } = props;

  const emailError = getFieldError('email', errors);
  const globalError = fieldErrors('global', errors);

  return (
    <ForgotPasswordFormStyle
      id={FORGOT_PASSWORD_FORMNAME}
      onSubmit={handleSubmit}
    >
      {globalError && (
        <FormErrorsListStyle id="authentification-forgotpassword-error">
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
        handleChange={handleChange}
        errors={emailError}
      />
      {emailError && (
        <ErrorMessageStyle id="authentification-email-error">
          {emailError}
        </ErrorMessageStyle>
      )}
      <SubmitButton
        formName={FORGOT_PASSWORD_FORMNAME}
        icon={SubmitPaperPlaneIcon}
        label={i18n.t('forgot_password.send_link')}
      />
    </ForgotPasswordFormStyle>
  );
};
