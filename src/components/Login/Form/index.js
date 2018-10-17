import React from 'react';
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
      showPassword,
      hidePassword,
      passwordIsDisplayed
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
          <IconLabel htmlFor="email" aria-label="E-mail (obligatoire)">
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconLabel>
          <BasicTextInput
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="E-mail (obligatoire)"
            aria-required="true"
            required
            onChange={handleChange}
          />
        </FakeInputGrey>
        <FakeInputGrey>
          <IconLabel htmlFor="password" aria-label="Mot de passe (obligatoire)">
            <FontAwesomeIcon aria-hidden icon={faLock} />
          </IconLabel>
          <BasicTextInput
            type={passwordIsDisplayed ? 'text' : 'password'}
            name="password"
            id="password"
            value={password}
            placeholder="Mot de passe (obligatoire)"
            aria-required="true"
            required
            onChange={handleChange}
          />
          <PasswordButton
            showPassword={showPassword}
            hidePassword={hidePassword}
            passwordIsDisplayed={passwordIsDisplayed}
          />
        </FakeInputGrey>
        <SmallRedButton type="submit" form="login">
          <IconInButton>
            <FontAwesomeIcon icon={faThumbsUp} />
          </IconInButton>
          Se connecter
        </SmallRedButton>
      </Form>
    );
  }
}


export default LoginFormComponent;
