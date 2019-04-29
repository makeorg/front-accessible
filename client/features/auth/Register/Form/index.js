// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { CGU_LINK } from 'Shared/constants/url';
import { type RegisterFormData as TypeRegisterFormData } from 'Shared/types/form';
import { type ErrorObject as TypeErrorObject } from 'Shared/types/api';
import {
  ErrorMessageStyle,
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
import * as UrlHelpers from 'Shared/helpers/url';
import { REGISTER_FORMNAME } from 'Shared/constants/form';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import {
  EmailFieldIcon,
  PasswordFieldIcon,
  FirstNameFieldIcon,
  AgeFieldIcon,
  PostalCodeFieldIcon,
  JobFieldIcon,
  SubmitThumbsUpIcon,
} from 'Shared/constants/icons';

type Props = {
  /** User form data */
  user: TypeRegisterFormData,
  /** Current country */
  country: string,
  /** Current language */
  language: string,
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
};

/**
 * Renders Register Form
 */
export const RegisterFormComponent = (props: Props) => {
  const { country, language, user, errors, handleChange, handleSubmit } = props;

  const emailError = fieldErrors('email', errors);
  const passwordError = fieldErrors('password', errors);
  const firstnameError = fieldErrors('firstname', errors);
  const ageError = fieldErrors('age', errors);
  const globalError = fieldErrors('global', errors);

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
        icon={EmailFieldIcon}
        errors={emailError}
        value={user.email}
        label={i18n.t('common.form.email_label')}
        required
        handleChange={handleChange}
      />
      {emailError && (
        <ErrorMessageStyle id="authentification-email-error">
          {emailError}
        </ErrorMessageStyle>
      )}
      <PasswordInput
        name="password"
        icon={PasswordFieldIcon}
        errors={passwordError}
        value={user.password}
        label={i18n.t('common.form.password_label')}
        handleChange={handleChange}
      />
      {passwordError && (
        <ErrorMessageStyle id="authentification-password-error">
          {passwordError}
        </ErrorMessageStyle>
      )}
      <UntypedInput
        type="text"
        name="firstname"
        icon={FirstNameFieldIcon}
        errors={firstnameError}
        value={user.firstname}
        label={i18n.t('common.form.firstname_label')}
        required
        handleChange={handleChange}
      />
      {firstnameError && (
        <ErrorMessageStyle id="authentification-firstname-error">
          {firstnameError}
        </ErrorMessageStyle>
      )}

      <UntypedInput
        type="number"
        name="age"
        icon={AgeFieldIcon}
        value={user.age}
        label={i18n.t('common.form.age_label')}
        required={false}
        handleChange={handleChange}
      />
      {ageError && (
        <ErrorMessageStyle id="authentification-age-error">
          {ageError}
        </ErrorMessageStyle>
      )}

      <UntypedInput
        type="number"
        name="postalcode"
        icon={PostalCodeFieldIcon}
        value={user.postalcode}
        label={i18n.t('common.form.postalcode_label')}
        required={false}
        handleChange={handleChange}
      />
      <UntypedInput
        type="text"
        name="profession"
        icon={JobFieldIcon}
        value={user.profession}
        label={i18n.t('common.form.profession_label')}
        required={false}
        handleChange={handleChange}
      />
      <ConditionParagraphStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('register.cgu_text', {
            cgu_link: `<a class="red_link" target="_blank" href="${UrlHelpers.localizeExternal(
              CGU_LINK,
              country,
              language
            )}">$t(register.cgu)</a>`, // eslint-disable-line max-len
            interpolation: { escapeValue: false },
          }),
        }}
      />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentification-register-submit"
        icon={SubmitThumbsUpIcon}
        label={i18n.t('common.register_label')}
      />
    </FormStyle>
  );
};
