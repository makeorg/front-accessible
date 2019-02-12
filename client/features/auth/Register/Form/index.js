// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import type { UserObject, ErrorObject } from 'Shared/types/form';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  faLock,
  faUser,
  faChild,
  faMapMarkerAlt,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons';
import {
  FormStyle,
  ConditionParagraphStyle,
  InputErrorMessageStyle,
  FormErrorsListStyle,
  FormErrorStyle
} from 'Client/ui/Elements/Form/Styled';
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
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean
}

/**
 * Renders Register Form
 */
export const RegisterFormComponent = (props: Props) => {
  const {
    user,
    errors,
    handleChange,
    handleSubmit,
    togglePasswordIsDisplayed,
    passwordIsDisplayed,
    isPannelOpen
  } = props;

  const emailError = fieldErrors('email', errors);
  const passwordError = fieldErrors('password', errors);
  const firstnameError = fieldErrors('firstname', errors);
  const globalError = fieldErrors('global', errors);
  const cguLink = Helpers.localizeCguLink();

  return (
    <FormStyle id={REGISTER_FORMNAME} onSubmit={handleSubmit}>
      {globalError
        && (
          <FormErrorsListStyle id="authentification-register-error">
            <FormErrorStyle key={globalError}>{globalError}</FormErrorStyle>
          </FormErrorsListStyle>
        )
      }
      <UntypedInput
        type="email"
        name="email"
        icon={faEnvelope}
        errors={emailError}
        value={user.email}
        label={i18n.t('common.form.email_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      {emailError && <InputErrorMessageStyle id="authentification-email-error">{emailError}</InputErrorMessageStyle>}
      <PasswordInput
        type="password"
        name="password"
        icon={faLock}
        errors={passwordError}
        value={user.password}
        label={i18n.t('common.form.password_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        passwordIsDisplayed={passwordIsDisplayed}
        togglePasswordIsDisplayed={togglePasswordIsDisplayed}
      />
      {passwordError && <InputErrorMessageStyle id="authentification-password-error">{passwordError}</InputErrorMessageStyle>}
      <UntypedInput
        type="text"
        name="firstname"
        icon={faUser}
        errors={firstnameError}
        value={user.firstname}
        label={i18n.t('common.form.firstname_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <UntypedInput
        type="number"
        name="age"
        icon={faChild}
        value={user.age}
        label={i18n.t('common.form.age_label')}
        required={false}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <UntypedInput
        type="number"
        name="postalcode"
        icon={faMapMarkerAlt}
        value={user.postalcode}
        label={i18n.t('common.form.postalcode_label')}
        required={false}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <UntypedInput
        type="text"
        name="profession"
        icon={faSuitcase}
        value={user.profession}
        label={i18n.t('common.form.profession_label')}
        required={false}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <ConditionParagraphStyle
        dangerouslySetInnerHTML={
          {
            __html: i18n.t(
              'register.cgu_text',
              {
                cgu_link: `<a class="red_link" target="_blank" href="${cguLink}" tabIndex="${isPannelOpen ? 0 : -1}">$t(register.cgu)</a>`,
                interpolation: { escapeValue: false }
              }
            )
          }
        }
      />
      <SubmitButton
        formName={REGISTER_FORMNAME}
        id="authentification-register-submit"
        icon={faThumbsUp}
        tabIndex={isPannelOpen ? 0 : -1}
        label={i18n.t('common.register_label')}
      />
    </FormStyle>
  );
};
