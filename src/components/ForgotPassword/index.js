/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import ForgotPasswordFormComponent from './Form';
import ForgotPassword from './Styled';
import { ExtraAltParagraph } from '../Elements/Form';
import { SecondLevelTitle, FourthLevelTtitle } from '../Elements/TitleElements';
import * as Separators from '../Elements/Separators';
import { RedLinkButton } from '../Elements/ButtonElements';

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
