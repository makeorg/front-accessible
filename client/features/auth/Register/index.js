// @flow
import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  SecondLevelTitleStyle,
  ThirdLevelTitleStyle,
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
import { RegisterStyle } from './Styled';

type Props = {
  /** Method called to close modal */
  handleLoginModal: () => void,
};

export const RegisterComponent = ({ handleLoginModal }: Props) => {
  return (
    <RegisterStyle aria-labelledby="register_title">
      <SecondLevelTitleStyle id="register_title">
        {i18n.t('register.title')}
      </SecondLevelTitleStyle>
      <SmallSeparatorWithMarginStyle />
      <ThirdLevelTitleStyle>
        {i18n.t('register.social_connect')}
        &nbsp;
        <FacebookAuthentificationLinkComponent />
        &nbsp;
        {i18n.t('register.or')}
        &nbsp;
        <GoogleAuthentificationLinkComponent />
      </ThirdLevelTitleStyle>
      <SeparatorWrapperStyle>
        <LargeSeparatorStyle />
        <TextSeparatorStyle>{i18n.t('register.or')}</TextSeparatorStyle>
        <LargeSeparatorStyle />
      </SeparatorWrapperStyle>
      <ThirdLevelTitleStyle>{i18n.t('register.subtitle')}</ThirdLevelTitleStyle>
      <RegisterForm />
      <ExtraParagraphStyle>
        {i18n.t('register.login_title')}
        <RedLinkButtonStyle onClick={handleLoginModal}>
          {i18n.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
    </RegisterStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  handleLoginModal: () => {
    dispatch(modalShowLogin());
  },
});

export const Register = connect(
  null,
  mapDispatchToProps
)(RegisterComponent);
