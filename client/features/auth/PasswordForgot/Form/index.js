// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import type { ErrorObject } from 'Shared/types/form';
import {
  InputErrorMessageStyle,
  FormErrorsListStyle,
  FormErrorStyle
} from 'Client/ui/Elements/Form/Styled';
import { fieldErrors } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { FORGOT_PASSWORD_FORMNAME } from 'Shared/constants/form';
import { ForgotPasswordFormStyle } from '../Styled';

type Props = {
  /** User email value */
  email: string,
  /** Array with form errors */
  errors: ErrorObject[],
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean
};

/**
 * Renders ForgotPassword Form
 */
export const ForgotPasswordFormComponent = (props: Props) => {
  const {
    email,
    errors,
    handleChange,
    handleSubmit,
    isPannelOpen
  } = props;

  const emailError = fieldErrors('email', errors);
  const globalError = fieldErrors('global', errors);

  return (
    <ForgotPasswordFormStyle id={FORGOT_PASSWORD_FORMNAME} onSubmit={handleSubmit}>
      {globalError
        && (
          <FormErrorsListStyle id="authentification-forgotpassword-error">
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
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        errors={emailError}
      />
      {emailError && <InputErrorMessageStyle id="authentification-email-error">{emailError}</InputErrorMessageStyle>}
      <SubmitButton
        formName={FORGOT_PASSWORD_FORMNAME}
        tabIndex={isPannelOpen ? 0 : -1}
        icon={faPaperPlane}
        label={i18n.t('forgot_password.send_link')}
      />
    </ForgotPasswordFormStyle>
  );
};
