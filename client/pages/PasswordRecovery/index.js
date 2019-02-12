/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import 'url-search-params-polyfill';
import { PasswordRecovery } from 'Client/features/auth/PasswordRecovery';
import {
  PasswordRecoveryWrapperStyle,
  PasswordRecoveryContentStyle
} from 'Client/features/auth/PasswordRecovery/Styled';

type Props = {
  passwordRecovery: Object,
  question: Object,
  match: Object
};

export class PasswordRecoveryRedirect extends React.Component<Props> {
  render() {
    const { passwordRecovery } = this.props;
    const { validToken } = passwordRecovery;


    if (!validToken) {
      const { question, match } = this.props;
      const redirectPath = !question
        ? `/${match.params.countryLanguage}`
        : `/${match.params.countryLanguage}/consultation/${question.slug}/selection`;

      return (
        <Redirect path="/:countryLanguage/password-recovery/:userId/:resetToken" to={redirectPath} />
      );
    }

    return (
      <PasswordRecoveryWrapperStyle>
        <PasswordRecoveryContentStyle>
          <PasswordRecovery />
        </PasswordRecoveryContentStyle>
      </PasswordRecoveryWrapperStyle>
    );
  }
}


const mapStateToProps = (state) => {
  const { passwordRecovery } = state.user;
  const { question } = state.sequence;
  return { passwordRecovery, question };
};

export const PasswordRecoveryPage = withRouter(connect(mapStateToProps)(PasswordRecoveryRedirect));
export default PasswordRecoveryPage;
