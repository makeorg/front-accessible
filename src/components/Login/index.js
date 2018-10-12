import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Login from './Styled';
import AuthentificationContainer from '../../containers/Authentification';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import { SmallSep, LargeSep } from '../Elements/Separators';
import {
  FakeInputGrey,
  LastFakeInputGrey,
  IconLabel,
  BasicTextInput
} from '../Elements/FormElements';
import { RedButton, IconInButton } from '../Elements/ButtonElements';

class LoginComponent extends React.Component {
  render() {
    return (
      <Login role="region" aria-labelledby="login_title">
        <SecondLevelTitle id="login_title">
          J&apos;ai déjà un compte
        </SecondLevelTitle>
        <SmallSep />
        <ThirdLevelTtitle>
          Je me connecte avec
        </ThirdLevelTtitle>
        <AuthentificationContainer />
        <Login.SepWrapper>
          <LargeSep />
          <Login.SepText>ou</Login.SepText>
          <LargeSep />
        </Login.SepWrapper>
        <ThirdLevelTtitle>
          Je me connecte avec mon adresse e-mail
        </ThirdLevelTtitle>
        <Login.Form id="login">
          <FakeInputGrey>
            <IconLabel htmlFor="email" aria-label="E-mail (obligatoire)">
              <FontAwesomeIcon aria-hidden icon={faEnvelope} />
            </IconLabel>
            <BasicTextInput
              type="email"
              name="email"
              id="email"
              placeholder="E-mail (obligatoire)"
              aria-required="true"
              required
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
              placeholder="Mot de passe (obligatoire)"
              aria-required="true"
              required
            />
          </LastFakeInputGrey>
        </Login.Form>
        <RedButton type="submit" form="login">
          <IconInButton>
            <FontAwesomeIcon icon={faThumbsUp} />
          </IconInButton>
          Se connecter
        </RedButton>
        <Login.ExtraParagraph>
          Oups, j’ai
          <Login.RedLinkButton>oublié mon mot de passe ?</Login.RedLinkButton>
        </Login.ExtraParagraph>
        <Login.ExtraAltParagraph>
          Je n’ai pas de compte,
          <Login.RedLinkButton>je m’en crée un.</Login.RedLinkButton>
        </Login.ExtraAltParagraph>
      </Login>
    );
  }
}

export default LoginComponent;
