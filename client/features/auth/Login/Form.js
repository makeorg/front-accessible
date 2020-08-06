// @flow
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { UserService } from 'Shared/services/User';
import {
  trackLoginEmailSuccess,
  trackSignupEmailFailure,
} from 'Shared/services/Tracking';
import { type ErrorObjectType } from 'Shared/types/api';
import {
  FormCenterAlignStyle,
  FormRequirementsStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import { LOGIN_FORMNAME } from 'Shared/constants/form';
import { FormErrors } from 'Client/ui/Elements/Form/Errors';
import {
  EmailFieldIcon,
  PasswordFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';
import { throttle } from 'Shared/helpers/throttle';
import { getFieldError } from 'Shared/helpers/form';
import { loginSuccess, getUser } from 'Shared/store/actions/authentication';
import { modalClose } from 'Shared/store/actions/modal';

type TypeLoginValues = {
  email: string,
  password: string,
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const defaultFormValues = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState<TypeLoginValues>(
    defaultFormValues
  );
  const [errors, setErrors] = useState<ErrorObjectType[]>([]);
  const globalError = getFieldError('global', errors);

  /** Method called when login form succeed */
  const handleLoginSuccess = () => {
    dispatch(loginSuccess());
  };

  /** Method called to load user after login */
  const handleGetUser = () => {
    dispatch(getUser());
  };

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const success = () => {
      handleLoginSuccess();
      trackLoginEmailSuccess();
      setErrors([]);
      handleGetUser();
    };
    const handleErrors = (serviceErrors: ErrorObjectType[]) => {
      setErrors(serviceErrors);
      trackSignupEmailFailure();
    };
    const unexpectedError = () => dispatch(modalClose());

    await UserService.login(
      formValues.email,
      formValues.password,
      success,
      handleErrors,
      unexpectedError
    );
  };

  return (
    <FormCenterAlignStyle id={LOGIN_FORMNAME} onSubmit={throttle(handleSubmit)}>
      <FormRequirementsStyle>
        {i18n.t('common.form.requirements')}
      </FormRequirementsStyle>
      <FormErrors errors={errors} />
      <UntypedInput
        type="email"
        name="email"
        icon={EmailFieldIcon}
        value={formValues.email}
        label={i18n.t('common.form.label.email')}
        required
        error={globalError}
        handleChange={handleChange}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={formValues.password}
        label={i18n.t('common.form.label.password')}
        required
        error={globalError}
        handleChange={handleChange}
      />
      <SubmitButton
        formName={LOGIN_FORMNAME}
        icon={SubmitThumbsUpIcon}
        id="authentication-login-submit"
        label={i18n.t('common.connexion_label')}
      />
    </FormCenterAlignStyle>
  );
};
