import React from 'react';
import RegisterFormComponent from './Form';
import Register from './Styled';
import FacebookAuthentificationLinkComponent from '../Authentification/Social/FacebookAuthentificationLink';
import GoogleAuthentificationLinkComponent from '../Authentification/Social/GoogleAuthentificationLink';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import * as Separators from '../Elements/Separators';
import { RedLinkButton } from '../Elements/ButtonElements';
import { ExtraParagraph } from '../Elements/FormElements';

class RegisterComponent extends React.Component {
  render() {
    return (
      <Register role="region" aria-labelledby="register_title">
        <SecondLevelTitle id="register_title">
          Créer un compte
        </SecondLevelTitle>
        <Separators.Small />
        <ThirdLevelTtitle>
          {'Je m’inscris avec '}
          <FacebookAuthentificationLinkComponent />
          {' ou '}
          <GoogleAuthentificationLinkComponent />
        </ThirdLevelTtitle>
        <Separators.Wrapper>
          <Separators.Large />
          <Separators.Text>ou</Separators.Text>
          <Separators.Large />
        </Separators.Wrapper>
        <ThirdLevelTtitle>
          {'Je m\'inscris avec ce formulaire'}
        </ThirdLevelTtitle>
        <RegisterFormComponent {...this.props} />
        <ExtraParagraph>
          {'J\'ai déja un compte !'}
          <RedLinkButton>Connexion</RedLinkButton>
        </ExtraParagraph>
      </Register>
    );
  }
}

export default RegisterComponent;
