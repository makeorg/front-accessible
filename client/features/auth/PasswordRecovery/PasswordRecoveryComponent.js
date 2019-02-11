/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { SecondLevelTitleStyle, FourthLevelTtitleStyle } from 'Client/ui/Elements/TitleElements';
import * as Separators from 'Client/ui/Elements/Separators';
import { PasswordRecoveryFormComponent } from './Form';
import { PasswordRecoveryStyle } from './Styled';

export const PasswordRecoverySuccess = () => (
  <React.Fragment>
    <SecondLevelTitleStyle id="password_recovery_title">
      {i18next.t('reset_password.success.title')}
    </SecondLevelTitleStyle>
  </React.Fragment>
);

type Props = {
  /** User's password */
  password: string,
  /** Array with form errors */
  /** Boolean to check if form contain errors */
  error: boolean,
  /** Error message to display to the user */
  errorMessage: string,
  /** Boolean toggled when Form is succesfully submitted */
  updated: boolean,
  /** Boolean toggled when password shown / hidden */
  passwordIsDisplayed: boolean,
  /** Boolean toggled when form is successfully submitted */
  updated: boolean,
  /** Method called to show / encrypt password */
  togglePasswordIsDisplayed: () => void,
  /** Method called when field's value changes */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Method called when field's value is submitted */
  handleSubmit: (event: SyntheticEvent<HTMLButtonElement>) => void
};

/**
 * Renders Password Recovery component
 */
export const PasswordRecoveryComponent = (props: Props) => {
  const { updated } = props;

  return (
    <PasswordRecoveryStyle role="region" aria-labelledby="password_recovery_title">
      {updated
        ? (
          <PasswordRecoverySuccess />
        ) : (
          <React.Fragment>
            <SecondLevelTitleStyle id="password_recovery_title">
              {i18next.t('reset_password.title')}
            </SecondLevelTitleStyle>
            <Separators.Small />
            <React.Fragment>
              <FourthLevelTtitleStyle>
                {i18next.t('reset_password.info')}
              </FourthLevelTtitleStyle>
              <PasswordRecoveryFormComponent {...props} />
            </React.Fragment>
          </React.Fragment>
        )}
    </PasswordRecoveryStyle>
  );
};