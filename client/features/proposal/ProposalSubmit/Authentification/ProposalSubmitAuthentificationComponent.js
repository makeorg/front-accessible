// @flow
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  trackDisplayAuthentificationForm,
  trackClickPersonnalDataLink,
} from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
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
import { getDataPageLink } from 'Shared/helpers/url';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import {
  ProposalSubmitAuthentificationWrapperStyle,
  ProposalSubmitSeparatorStyle,
} from '../Styled';

/**
 * Renders authentification component after proposal submit button is clicked
 */
export const ProposalSubmitAuthentificationComponent = () => {
  const authetificationRef = useRef(null);
  const dispatch = useDispatch();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  useEffect(() => {
    trackDisplayAuthentificationForm();
  }, []);

  useEffect(() => {
    if (authetificationRef.current) {
      authetificationRef.current.focus();
    }
  }, [authetificationRef.current]);

  return (
    <ProposalSubmitAuthentificationWrapperStyle
      id="proposal-submit-authentification"
      ref={authetificationRef}
      tabIndex={0}
    >
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
          onClick={() => dispatch(modalShowRegister())}
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
          href={getDataPageLink(country, language)}
          rel="noopener noreferrer"
          onClick={() => trackClickPersonnalDataLink()}
        >
          {i18n.t('authentification.personal_data')}
        </a>
      </CenterParagraphStyle>
      <ProposalSubmitSeparatorStyle />
      <ThirdLevelTitleStyle>{i18n.t('login.title')}</ThirdLevelTitleStyle>
      <ButtonsWrapperStyle>
        <RedButtonStyle
          onClick={() => dispatch(modalShowLogin())}
          id="authentification-login-button"
        >
          {i18n.t('login.button_connect')}
        </RedButtonStyle>
      </ButtonsWrapperStyle>
    </ProposalSubmitAuthentificationWrapperStyle>
  );
};
