// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { DATA_POLICY_LINK } from 'Shared/constants/url';
import {
  RedButtonStyle,
  EmailButtonStyle,
  IconWrapperStyle,
  ButtonsWrapperStyle,
  ButtonSmallWrapperStyle,
} from 'Client/ui/Elements/ButtonElements';
import {
  ThirdLevelTitleStyle,
  FourthLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { FacebookAuthentificationButtonComponent } from 'Client/features/auth/Social/FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from 'Client/features/auth/Social/GoogleAuthentification/Button';
import { SvgEnvelope } from 'Client/ui/Svg/elements';
import {
  ProposalSubmitAuthentificationWrapperStyle,
  ProposalSubmitSeparatorStyle,
} from '../Styled';

type Props = {
  /** Method called to render Register Component in Modal */
  handleRegisterClick: () => void,
  /** Method called to render Register Component in Modal */
  handleLoginClick: () => void,
  /** Method called to track link */
  trackPersonnalDataLink: () => void,
};

/**
 * Renders authentification component after proposal submit button is clicked
 */
export const ProposalSubmitAuthentificationComponent = (props: Props) => {
  const {
    handleRegisterClick,
    handleLoginClick,
    trackPersonnalDataLink,
  } = props;

  return (
    <ProposalSubmitAuthentificationWrapperStyle id="proposal-submit-authentification">
      <ThirdLevelTitleStyle>
        {i18n.t('authentification.title')}
      </ThirdLevelTitleStyle>
      <FourthLevelTitleStyle>
        {i18n.t('authentification.description')}
      </FourthLevelTitleStyle>
      <ButtonSmallWrapperStyle>
        <FacebookAuthentificationButtonComponent />
        <GoogleAuthentificationButtonComponent />
        <EmailButtonStyle
          onClick={handleRegisterClick}
          id="authentification-register-button"
        >
          <IconWrapperStyle>
            <SvgEnvelope aria-hidden />
          </IconWrapperStyle>
          {i18n.t('common.email')}
        </EmailButtonStyle>
      </ButtonSmallWrapperStyle>
      <CenterParagraphStyle>
        {i18n.t('authentification.commitment')}
        <a
          href={DATA_POLICY_LINK}
          rel="noopener noreferrer"
          onClick={trackPersonnalDataLink}
        >
          {i18n.t('authentification.personal_data')}
        </a>
      </CenterParagraphStyle>
      <ProposalSubmitSeparatorStyle />
      <ThirdLevelTitleStyle>{i18n.t('login.title')}</ThirdLevelTitleStyle>
      <ButtonsWrapperStyle>
        <RedButtonStyle
          onClick={handleLoginClick}
          id="authentification-login-button"
        >
          {i18n.t('login.button_connect')}
        </RedButtonStyle>
      </ButtonsWrapperStyle>
    </ProposalSubmitAuthentificationWrapperStyle>
  );
};
