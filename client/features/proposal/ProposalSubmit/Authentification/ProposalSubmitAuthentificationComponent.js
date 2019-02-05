// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  RedButtonStyle,
  EmailButtonStyle,
  IconInButtonStyle,
  ButtonsWrapperStyle,
  SmallButtonWrapperStyle
} from 'Client/ui/Elements/ButtonElements';
import { SecondLevelTitleStyle, ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import { AltDescriptionStyle, DescriptionLinkStyle } from 'Client/ui/Elements/DescriptionElements';
import * as Separators from 'Client/ui/Elements/Separators';
import FacebookAuthentificationButtonComponent
  from 'Client/features/auth/Social/FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from 'Client/features/auth/Social/GoogleAuthentification/Button';
import { localizeDataPolicyLink } from 'Shared/helpers/url';
import ProposalSubmitAuthentificationWrapper from '../Styled/Authentification';

type Props = {
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterClick: Function,
  /** Method called to render Register Component in Sliding Pannel */
  handleLoginClick: Function,
  /** Method called to track DescriptionLinkStyle */
  trackPersonnalDataLink: Function,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean
}

/**
 * Renders authentification component after proposal submit button is clicked
 */
export const ProposalSubmitAuthentificationComponent = (props: Props) => {
  const {
    handleRegisterClick,
    handleLoginClick,
    trackPersonnalDataLink,
    isPannelOpen
  } = props;

  return (
    <ProposalSubmitAuthentificationWrapper id="proposal-submit-authentification">
      <SecondLevelTitleStyle>{i18next.t('authentification.title')}</SecondLevelTitleStyle>
      <ThirdLevelTtitleStyle>
        {i18next.t('authentification.description')}
      </ThirdLevelTtitleStyle>
      <SmallButtonWrapperStyle>
        <FacebookAuthentificationButtonComponent
          tabIndex={isPannelOpen ? -1 : 0}
        />
        <GoogleAuthentificationButtonComponent
          tabIndex={isPannelOpen ? -1 : 0}
        />
        <EmailButtonStyle
          onClick={handleRegisterClick}
          tabIndex={isPannelOpen ? -1 : 0}
          id="authentification-register-button"
        >
          <IconInButtonStyle>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconInButtonStyle>
          {i18next.t('common.email')}
        </EmailButtonStyle>
      </SmallButtonWrapperStyle>
      <AltDescriptionStyle>
        {i18next.t('authentification.commitment')}
        <DescriptionLinkStyle
          href={localizeDataPolicyLink()}
          target="_blank"
          tabIndex={isPannelOpen ? -1 : 0}
          onClick={trackPersonnalDataLink}
        >
          {i18next.t('authentification.personal_data')}
          <IconInButtonStyle>
            <FontAwesomeIcon aria-label={i18next.t('common.open_new_window')} icon={faExternalLinkAlt} />
          </IconInButtonStyle>
        </DescriptionLinkStyle>
      </AltDescriptionStyle>
      <Separators.Small aria-hidden />
      <SecondLevelTitleStyle>{i18next.t('login.title')}</SecondLevelTitleStyle>
      <ButtonsWrapperStyle>
        <RedButtonStyle
          onClick={handleLoginClick}
          tabIndex={isPannelOpen ? -1 : 0}
          id="authentification-login-button"
        >
          {i18next.t('login.button_connect')}
        </RedButtonStyle>
      </ButtonsWrapperStyle>
    </ProposalSubmitAuthentificationWrapper>
  );
};
