// @flow
import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SmallSeparatorWithMarginStyle } from 'Client/ui/Elements/Separators';
import { selectPasswordRecovery } from 'Shared/store/selectors/user.selector';
import { PasswordRecoveryForm } from './Form';
import { PasswordRecoveryStyle, PasswordRecoveryTitleStyle } from './Styled';

export const PasswordRecoverySuccess = () => (
  <React.Fragment>
    <SecondLevelTitleStyle id="password_recovery_title">
      {i18n.t('reset_password.success.title')}
    </SecondLevelTitleStyle>
  </React.Fragment>
);

type Props = {
  /** Boolean toggled when form is successfully submitted */
  updated: boolean,
};

/**
 * Renders Password Recovery component
 */
export const PasswordRecoveryComponent = ({ updated }: Props) => {
  return (
    <PasswordRecoveryStyle aria-labelledby="password_recovery_title">
      {updated ? (
        <PasswordRecoverySuccess />
      ) : (
        <React.Fragment>
          <SecondLevelTitleStyle id="password_recovery_title">
            {i18n.t('reset_password.title')}
          </SecondLevelTitleStyle>
          <SmallSeparatorWithMarginStyle />
          <React.Fragment>
            <PasswordRecoveryTitleStyle>
              {i18n.t('reset_password.info')}
            </PasswordRecoveryTitleStyle>
            <PasswordRecoveryForm />
          </React.Fragment>
        </React.Fragment>
      )}
    </PasswordRecoveryStyle>
  );
};

const mapStateToProps = state => {
  const { updated } = selectPasswordRecovery(state);

  return { updated };
};

export const PasswordRecovery = connect(
  mapStateToProps,
  null
)(PasswordRecoveryComponent);
