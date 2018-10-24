import React from 'react';
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
import { SmallRedButton, IconInButton } from '../../Elements/ButtonElements';
import {
  Form,
  ConditionParagraph,
  FakeInputGrey,
  IconLabel,
  BasicTextInput
} from '../../Elements/Form';
import { fieldErrors } from '../../../helpers/form';
import PasswordButton from '../../Elements/Form/PasswordButton';

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

    return (
      <Form id="register" onSubmit={handleSubmit}>
        <FakeInputGrey hasError={emailError}>
          <IconLabel htmlFor="email" aria-label={i18next.t('common.form.email_label')}>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconLabel>
          <BasicTextInput
            type="email"
            name="email"
            id="email"
            value={user.email}
            placeholder={i18next.t('common.form.email_label')}
            aria-required="true"
            required
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
        <FakeInputGrey hasError={passwordError}>
          <IconLabel htmlFor="password" aria-label={i18next.t('common.form.password_label')}>
            <FontAwesomeIcon aria-hidden icon={faLock} />
          </IconLabel>
          <BasicTextInput
            type={passwordIsDisplayed ? 'text' : 'password'}
            name="password"
            id="password"
            value={user.password}
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
        <FakeInputGrey hasError={firstnameError}>
          <IconLabel htmlFor="firstname" aria-label={i18next.t('common.form.firstname_label')}>
            <FontAwesomeIcon aria-hidden icon={faUser} />
          </IconLabel>
          <BasicTextInput
            type="text"
            name="firstname"
            id="firstname"
            value={user.firstname}
            placeholder={i18next.t('common.form.firstname_label')}
            aria-required="true"
            required
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="age" aria-label={i18next.t('common.form.age_label')}>
            <FontAwesomeIcon aria-hidden icon={faChild} />
          </IconLabel>
          <BasicTextInput
            type="number"
            name="age"
            id="age"
            value={user.age}
            placeholder={i18next.t('common.form.age_label')}
            aria-required="false"
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="postalcode" aria-label={i18next.t('common.form.postalcode_label')}>
            <FontAwesomeIcon aria-hidden icon={faMapMarkerAlt} />
          </IconLabel>
          <BasicTextInput
            type="number"
            name="postalcode"
            id="postalcode"
            value={user.postalcode}
            placeholder={i18next.t('common.form.postalcode_label')}
            aria-required="false"
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="profession" aria-label={i18next.t('common.form.profession_label')}>
            <FontAwesomeIcon aria-hidden icon={faSuitcase} />
          </IconLabel>
          <BasicTextInput
            type="text"
            name="profession"
            id="profession"
            value={user.profession}
            placeholder={i18next.t('common.form.profession_label')}
            aria-required="false"
            onChange={handleChange}
            tabIndex={isPannelOpen ? 0 : -1}
          />
        </FakeInputGrey>
        <ConditionParagraph>
          {i18next.t('register.cgu')}
        </ConditionParagraph>
        <SmallRedButton
          type="submit"
          form="register"
          tabIndex={isPannelOpen ? 0 : -1}
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
