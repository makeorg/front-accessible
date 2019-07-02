/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';

const AccountActivation = props => {
  const { question, match } = props;
  const countryLanguage = `${match.params.country}-${match.params.language}`;

  const redirectPath = !question
    ? `/${countryLanguage}`
    : `/${countryLanguage}/consultation/${question.slug}/consultation`;

  return (
    <Redirect
      path="/:country-language/account-activation/:userId/:verificationToken"
      to={redirectPath}
    />
  );
};

const mapStateToProps = state => {
  return { question: selectCurrentQuestion(state) };
};

export const AccountActivationPage = connect(mapStateToProps)(
  AccountActivation
);
// default export needed for loadable component
export default AccountActivationPage; // eslint-disable-line import/no-default-export
