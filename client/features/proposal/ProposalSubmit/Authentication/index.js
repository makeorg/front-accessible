// @flow
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  trackDisplayAuthenticationForm,
  trackClickPersonnalDataLink,
} from 'Shared/services/Tracking';
import { type StateRoot } from 'Shared/store/types';
import {
  RedButtonStyle,
  EmailButtonStyle,
  IconWrapperStyle,
  ButtonsWrapperStyle,
  ButtonSmallWrapperStyle,
} from 'Client/ui/Elements/Buttons/style';
import {
  ThirdLevelTitleStyle,
  FourthLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { FacebookAuthentication } from 'Client/features/auth/Social/FacebookAuthentication';
import { GoogleAuthentication } from 'Client/features/auth/Social/GoogleAuthentication';
import { SvgEnvelope } from 'Client/ui/Svg/elements';
import { getDataPageLink } from 'Shared/helpers/url';
import { modalShowRegister, modalShowLogin } from 'Shared/store/actions/modal';
import {
  ProposalSubmitAuthenticationWrapperStyle,
  ProposalSubmitSeparatorStyle,
} from '../Styled';

/**
 * Renders authentication component after proposal submit button is clicked
 */
export const ProposalSubmitAuthentication = () => {
  const authetificationRef = useRef(null);
  const dispatch = useDispatch();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  useEffect(() => {
    trackDisplayAuthenticationForm();
  }, []);

  useEffect(() => {
    if (authetificationRef.current) {
      authetificationRef.current.focus();
    }
  }, [authetificationRef.current]);

  return (
    <ProposalSubmitAuthenticationWrapperStyle
      id="proposal-submit-authentication"
      ref={authetificationRef}
      tabIndex={0}
    >
      <ThirdLevelTitleStyle>
        {i18n.t('authentication.title')}
      </ThirdLevelTitleStyle>
      <FourthLevelTitleStyle>
        {i18n.t('authentication.description')}
      </FourthLevelTitleStyle>
      <ButtonSmallWrapperStyle>
        <FacebookAuthentication />
        <GoogleAuthentication />
        <EmailButtonStyle
          onClick={() => dispatch(modalShowRegister())}
          id="authentication-register-button"
        >
          <IconWrapperStyle>
            <SvgEnvelope />
          </IconWrapperStyle>
          {i18n.t('common.email')}
        </EmailButtonStyle>
      </ButtonSmallWrapperStyle>
      <CenterParagraphStyle>
        {i18n.t('authentication.commitment')}
        <a
          href={getDataPageLink(country, language)}
          rel="noopener noreferrer"
          onClick={() => trackClickPersonnalDataLink()}
        >
          {i18n.t('authentication.personal_data')}
        </a>
      </CenterParagraphStyle>
      <ProposalSubmitSeparatorStyle />
      <ThirdLevelTitleStyle>{i18n.t('login.title')}</ThirdLevelTitleStyle>
      <ButtonsWrapperStyle>
        <RedButtonStyle
          onClick={() => dispatch(modalShowLogin())}
          id="authentication-login-button"
        >
          {i18n.t('login.button_connect')}
        </RedButtonStyle>
      </ButtonsWrapperStyle>
    </ProposalSubmitAuthenticationWrapperStyle>
  );
};
