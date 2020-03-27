// @flow
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type ErrorObjectType } from 'Shared/types/api';
import { type StateRoot } from 'Shared/store/types';
import { i18n } from 'Shared/i18n';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { PASSWORD_RECOVERY_FORMNAME } from 'Shared/constants/form';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import {
  PasswordFieldIcon,
  SubmitPaperPlaneIcon,
} from 'Shared/constants/icons';
import { passwordRecovery } from 'Shared/store/actions/user/passwordRecovery';
import { throttle } from 'Shared/helpers/throttle';
import { selectPasswordRecovery } from 'Shared/store/selectors/user.selector';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { getFieldError } from 'Shared/helpers/form';
import { PasswordRecoveryFormStyle } from './style';

/**
 * Renders ForgotPassword Form
 */
export const PasswordRecoveryForm = () => {
  const dispatch = useDispatch();
  const { error, errorMessage } = useSelector((state: StateRoot) =>
    selectPasswordRecovery(state)
  );
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);
  const passwordError = getFieldError('password', errors);

  if (error) {
    setErrors([
      {
        field: 'password',
        key: 'password_message',
        message: <span>{errorMessage}</span>,
      },
    ]);
  }

  const handleSubmitForm = (newPassword: string) => {
    dispatch(passwordRecovery(newPassword));
  };

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (password) {
      handleSubmitForm(password);
    }

    if (!error) {
      setErrors([]);
    }
  };

  return (
    <PasswordRecoveryFormStyle
      id={PASSWORD_RECOVERY_FORMNAME}
      onSubmit={throttle(handleSubmit)}
    >
      <FormRequirementsStyle>
        {i18n.t('common.form.requirements')}
      </FormRequirementsStyle>
      <FormErrors errors={errors} />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={password}
        label={i18n.t('common.form.label.password')}
        handleChange={handleChange}
        error={passwordError}
      />
      <SubmitButton
        formName={PASSWORD_RECOVERY_FORMNAME}
        icon={SubmitPaperPlaneIcon}
        label={i18n.t('reset_password.send_cta')}
      />
    </PasswordRecoveryFormStyle>
  );
};
