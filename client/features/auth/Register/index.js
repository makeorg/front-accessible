// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  SecondLevelTitleStyle,
  FourthLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import {
  SmallSeparatorWithMarginStyle,
  LargeSeparatorStyle,
  SeparatorWrapperStyle,
  TextSeparatorStyle,
} from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ExtraParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FacebookAuthentificationLinkComponent } from 'Client/features/auth/Social/FacebookAuthentification/Link';
import { GoogleAuthentificationLinkComponent } from 'Client/features/auth/Social/GoogleAuthentification/Link';
import { modalShowLogin } from 'Shared/store/actions/modal';
import { RegisterForm } from './Form';
import { AuthentificationWrapperStyle } from '../Login/Styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handleLoginModal = () => {
    dispatch(modalShowLogin());
  };

  return (
    <AuthentificationWrapperStyle aria-labelledby="register_title">
      <SecondLevelTitleStyle id="register_title">
        {i18n.t('register.title')}
      </SecondLevelTitleStyle>
      <SmallSeparatorWithMarginStyle />
      <FourthLevelTitleStyle as="h3">
        {i18n.t('register.social_connect')}
        &nbsp;
        <FacebookAuthentificationLinkComponent />
        &nbsp;
        {i18n.t('register.or')}
        &nbsp;
        <GoogleAuthentificationLinkComponent />
      </FourthLevelTitleStyle>
      <SeparatorWrapperStyle>
        <LargeSeparatorStyle />
        <TextSeparatorStyle>{i18n.t('register.or')}</TextSeparatorStyle>
        <LargeSeparatorStyle />
      </SeparatorWrapperStyle>
      <FourthLevelTitleStyle as="h3">
        {i18n.t('register.subtitle')}
      </FourthLevelTitleStyle>
      <RegisterForm />
      <ExtraParagraphStyle>
        {i18n.t('register.login_title')}
        <RedLinkButtonStyle onClick={handleLoginModal}>
          {i18n.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
    </AuthentificationWrapperStyle>
  );
};
