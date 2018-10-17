import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import LoginFormComponent from './Form';
import Login from './Styled';
import AuthentificationSocialContainer from '../../containers/Authentification/Social';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import { SmallSep, LargeSep } from '../Elements/Separators';
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
        <AuthentificationSocialContainer />
        <Login.SepWrapper>
          <LargeSep />
          <Login.SepText>ou</Login.SepText>
          <LargeSep />
        </Login.SepWrapper>
        <ThirdLevelTtitle>
          Je me connecte avec mon adresse e-mail
        </ThirdLevelTtitle>
        <LoginFormComponent {...this.props} />
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
