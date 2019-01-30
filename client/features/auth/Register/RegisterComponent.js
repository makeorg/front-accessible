/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import type { UserObject, ErrorObject } from 'Shared/types/form';
import { SecondLevelTitle, ThirdLevelTtitle } from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButton } from 'Client/ui/Elements/ButtonElements';
import { ExtraParagraph } from 'Client/ui/Elements/Form';
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
      <SecondLevelTitle id="register_title">
        {i18next.t('register.title')}
      </SecondLevelTitle>
      <Separators.Small />
      <ThirdLevelTtitle>
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
      </ThirdLevelTtitle>
      <Separators.Wrapper>
        <Separators.Large />
        <Separators.Text>{i18next.t('register.or')}</Separators.Text>
        <Separators.Large />
      </Separators.Wrapper>
      <ThirdLevelTtitle>
        {i18next.t('register.subtitle')}
      </ThirdLevelTtitle>
      <RegisterFormComponent {...props} />
      <ExtraParagraph>
        {i18next.t('register.login_title')}
        <RedLinkButton onClick={handleLoginPannel} tabIndex={isPannelOpen ? 0 : -1}>
          {i18next.t('register.login_link')}
        </RedLinkButton>
      </ExtraParagraph>
    </Register>
  );
};
