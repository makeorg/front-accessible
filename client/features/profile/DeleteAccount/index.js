// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type UserType } from 'Shared/types/user';
import { type ErrorObjectType } from 'Shared/types/api';
import { PROFILE_DELETE_ACCOUNT_FORMNAME } from 'Shared/constants/form';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import {
  PasswordFieldIcon,
  EmailFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { logout } from 'Shared/store/actions/authentification';
import { UserService } from 'Shared/services/User';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import { FormRequirementsStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { getFieldError } from 'Shared/helpers/form';
import { ErrorMessageForgotPassword } from 'Client/ui/Elements/Form/Errors/Message/Password';
import { FormSuccessMessage } from 'Client/ui/Elements/Form/Success';
import { FormParagraphStyle } from '../Styled/Forms';

type Props = {
  user: UserType,
};

type TypeDeletePassword = {
  password: string,
  email: string,
};

const invalidPasswordError: ErrorObjectType = {
  field: 'password',
  key: 'invalid_password',
  message: <ErrorMessageForgotPassword />,
};

const invalidEmailError: ErrorObjectType = {
  field: 'email',
  key: 'invalid_email',
  message: i18n.t('common.form.messages.email_doesnot_exist', {
    context: 'dynamic',
    label: i18n.t('common.form.label.email'),
  }),
};

export const DeleteAccount = ({ user }: Props) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState<TypeDeletePassword>({
    password: '',
    email: '',
  });
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);
  const emailError = getFieldError('email', errors);
  const passwordError = getFieldError('password', errors);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });

    setCanSubmit(true);
    setIsSubmitSuccessful(false);
  };

  const handleSubmit = async (
    event: SyntheticInputEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const success = () => dispatch(logout(true));
    const invalidPassword = () => {
      setCanSubmit(false);
      setErrors([invalidPasswordError]);
    };
    const invalidEmail = () => {
      setCanSubmit(false);
      setErrors([invalidEmailError]);
    };

    await UserService.deleteAccount(
      user.userId,
      formValues.password,
      success,
      invalidPassword,
      invalidEmail
    );
  };

  return (
    <TileWithTitle title={i18n.t('profile.delete_account.title')}>
      <form id={PROFILE_DELETE_ACCOUNT_FORMNAME} onSubmit={handleSubmit}>
        <FormParagraphStyle>
          {i18n.t('profile.delete_account.description')}
        </FormParagraphStyle>
        <FormRequirementsStyle>
          {i18n.t('common.form.requirements')}
        </FormRequirementsStyle>
        <FormErrors errors={errors} />
        {user.hasPassword ? (
          <PasswordInput
            label={i18n.t('profile.delete_account.password')}
            name="password"
            id="password"
            required
            icon={PasswordFieldIcon}
            value={formValues.password}
            error={passwordError}
            handleChange={handleChange}
          />
        ) : (
          <UntypedInput
            type="email"
            name="email"
            value={formValues.email}
            icon={EmailFieldIcon}
            label={i18n.t('common.form.label.email')}
            error={emailError}
            required
            handleChange={handleChange}
          />
        )}
        <SubmitButton
          disabled={!canSubmit}
          formName={PROFILE_DELETE_ACCOUNT_FORMNAME}
          icon={SubmitThumbsUpIcon}
          label={i18n.t('profile.delete_account.submit_label')}
        />
        {isSubmitSuccessful && <FormSuccessMessage />}
      </form>
    </TileWithTitle>
  );
};
