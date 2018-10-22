import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  SmallRedButton,
  EmailButton,
  IconInButton,
  ButtonsWrapper,
  SmallButtonsWrapper
} from '../../Elements/ButtonElements';
import { SecondLevelTitle, ThirdLevelTtitle } from '../../Elements/TitleElements';
import { AltDescription, DescriptionLink } from '../../Elements/DescriptionElements';
import * as Separators from '../../Elements/Separators';
import FacebookAuthentificationButtonComponent from '../../Authentification/Social/FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from '../../Authentification/Social/GoogleAuthentification/Button';
import ProposalSubmitAuthentificationWrapper from '../Styled/Authentification';

class ProposalSubmitAuthentificationComponent extends React.Component {
  render() {
    const { handleRegisterClick, handleLoginClick } = this.props;

    return (
      <ProposalSubmitAuthentificationWrapper>
        <SecondLevelTitle>Créez un compte Make.org</SecondLevelTitle>
        <ThirdLevelTtitle>
          pour valider votre contribution et être informé(e) des résultats de la consultation.
        </ThirdLevelTtitle>
        <SmallButtonsWrapper>
          <FacebookAuthentificationButtonComponent />
          <GoogleAuthentificationButtonComponent />
          <EmailButton onClick={handleRegisterClick}>
            <IconInButton>
              <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} />
            </IconInButton>
            Email
          </EmailButton>
        </SmallButtonsWrapper>
        <AltDescription>
          {'Make.org s‘engage à protéger vos '}
          <DescriptionLink href="https://about.make.org/politique-donnees" target="_blank">
            {'données personnelles '}
            <IconInButton>
              <FontAwesomeIcon aria-label="Ouverture dans un nouvel onglet" icon={faExternalLinkAlt} />
            </IconInButton>
          </DescriptionLink>
        </AltDescription>
        <Separators.Small aria-hidden="true" />
        <SecondLevelTitle>J’ai déjà un compte</SecondLevelTitle>
        <ButtonsWrapper>
          <SmallRedButton onClick={handleLoginClick}>
            Je me connecte
          </SmallRedButton>
        </ButtonsWrapper>
      </ProposalSubmitAuthentificationWrapper>
    );
  }
}

export default ProposalSubmitAuthentificationComponent;
