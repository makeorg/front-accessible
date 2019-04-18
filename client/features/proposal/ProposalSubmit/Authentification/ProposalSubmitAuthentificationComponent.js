// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question } from 'Shared/types/question';
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
import * as UrlHelper from 'Shared/helpers/url';
import { SvgEnvelope, SvgExternalLink } from 'Client/ui/Svg/elements';
import {
  ProposalSubmitAuthentificationWrapperStyle,
  ProposalSubmitSeparatorStyle,
} from '../Styled';

type Props = {
  question: Question,
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
    question,
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
          href={UrlHelper.localizeExternal(
            DATA_POLICY_LINK,
            question.country,
            question.language
          )}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackPersonnalDataLink}
        >
          {i18n.t('authentification.personal_data')}
          <IconWrapperStyle>
            <SvgExternalLink aria-label={i18n.t('common.open_new_window')} />
          </IconWrapperStyle>
        </a>
      </CenterParagraphStyle>
      <ProposalSubmitSeparatorStyle aria-hidden />
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
