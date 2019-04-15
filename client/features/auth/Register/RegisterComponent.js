/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import {
  SecondLevelTitleStyle,
  ThirdLevelTitleStyle,
} from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ExtraParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FacebookAuthentificationLinkComponent } from 'Client/features/auth/Social/FacebookAuthentification/Link';
import { GoogleAuthentificationLinkComponent } from 'Client/features/auth/Social/GoogleAuthentification/Link';
import { RegisterFormComponent } from './Form';
import { RegisterStyle } from './Styled';

type Props = {
  /** Current country */
  country: string,
  /** Current language */
  language: string,
  /** User form data */
  user: UserObject,
  /** Array with form errors */
  errors: Array<ErrorObject>,
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
  const {
    country,
    language,
    user,
    errors,
    handleChange,
    handleSubmit,
    handleLoginModal,
  } = props;

  return (
    <RegisterStyle role="region" aria-labelledby="register_title">
      <SecondLevelTitleStyle id="register_title">
        {i18n.t('register.title')}
      </SecondLevelTitleStyle>
      <Separators.SmallWithMargin />
      <ThirdLevelTitleStyle>
        {i18n.t('register.social_connect')}
        &nbsp;
        <FacebookAuthentificationLinkComponent />
        &nbsp;
        {i18n.t('register.or')}
        &nbsp;
        <GoogleAuthentificationLinkComponent />
      </ThirdLevelTitleStyle>
      <Separators.Wrapper>
        <Separators.Large />
        <Separators.Text>{i18n.t('register.or')}</Separators.Text>
        <Separators.Large />
      </Separators.Wrapper>
      <ThirdLevelTitleStyle>{i18n.t('register.subtitle')}</ThirdLevelTitleStyle>
      <RegisterFormComponent
        country={country}
        language={language}
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
