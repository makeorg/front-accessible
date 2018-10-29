import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from '../../Elements/ButtonElements';
import {
  Form,
  FormErrors,
  FormError
} from '../../Elements/Form';
import UntypedInput from '../../Elements/Form/UntypedInput';
import PasswordInput from '../../Elements/Form/PasswordInput';

class LoginFormComponent extends React.Component {
  render() {
    const {
      email,
      password,
      errors,
      handleChange,
      handleSubmit,
      passwordIsDisplayed,
      togglePasswordIsDisplayed,
      isPannelOpen
    } = this.props;

    return (
      <Form id="login" onSubmit={handleSubmit}>
        {errors.length > 0
          && (
            <FormErrors>
              {errors.map(error => <FormError key={error}>{error}</FormError>)}
            </FormErrors>
          )
        }
        <UntypedInput
          type="email"
          name="email"
          icon={faEnvelope}
          value={email}
          label={i18next.t('common.form.email_label')}
          required
          handleChange={handleChange}
          tabIndex={isPannelOpen ? 0 : -1}
        />
        <PasswordInput
          type="password"
          name="password"
          icon={faLock}
          value={password}
          label={i18next.t('common.form.password_label')}
          required
          handleChange={handleChange}
          tabIndex={isPannelOpen ? 0 : -1}
          passwordIsDisplayed={passwordIsDisplayed}
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
        />
        <SmallRedButton
          type="submit"
          form="login"
          tabIndex={isPannelOpen ? 0 : -1}
        >
          <IconInButton>
            <FontAwesomeIcon icon={faThumbsUp} />
          </IconInButton>
          {i18next.t('common.connexion_label')}
        </SmallRedButton>
      </Form>
    );
  }
}

export default LoginFormComponent;
