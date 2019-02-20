/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AccountActivation = (props) => {
  const { question, match } = props;

  const redirectPath = !question
    ? `/${match.params.countryLanguage}`
    : `/${match.params.countryLanguage}/consultation/${question.slug}/selection`;

  return (
    <Redirect path="/:countryLanguage/account-activation/:userId/:verificationToken" to={redirectPath} />
  );
};

const mapStateToProps = (state) => {
  const { question } = state.sequence;

  return { question };
};

export const AccountActivationPage = connect(mapStateToProps)(AccountActivation);
// default export needed for loadable component
export default AccountActivationPage; // eslint-disable-line import/no-default-export
