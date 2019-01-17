/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { SecondLevelTitle, ThirdLevelTtitle } from 'Components/Elements/TitleElements';
import * as Separators from 'Components/Elements/Separators';
import { RedLinkButton } from 'Components/Elements/ButtonElements';
import { ExtraParagraph } from 'Components/Elements/Form';
import FacebookAuthentificationLinkComponent from 'Components/Authentification/Social/FacebookAuthentification/Link';
import GoogleAuthentificationLinkComponent from 'Components/Authentification/Social/GoogleAuthentification/Link';
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
  user: userObject,
  /** Array with form errors */
  errors: Array<string>,
  /** Method called when field's value changes */
  handleChange: () => void,
  /** Method called when field's value is submitted */
  handleSubmit: () => void,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginPannel: () => void,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean
}

/**
 * Renders Register component
 */
const RegisterComponent = (props: Props) => {
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

export default RegisterComponent;
