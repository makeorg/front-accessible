/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import type { UserObject, ErrorObject } from 'Shared/types/form';
import { SecondLevelTitleStyle, ThirdLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ExtraParagraphStyle } from 'Client/ui/Elements/Form/Styled';
import FacebookAuthentificationLinkComponent from 'Client/features/auth/Social/FacebookAuthentification/Link';
import GoogleAuthentificationLinkComponent from 'Client/features/auth/Social/GoogleAuthentification/Link';
import RegisterFormComponent from './Form';
import Register from './Styled';

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
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginPannel: () => void,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void
}

/**
 * Renders Register component
 */
export const RegisterComponent = (props: Props) => {
  const {
    isPannelOpen,
    handleLoginPannel
  } = props;

  return (
    <Register role="region" aria-labelledby="register_title">
      <SecondLevelTitleStyle id="register_title">
        {i18next.t('register.title')}
      </SecondLevelTitleStyle>
      <Separators.Small />
      <ThirdLevelTtitleStyle>
        {i18next.t('register.social_connect')}
        &nbsp;
        <FacebookAuthentificationLinkComponent
          tabIndex={isPannelOpen ? 0 : -1}
        />
        &nbsp;
        {i18next.t('register.or')}
        &nbsp;
        <GoogleAuthentificationLinkComponent
          tabIndex={isPannelOpen ? 0 : -1}
        />
      </ThirdLevelTtitleStyle>
      <Separators.Wrapper>
        <Separators.Large />
        <Separators.Text>{i18next.t('register.or')}</Separators.Text>
        <Separators.Large />
      </Separators.Wrapper>
      <ThirdLevelTtitleStyle>
        {i18next.t('register.subtitle')}
      </ThirdLevelTtitleStyle>
      <RegisterFormComponent {...props} />
      <ExtraParagraphStyle>
        {i18next.t('register.login_title')}
        <RedLinkButtonStyle onClick={handleLoginPannel} tabIndex={isPannelOpen ? 0 : -1}>
          {i18next.t('register.login_link')}
        </RedLinkButtonStyle>
      </ExtraParagraphStyle>
    </Register>
  );
};
