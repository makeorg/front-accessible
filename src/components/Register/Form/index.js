import React from 'react';
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
      passwordIsDisplayed
    } = this.props;

    const emailError = fieldErrors('email', errors);
    const passwordError = fieldErrors('password', errors);
    const firstnameError = fieldErrors('firstname', errors);

    return (
      <Form id="register" onSubmit={handleSubmit}>
        <FakeInputGrey hasError={emailError}>
          <IconLabel htmlFor="email" aria-label="E-mail (obligatoire)">
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconLabel>
          <BasicTextInput
            type="email"
            name="email"
            id="email"
            value={user.email}
            placeholder="E-mail (obligatoire)"
            aria-required="true"
            required
            onChange={handleChange}
          />
        </FakeInputGrey>
        <FakeInputGrey hasError={passwordError}>
          <IconLabel htmlFor="password" aria-label="Mot de passe (obligatoire)">
            <FontAwesomeIcon aria-hidden icon={faLock} />
          </IconLabel>
          <BasicTextInput
            type={passwordIsDisplayed ? 'text' : 'password'}
            name="password"
            id="password"
            value={user.password}
            placeholder="Mot de passe (obligatoire)"
            aria-required="true"
            required
            onChange={handleChange}
          />
          <PasswordButton
            togglePasswordIsDisplayed={togglePasswordIsDisplayed}
            passwordIsDisplayed={passwordIsDisplayed}
          />
        </FakeInputGrey>
        <FakeInputGrey hasError={firstnameError}>
          <IconLabel htmlFor="firstname" aria-label="Prénom (obligatoire)">
            <FontAwesomeIcon aria-hidden icon={faUser} />
          </IconLabel>
          <BasicTextInput
            type="text"
            name="firstname"
            id="firstname"
            value={user.firstname}
            placeholder="Prénom (obligatoire)"
            aria-required="true"
            required
            onChange={handleChange}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="age" aria-label="Âge">
            <FontAwesomeIcon aria-hidden icon={faChild} />
          </IconLabel>
          <BasicTextInput
            type="number"
            name="age"
            id="age"
            value={user.age}
            placeholder="Âge"
            aria-required="false"
            onChange={handleChange}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="postalcode" aria-label="Code postal">
            <FontAwesomeIcon aria-hidden icon={faMapMarkerAlt} />
          </IconLabel>
          <BasicTextInput
            type="number"
            name="postalcode"
            id="postalcode"
            value={user.postalcode}
            placeholder="Code postal"
            aria-required="false"
            onChange={handleChange}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="profession" aria-label="Profession">
            <FontAwesomeIcon aria-hidden icon={faSuitcase} />
          </IconLabel>
          <BasicTextInput
            type="text"
            name="profession"
            id="profession"
            value={user.profession}
            placeholder="Profession"
            aria-required="false"
            onChange={handleChange}
          />
        </FakeInputGrey>
        <ConditionParagraph>
          {'En vous inscrivant, vous acceptez nos conditions générales d’utilisation '
          + 'et acceptez de recevoir des e-mails (peu nombreux) de Make.org.'}
        </ConditionParagraph>
        <SmallRedButton type="submit" form="register">
          <IconInButton>
            <FontAwesomeIcon icon={faThumbsUp} />
          </IconInButton>
          {'S\'inscrire'}
        </SmallRedButton>
      </Form>
    );
  }
}


export default RegisterFormComponent;
