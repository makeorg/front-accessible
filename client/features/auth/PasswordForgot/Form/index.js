// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import { type TypeErrorObject } from 'Shared/types/api';
import { getFieldError } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { FORGOT_PASSWORD_FORMNAME } from 'Shared/constants/form';
import { EmailFieldIcon, SubmitPaperPlaneIcon } from 'Shared/constants/icons';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { ForgotPasswordFormStyle, ForgotPasswordTitleStyle } from '../Styled';

/**
 * Renders ForgotPassword Form
 */
export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState<string>('');
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<TypeErrorObject[]>([]);
  const emailError = getFieldError('email', errors);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const success = () => setSuccess(true);
    const handleErrors = (serviceErrors: TypeErrorObject[]) => {
      setErrors(serviceErrors);
    };
    if (email.trim() !== '') {
      await UserService.forgotPassword(email.trim(), success, handleErrors);
    }
  };

  if (isSuccess) {
    return (
      <ForgotPasswordTitleStyle>
        {i18n.t('forgot_password.success')}
      </ForgotPasswordTitleStyle>
    );
  }

  return (
    <ForgotPasswordFormStyle
      id={FORGOT_PASSWORD_FORMNAME}
      onSubmit={handleSubmit}
    >
      <ForgotPasswordTitleStyle>
        {i18n.t('forgot_password.description')}
      </ForgotPasswordTitleStyle>
      <FormErrors errors={errors} />
      <UntypedInput
        type="email"
        name="email"
        icon={EmailFieldIcon}
        value={email}
        label={i18n.t('common.form.label.email')}
        required
        handleChange={handleChange}
        error={emailError}
      />
      <SubmitButton
        formName={FORGOT_PASSWORD_FORMNAME}
        icon={SubmitPaperPlaneIcon}
        label={i18n.t('forgot_password.send_link')}
      />
    </ForgotPasswordFormStyle>
  );
};
