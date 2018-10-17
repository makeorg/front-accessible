import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { EmailButton, IconInButton, ButtonsWrapper } from '../Elements/ButtonElements';
import { SecondLevelTitle, ThirdLevelTtitle } from '../Elements/TitleElements';
import { AltDescription, DescriptionLink } from '../Elements/DescriptionElements';
import { SmallSep } from '../Elements/Separators';
import FacebookAuthentificationButtonComponent from '../Authentification/Social/FacebookAuthentificationButton';
import GoogleAuthentificationButtonComponent from '../Authentification/Social/GoogleAuthentificationButton';
import ProposalSubmitAuthentificationWrapper from './Styled/Authentification';

class ProposalSubmitAuthentificationComponent extends React.Component {
  render() {
    const { handleRegisterClick, handleLoginClick } = this.props;

    return (
      <ProposalSubmitAuthentificationWrapper>
        <SecondLevelTitle>Créez un compte Make.org</SecondLevelTitle>
        <ThirdLevelTtitle>
          pour valider votre contribution et être informé(e) des résultats de la consultation.
        </ThirdLevelTtitle>
        <ButtonsWrapper>
          <FacebookAuthentificationButtonComponent />
          <GoogleAuthentificationButtonComponent />
          <EmailButton onClick={handleRegisterClick}>
            <IconInButton>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconInButton>
            Email
          </EmailButton>
        </ButtonsWrapper>
        <AltDescription>
          Make.org s&apos;engage à protéger vos
          <DescriptionLink>
            données personnelles &nbsp;
            <IconInButton>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </IconInButton>
          </DescriptionLink>
        </AltDescription>
        <SmallSep />
        <SecondLevelTitle>J’ai déjà un compte</SecondLevelTitle>
        <ButtonsWrapper>
          <EmailButton onClick={handleLoginClick}>
            Je me connecte
          </EmailButton>
        </ButtonsWrapper>
      </ProposalSubmitAuthentificationWrapper>
    );
  }
}

export default ProposalSubmitAuthentificationComponent;
