import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Login from '../Styled';
import {
  FakeInputGrey,
  LastFakeInputGrey,
  IconLabel,
  BasicTextInput
} from '../../Elements/FormElements';

class LoginFormComponent extends React.Component {
  render() {
    const {
      email,
      password,
      errors,
      handleChange,
      handleSubmit
    } = this.props;

    return (
      <Login.Form id="login" onSubmit={handleSubmit}>
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
        <LastFakeInputGrey>
          <IconLabel htmlFor="password" aria-label="Mot de passe (obligatoire)">
            <FontAwesomeIcon aria-hidden icon={faLock} />
          </IconLabel>
          <BasicTextInput
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Mot de passe (obligatoire)"
            aria-required="true"
            required
            onChange={handleChange}
          />
        </LastFakeInputGrey>
      </Login.Form>
    );
  }
}


export default LoginFormComponent;
