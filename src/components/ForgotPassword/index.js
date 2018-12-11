/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { ExtraAltParagraph } from 'Components/Elements/Form';
import { SecondLevelTitle, FourthLevelTtitle } from 'Components/Elements/TitleElements';
import * as Separators from 'Components/Elements/Separators';
import { RedLinkButton } from 'Components/Elements/ButtonElements';
import ForgotPasswordFormComponent from './Form';
import ForgotPassword from './Styled';

type Props = {
  isSuccess: boolean,
  isPannelOpen: boolean,
  handleLoginPannel: Function
};

const ForgotPasswordComponent = (props: Props) => {
  const { handleLoginPannel, isSuccess, isPannelOpen } = props;

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

export default ForgotPasswordComponent;
