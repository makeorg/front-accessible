import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import {
  faLock,
  faUser,
  faChild,
  faMapMarkerAlt,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from 'Components/Elements/ButtonElements';
import {
  Form,
  ConditionParagraph,
  InputError,
  FormErrors,
  FormError
} from 'Components/Elements/Form';
import { fieldErrors } from 'Helpers/form';
import UntypedInput from 'Components/Elements/Form/UntypedInput';
import PasswordInput from 'Components/Elements/Form/PasswordInput';

class RegisterFormComponent extends React.Component {
  render() {
    const {
      user,
      errors,
      handleChange,
      handleSubmit,
      togglePasswordIsDisplayed,
      passwordIsDisplayed,
      isPannelOpen
    } = this.props;

    const emailError = fieldErrors('email', errors);
    const passwordError = fieldErrors('password', errors);
    const firstnameError = fieldErrors('firstname', errors);
    const globalError = fieldErrors('global', errors);

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
        <ConditionParagraph>
          {i18next.t('register.cgu')}
        </ConditionParagraph>
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
  }
}


export default RegisterFormComponent;
