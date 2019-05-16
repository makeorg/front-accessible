/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type RegisterFormData as TypeRegisterFormData } from 'Shared/types/form';
import { type ErrorObject as TypeErrorObject } from 'Shared/types/api';
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
import { RegisterFormComponent } from './Form';
import { RegisterStyle } from './Styled';

type Props = {
  /** User form data */
  user: TypeRegisterFormData,
  /** Array with form errors */
  errors: TypeErrorObject[],
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticInputEvent<HTMLButtonElement>) => void,
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
};

/**
 * Renders Register component
 */
export const RegisterComponent = (props: Props) => {
  const { user, errors, handleChange, handleSubmit, handleLoginModal } = props;

  return (
    <RegisterStyle role="region" aria-labelledby="register_title">
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
      <RegisterFormComponent
        user={user}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ExtraParagraphStyle>
        {i18n.t('register.login_title')}
        <RedLinkButtonStyle onClick={handleLoginModal}>
          {i18n.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
    </RegisterStyle>
  );
};
