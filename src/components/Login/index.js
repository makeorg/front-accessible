import React from 'react';
import LoginFormComponent from './Form';
import Login from './Styled';
import AuthentificationSocialContainer from '../../containers/Authentification/Social';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import { ExtraParagraph, ExtraAltParagraph } from '../Elements/Form';
import * as Separators from '../Elements/Separators';
import { RedLinkButton } from '../Elements/ButtonElements';

class LoginComponent extends React.Component {
  render() {
    const { handleRegisterPannel } = this.props;
    return (
      <Login role="region" aria-labelledby="login_title">
        <SecondLevelTitle id="login_title">
          J‘ai déjà un compte
        </SecondLevelTitle>
        <Separators.Small />
        <ThirdLevelTtitle>
          Je me connecte avec
        </ThirdLevelTtitle>
        <AuthentificationSocialContainer />
        <Separators.Wrapper>
          <Separators.Large />
          <Separators.Text>ou</Separators.Text>
          <Separators.Large />
        </Separators.Wrapper>
        <ThirdLevelTtitle>
          Je me connecte avec mon adresse e-mail
        </ThirdLevelTtitle>
        <LoginFormComponent {...this.props} />
        <ExtraParagraph>
          Oups, j’ai
          <RedLinkButton>oublié mon mot de passe ?</RedLinkButton>
        </ExtraParagraph>
        <ExtraAltParagraph>
          Je n’ai pas de compte,
          <RedLinkButton onClick={handleRegisterPannel}>je m’en crée un.</RedLinkButton>
        </ExtraAltParagraph>
      </Login>
    );
  }
}

export default LoginComponent;
