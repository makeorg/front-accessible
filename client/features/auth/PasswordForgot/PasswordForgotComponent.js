/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import type { ErrorObject } from 'Shared/types/form';
import { ExtraAltParagraph } from 'Client/ui/Elements/Form';
import { SecondLevelTitle, FourthLevelTtitle } from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { RedLinkButton } from 'Client/ui/Elements/ButtonElements';
import ForgotPasswordFormComponent from './Form';
import ForgotPassword from './Styled';

type Props = {
  /** User's email */
  email: string,
  /** Array with form errors */
  errors: Array<ErrorObject>,
  /** Method called when field's value changes */
  handleChange: Function,
  /** Method called when field's value is submitted */
  handleSubmit: Function,
  /** Boolean toggled when form is successfully submitted */
  isSuccess: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to render Login Component in Sliding Pannel */
  handleLoginPannel: Function
};

/**
 * Renders Forgot Password component
 */
export const PasswordForgotComponent = (props: Props) => {
  const {
    isSuccess,
    isPannelOpen,
    handleLoginPannel
  } = props;

  return (
    <ForgotPassword role="region" aria-labelledby="forgot_password_title">
      <SecondLevelTitle id="forgot_password_title">
        {i18next.t('forgot_password.title')}
      </SecondLevelTitle>
      <Separators.Small />
      {isSuccess ? (
        <FourthLevelTtitle>
          {i18next.t('forgot_password.success')}
        </FourthLevelTtitle>
      ) : (
        <React.Fragment>
          <FourthLevelTtitle>
            {i18next.t('forgot_password.description')}
          </FourthLevelTtitle>
          <ForgotPasswordFormComponent {...props} />
        </React.Fragment>
      )}
      <ExtraAltParagraph>
        {i18next.t('forgot_password.return')}
        <RedLinkButton
          tabIndex={isPannelOpen ? 0 : -1}
          onClick={handleLoginPannel}
        >
          {i18next.t('forgot_password.login_link')}
        </RedLinkButton>
      </ExtraAltParagraph>
    </ForgotPassword>
  );
};
