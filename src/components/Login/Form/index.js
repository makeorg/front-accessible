import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { SmallRedButton, IconInButton } from '../../Elements/ButtonElements';
import {
  Form,
  FakeInputGrey,
  IconLabel,
  BasicTextInput
} from '../../Elements/Form';
import PasswordButton from '../../Elements/Form/PasswordButton';

class LoginFormComponent extends React.Component {
  render() {
    const {
      email,
      password,
      errors,
      handleChange,
      handleSubmit,
      togglePasswordIsDisplayed,
      passwordIsDisplayed,
      isPannelOpen
    } = this.props;

    return (
      <Form id="login" onSubmit={handleSubmit}>
        {errors.length > 0
          && (
            <ul>
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
          )
        }
        <FakeInputGrey>
          <IconLabel
            htmlFor="email"
            aria-label={i18next.t('common.form.email_label')}
          >
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconLabel>
          <BasicTextInput
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder={i18next.t('common.form.email_label')}
            aria-required="true"
            required
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel
            htmlFor="password"
            aria-label={i18next.t('common.form.password_label')}
          >
            <FontAwesomeIcon aria-hidden icon={faLock} />
          </IconLabel>
          <BasicTextInput
            type={passwordIsDisplayed ? 'text' : 'password'}
            name="password"
            id="password"
            value={password}
            placeholder={i18next.t('common.form.password_label')}
            aria-required="true"
            required
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
          <PasswordButton
            togglePasswordIsDisplayed={togglePasswordIsDisplayed}
            passwordIsDisplayed={passwordIsDisplayed}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
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
