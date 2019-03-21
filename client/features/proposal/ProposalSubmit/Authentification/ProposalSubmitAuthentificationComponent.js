// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Question } from 'Shared/types/question';
import {
  faEnvelope,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  RedButtonStyle,
  EmailButtonStyle,
  IconWrapperStyle,
  ButtonsWrapperStyle,
  SmallButtonWrapperStyle,
} from 'Client/ui/Elements/ButtonElements';
import {
  ThirdLevelTtitleStyle,
  FourthLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { FacebookAuthentificationButtonComponent } from 'Client/features/auth/Social/FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from 'Client/features/auth/Social/GoogleAuthentification/Button';
import { localizeDataPolicyLink } from 'Shared/helpers/url';
import { ProposalSubmitAuthentificationWrapperStyle } from '../Styled';

type Props = {
  question: Question,
  /** Method called to render Register Component in Sliding Pannel */
  handleRegisterClick: () => void,
  /** Method called to render Register Component in Sliding Pannel */
  handleLoginClick: () => void,
  /** Method called to track link */
  trackPersonnalDataLink: () => void,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
};

/**
 * Renders authentification component after proposal submit button is clicked
 */
export const ProposalSubmitAuthentificationComponent = (props: Props) => {
  const {
    question,
    handleRegisterClick,
    handleLoginClick,
    trackPersonnalDataLink,
    isPannelOpen,
  } = props;

  return (
    <ProposalSubmitAuthentificationWrapperStyle id="proposal-submit-authentification">
      <ThirdLevelTtitleStyle>
        {i18n.t('authentification.title')}
      </ThirdLevelTtitleStyle>
      <FourthLevelTitleStyle>
        {i18n.t('authentification.description')}
      </FourthLevelTitleStyle>
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
          <IconWrapperStyle>
            <FontAwesomeIcon aria-hidden icon={faEnvelope} />
          </IconWrapperStyle>
          {i18n.t('common.email')}
        </EmailButtonStyle>
      </SmallButtonWrapperStyle>
      <CenterParagraphStyle>
        {i18n.t('authentification.commitment')}
        <a
          href={localizeDataPolicyLink(question.country, question.language)}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isPannelOpen ? -1 : 0}
          onClick={trackPersonnalDataLink}
        >
          {i18n.t('authentification.personal_data')}
          <IconWrapperStyle>
            <FontAwesomeIcon
              aria-label={i18n.t('common.open_new_window')}
              icon={faExternalLinkAlt}
            />
          </IconWrapperStyle>
        </a>
      </CenterParagraphStyle>
      <Separators.Small aria-hidden />
      <ThirdLevelTtitleStyle>{i18n.t('login.title')}</ThirdLevelTtitleStyle>
      <ButtonsWrapperStyle>
        <RedButtonStyle
          onClick={handleLoginClick}
          tabIndex={isPannelOpen ? -1 : 0}
          id="authentification-login-button"
        >
          {i18n.t('login.button_connect')}
        </RedButtonStyle>
      </ButtonsWrapperStyle>
    </ProposalSubmitAuthentificationWrapperStyle>
  );
};
