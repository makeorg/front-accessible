// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import {
  InputErrorMessageStyle,
  FormErrorsListStyle,
  FormErrorStyle,
} from 'Client/ui/Elements/Form/Styled/Errors';
import {
  FormStyle,
  ConditionParagraphStyle,
} from 'Client/ui/Elements/Form/Styled/Content';
import { fieldErrors } from 'Shared/helpers/form';
import { UntypedInput } from 'Client/ui/Elements/Form/UntypedInput';
import { PasswordInput } from 'Client/ui/Elements/Form/PasswordInput';
import * as Helpers from 'Shared/helpers/url';
import { REGISTER_FORMNAME } from 'Shared/constants/form';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';

type Props = {
  /** type UserObject = {
    email: string,
    password: string,
    firstname: string,
    age: string,
    postalcode: string,
    profession: string
  } */
  user: UserObject,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => void,
};

/**
 * Renders Register Form
 */
export const RegisterFormComponent = (props: Props) => {
  const { user, errors, handleChange, handleSubmit } = props;

  const emailError = fieldErrors('email', errors);
  const passwordError = fieldErrors('password', errors);
  const firstnameError = fieldErrors('firstname', errors);
  const globalError = fieldErrors('global', errors);
  const cguLink = Helpers.localizeCguLink();

  return (
    <FormStyle id={REGISTER_FORMNAME} onSubmit={handleSubmit}>
      {globalError && (
        <FormErrorsListStyle id="authentification-register-error">
          <FormErrorStyle key={globalError}>{globalError}</FormErrorStyle>
        </FormErrorsListStyle>
      )}
      <UntypedInput
        type="email"
        name="email"
        icon="SvgEnvelope"
        errors={emailError}
        value={user.email}
        label={i18n.t('common.form.email_label')}
        required
        handleChange={handleChange}
      />
      {emailError && (
        <InputErrorMessageStyle id="authentification-email-error">
          {emailError}
        </InputErrorMessageStyle>
      )}
      <PasswordInput
        name="password"
        icon="SvgLock"
        errors={passwordError}
        value={user.password}
        label={i18n.t('common.form.password_label')}
        handleChange={handleChange}
      />
      {passwordError && (
        <InputErrorMessageStyle id="authentification-password-error">
          {passwordError}
        </InputErrorMessageStyle>
      )}
      <UntypedInput
        type="text"
        name="firstname"
        icon="SvgUser"
        errors={firstnameError}
        value={user.firstname}
        label={i18n.t('common.form.firstname_label')}
        required
        handleChange={handleChange}
      />
      <UntypedInput
        type="number"
        name="age"
        icon="SvgChild"
        value={user.age}
        label={i18n.t('common.form.age_label')}
        required={false}
        handleChange={handleChange}
      />
      <UntypedInput
        type="number"
        name="postalcode"
        icon="SvgMapMarker"
        value={user.postalcode}
        label={i18n.t('common.form.postalcode_label')}
        required={false}
        handleChange={handleChange}
      />
      <UntypedInput
        type="text"
        name="profession"
        icon="SvgSuitcase"
        value={user.profession}
        label={i18n.t('common.form.profession_label')}
        required={false}
        handleChange={handleChange}
      />
      <ConditionParagraphStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('register.cgu_text', {
            cgu_link: `<a class="red_link" target="_blank" href="${cguLink}">$t(register.cgu)</a>`, // eslint-disable-line max-len
            interpolation: { escapeValue: false },
          }),
        }}
      />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentification-register-submit"
        icon="SvgThumbsUp"
        label={i18n.t('common.register_label')}
      />
    </FormStyle>
  );
};
