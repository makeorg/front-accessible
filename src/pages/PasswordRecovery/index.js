/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import 'url-search-params-polyfill';
import { PasswordRecoveryContainer } from 'Containers/UserAccount/PasswordRecovery';
import { PasswordRecoveryWrapper, PasswordRecoveryContent } from './Styled';

type Props = {
  passwordRecovery: Object,
  location: Object,
  match: Object
};

export class PasswordRecovery extends React.Component<Props> {
  render() {
    const { passwordRecovery } = this.props;
    const { validToken } = passwordRecovery;


    if (!validToken) {
      const { location, match } = this.props;
      const params = new URLSearchParams(location.search);
      const questionSlug = params.get('questionSlug');
      const redirectPath = !questionSlug
        ? `/${match.params.countryLanguage}`
        : `/${match.params.countryLanguage}/consultation/${questionSlug}/selection`;

      return (
        <Redirect path="/:countryLanguage/password-recovery/:userId/:resetToken" to={redirectPath} />
      );
    }

    return (
      <PasswordRecoveryWrapper>
        <PasswordRecoveryContent>
          <PasswordRecoveryContainer />
        </PasswordRecoveryContent>
      </PasswordRecoveryWrapper>
    );
  }
}


const mapStateToProps = (state) => {
  const { passwordRecovery } = state.user;
  return { passwordRecovery };
};

export const PasswordRecoveryPage = withRouter(connect(mapStateToProps)(PasswordRecovery));
