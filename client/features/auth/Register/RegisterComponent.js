/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type UserObject, type ErrorObject } from 'Shared/types/form';
import {
  SecondLevelTitleStyle,
  ThirdLevelTtitleStyle,
} from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ExtraParagraphStyle } from 'Client/ui/Elements/Form/Styled/Content';
import { FacebookAuthentificationLinkComponent } from 'Client/features/auth/Social/FacebookAuthentification/Link';
import { GoogleAuthentificationLinkComponent } from 'Client/features/auth/Social/GoogleAuthentification/Link';
import { RegisterFormComponent } from './Form';
import { RegisterStyle } from './Styled';

type Props = {
  /** type userObject = {
    email: string,
    password: string,
    firstname: string,
    age: string,
    postalcode: string,
    profession: string
  } */
  user: UserObject,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called to render Login Component in Modal */
  handleLoginModal: () => void,
};

/**
 * Renders Register component
 */
export const RegisterComponent = (props: Props) => {
  const { handleLoginModal } = props;

  return (
    <RegisterStyle role="region" aria-labelledby="register_title">
      <SecondLevelTitleStyle id="register_title">
        {i18n.t('register.title')}
      </SecondLevelTitleStyle>
      <Separators.SmallWithMargin />
      <ThirdLevelTtitleStyle>
        {i18n.t('register.social_connect')}
        &nbsp;
        <FacebookAuthentificationLinkComponent />
        &nbsp;
        {i18n.t('register.or')}
        &nbsp;
        <GoogleAuthentificationLinkComponent />
      </ThirdLevelTtitleStyle>
      <Separators.Wrapper>
        <Separators.Large />
        <Separators.Text>{i18n.t('register.or')}</Separators.Text>
        <Separators.Large />
      </Separators.Wrapper>
      <ThirdLevelTtitleStyle>
        {i18n.t('register.subtitle')}
      </ThirdLevelTtitleStyle>
      <RegisterFormComponent {...props} />
      <ExtraParagraphStyle>
        {i18n.t('register.login_title')}
        <RedLinkButtonStyle onClick={handleLoginModal}>
          {i18n.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
    </RegisterStyle>
  );
};
