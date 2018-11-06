import React from 'react';
import i18next from 'i18next';
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
    const {
      handleRegisterClick,
      handleLoginClick,
      isPannelOpen,
      trackFacebookSignUpButton,
      trackGoogleSignUpButton,
      trackPersonnalDataLink
    } = this.props;

    return (
      <ProposalSubmitAuthentificationWrapper>
        <SecondLevelTitle>{i18next.t('authentification.title')}</SecondLevelTitle>
        <ThirdLevelTtitle>
          {i18next.t('authentification.description')}
        </ThirdLevelTtitle>
        <SmallButtonsWrapper>
          <FacebookAuthentificationButtonComponent
            tabIndex={isPannelOpen ? -1 : 0}
            handleTracking={trackFacebookSignUpButton}
          />
          <GoogleAuthentificationButtonComponent
            tabIndex={isPannelOpen ? -1 : 0}
            handleTracking={trackGoogleSignUpButton}
          />
          <EmailButton
            onClick={handleRegisterClick}
            tabIndex={isPannelOpen ? -1 : 0}
          >
            <IconInButton>
              <FontAwesomeIcon aria-hidden icon={faEnvelope} />
            </IconInButton>
            {i18next.t('common.email')}
          </EmailButton>
        </SmallButtonsWrapper>
        <AltDescription>
          {i18next.t('authentification.commitment')}
          <DescriptionLink
            href="https://about.make.org/politique-donnees"
            target="_blank"
            tabIndex={isPannelOpen ? -1 : 0}
            onClick={trackPersonnalDataLink}
          >
            {i18next.t('authentification.personal_data')}
            <IconInButton>
              <FontAwesomeIcon aria-label={i18next.t('common.open_new_window')} icon={faExternalLinkAlt} />
            </IconInButton>
          </DescriptionLink>
        </AltDescription>
        <Separators.Small aria-hidden />
        <SecondLevelTitle>{i18next.t('login.title')}</SecondLevelTitle>
        <ButtonsWrapper>
          <SmallRedButton
            onClick={handleLoginClick}
            tabIndex={isPannelOpen ? -1 : 0}
          >
            {i18next.t('common.i_connect')}
          </SmallRedButton>
        </ButtonsWrapper>
      </ProposalSubmitAuthentificationWrapper>
    );
  }
}

export default ProposalSubmitAuthentificationComponent;
