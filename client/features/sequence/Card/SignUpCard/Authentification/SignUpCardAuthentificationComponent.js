/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import {
  EmailButtonStyle,
  IconWrapperStyle,
  SmallButtonWrapperStyle,
  RedLinkButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { ExtraAltParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FacebookAuthentificationButtonComponent } from 'Client/features/auth/Social/FacebookAuthentification/Button';
import { GoogleAuthentificationButtonComponent } from 'Client/features/auth/Social/GoogleAuthentification/Button';
import { SvgEnvelope } from 'Client/ui/Svg/elements';

type Props = {
  /** Method called to render Register Pannel */
  handleRegisterClick: () => void,
  /** Method called to render Login Pannel */
  handleLoginClick: () => void,
  /** Tabindex for interactive items */
  tabIndex: number,
};

/**
 * Renders Authentification in Sign Up Card
 */
export const SignUpCardAuthentificationComponent = (props: Props) => {
  const { handleRegisterClick, handleLoginClick, tabIndex } = props;

  return (
    <CenterColumnStyle>
      <SmallButtonWrapperStyle>
        <FacebookAuthentificationButtonComponent tabIndex={tabIndex} />
        <GoogleAuthentificationButtonComponent tabIndex={tabIndex} />
        <EmailButtonStyle
          onClick={handleRegisterClick}
          tabIndex={tabIndex}
          id="authentification-register-button"
        >
          <IconWrapperStyle>
            <SvgEnvelope aria-hidden />
          </IconWrapperStyle>
          {i18n.t('common.email')}
        </EmailButtonStyle>
      </SmallButtonWrapperStyle>
      <ExtraAltParagraphStyle>
        {i18n.t('register.login_title')}
        <RedLinkButtonStyle tabIndex={tabIndex} onClick={handleLoginClick}>
          {i18n.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraAltParagraphStyle>
    </CenterColumnStyle>
  );
};
