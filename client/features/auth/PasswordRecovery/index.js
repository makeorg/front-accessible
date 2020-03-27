// @flow
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { selectPasswordRecovery } from 'Shared/store/selectors/user.selector';
import { PasswordRecoveryForm } from './Form';
import { PasswordRecoveryStyle, PasswordRecoveryTitleStyle } from './style';

export const PasswordRecoverySuccess = () => (
  <Fragment>
    <SecondLevelTitleStyle id="password_recovery_title">
      {i18n.t('reset_password.success.title')}
    </SecondLevelTitleStyle>
  </Fragment>
);

/**
 * Renders Password Recovery component
 */
export const PasswordRecovery = () => {
  const { updated } = useSelector((state: StateRoot) =>
    selectPasswordRecovery(state)
  );
  return (
    <PasswordRecoveryStyle aria-labelledby="password_recovery_title">
      {updated ? (
        <PasswordRecoverySuccess />
      ) : (
        <>
          <SecondLevelTitleStyle id="password_recovery_title">
            {i18n.t('reset_password.title')}
          </SecondLevelTitleStyle>
          <SmallSeparatorWithMarginStyle />
          <>
            <PasswordRecoveryTitleStyle>
              {i18n.t('reset_password.info')}
            </PasswordRecoveryTitleStyle>
            <PasswordRecoveryForm />
          </>
        </>
      )}
    </PasswordRecoveryStyle>
  );
};
