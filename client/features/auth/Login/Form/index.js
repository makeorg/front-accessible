// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { Tracking } from 'Shared/services/Tracking';
import { type TypeErrorObject } from 'Shared/types/api';
import {
  FormStyle,
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
import { loginSuccess, getUser } from 'Shared/store/actions/authentification';

type Props = {
  /** Method called when login form succeed */
  handleLoginSuccess: () => void,
  /** Method called to load user after login */
  handleGetUser: () => void,
};

type TypeLoginValues = {
  email: string,
  password: string,
};

export const LoginFormComponent = ({
  handleLoginSuccess,
  handleGetUser,
}: Props) => {
  const defaultFormValues = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState<TypeLoginValues>(
    defaultFormValues
  );
  const [errors, setErrors] = useState<TypeErrorObject[]>([]);
  const globalError = getFieldError('global', errors);

  const handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await UserService.login(formValues.email, formValues.password);
      handleLoginSuccess();
      Tracking.trackLoginEmailSuccess();
      handleLoginSuccess();
      setErrors([]);
      return handleGetUser();
    } catch (serviceErrors) {
      setErrors(serviceErrors);
      return Tracking.trackSignupEmailFailure();
    }
  };

  return (
    <FormStyle id={LOGIN_FORMNAME} onSubmit={throttle(handleSubmit)}>
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
        id="authentification-login-submit"
        label={i18n.t('common.connexion_label')}
      />
    </FormStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  handleLoginSuccess: () => {
    dispatch(loginSuccess());
  },
  handleGetUser: () => {
    dispatch(getUser());
  },
});

export const LoginForm = connect(
  null,
  mapDispatchToProps
)(LoginFormComponent);
