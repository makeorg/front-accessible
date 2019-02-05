// @flow
import * as React from 'react';
import i18next from 'i18next';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import type { ErrorObject } from 'Shared/types/form';
import {
  InputErrorMessage,
  FormErrors,
  FormError
} from 'Client/ui/Elements/Form/Styled';
import { fieldErrors } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { FORGOT_PASSWORD_FORMNAME } from 'Shared/constants/form';
import ForgotPassword from '../Styled';

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
    <ForgotPassword.Form id={FORGOT_PASSWORD_FORMNAME} onSubmit={handleSubmit}>
      {globalError
        && (
          <FormErrors id="authentification-forgotpassword-error">
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
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        errors={emailError}
      />
      {emailError && <InputErrorMessage id="authentification-email-error">{emailError}</InputErrorMessage>}
      <SubmitButton
        formName={FORGOT_PASSWORD_FORMNAME}
        tabIndex={isPannelOpen ? 0 : -1}
        icon={faPaperPlane}
        label={i18next.t('forgot_password.send_link')}
      />
    </ForgotPassword.Form>
  );
};
