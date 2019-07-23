// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { login } from 'Shared/store/actions/authentification';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
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

type Props = {
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called when login form is submit */
  handleLogin: (string, string) => void,
};

export const LoginFormComponent = ({ errors, handleLogin }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const globalError = getFieldError('email', errors);

  const handleChange = event => {
    const { id, value } = event.target;

    if (id === 'email') {
      setEmail(value);
    }

    if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (email && password) {
      handleLogin(email, password);
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
        value={email}
        label={i18n.t('common.form.email_label')}
        required
        errors={globalError}
        handleChange={throttle(handleChange)}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={password}
        label={i18n.t('common.form.password_label')}
        required
        errors={globalError}
        handleChange={throttle(handleChange)}
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

const mapStateToProps = state => {
  const { errors } = selectAuthentification(state);

  return { errors };
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => {
    dispatch(login(email, password));
  },
});

export const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
