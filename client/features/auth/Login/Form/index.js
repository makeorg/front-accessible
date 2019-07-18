// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
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

type Props = {
  /** User's email */
  email: string,
  /** User's password */
  password: string,
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void,
};

export const LoginFormComponent = ({
  email,
  password,
  errors,
  handleChange,
  handleSubmit,
}: Props) => {
  return (
    <FormStyle id={LOGIN_FORMNAME} onSubmit={handleSubmit}>
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
        errors={errors.length}
        handleChange={handleChange}
      />
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        value={password}
        label={i18n.t('common.form.password_label')}
        required
        errors={errors.length}
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
