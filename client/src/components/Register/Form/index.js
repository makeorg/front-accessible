// @flow
import * as React from 'react';
import i18next from 'i18next';
import type { UserObject, ErrorObject } from 'Src/types/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  faLock,
  faUser,
  faChild,
  faMapMarkerAlt,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from 'Src/components/Elements/ButtonElements';
import {
  Form,
  ConditionParagraph,
  InputError,
  FormErrors,
  FormError
} from 'Src/components/Elements/Form';
import { fieldErrors } from 'Src/helpers/form';
import UntypedInput from 'Src/components/Elements/Form/UntypedInput';
import PasswordInput from 'Src/components/Elements/Form/PasswordInput';
import * as Helpers from 'Src/helpers/url';

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
const RegisterFormComponent = (props: Props) => {
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
    <Form id="register" onSubmit={handleSubmit}>
      {globalError
        && (
          <FormErrors id="authentification-register-error">
            <FormError key={globalError}>{globalError}</FormError>
          </FormErrors>
        )
      }
      <UntypedInput
        type="email"
        name="email"
        icon={faEnvelope}
        errors={emailError}
        value={user.email}
        label={i18next.t('common.form.email_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      {emailError && <InputError id="authentification-email-error">{emailError}</InputError>}
      <PasswordInput
        type="password"
        name="password"
        icon={faLock}
        errors={passwordError}
        value={user.password}
        label={i18next.t('common.form.password_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
        passwordIsDisplayed={passwordIsDisplayed}
        togglePasswordIsDisplayed={togglePasswordIsDisplayed}
      />
      {passwordError && <InputError id="authentification-password-error">{passwordError}</InputError>}
      <UntypedInput
        type="text"
        name="firstname"
        icon={faUser}
        errors={firstnameError}
        value={user.firstname}
        label={i18next.t('common.form.firstname_label')}
        required
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <UntypedInput
        type="number"
        name="age"
        icon={faChild}
        value={user.age}
        label={i18next.t('common.form.age_label')}
        required={false}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <UntypedInput
        type="number"
        name="postalcode"
        icon={faMapMarkerAlt}
        value={user.postalcode}
        label={i18next.t('common.form.postalcode_label')}
        required={false}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <UntypedInput
        type="text"
        name="profession"
        icon={faSuitcase}
        value={user.profession}
        label={i18next.t('common.form.profession_label')}
        required={false}
        handleChange={handleChange}
        tabIndex={isPannelOpen ? 0 : -1}
      />
      <ConditionParagraph
        dangerouslySetInnerHTML={
          {
            __html: i18next.t(
              'register.cgu_text',
              {
                cgu_link: `<a class="red_link" target="_blank" href="${cguLink}">$t(register.cgu)</a>`,
                interpolation: { escapeValue: false }
              }
            )
          }
        }
      />
      <SmallRedButton
        type="submit"
        form="register"
        tabIndex={isPannelOpen ? 0 : -1}
        id="authentification-register-submit"
      >
        <IconInButton>
          <FontAwesomeIcon icon={faThumbsUp} />
        </IconInButton>
        {i18next.t('common.register_label')}
      </SmallRedButton>
    </Form>
  );
};


export default RegisterFormComponent;
