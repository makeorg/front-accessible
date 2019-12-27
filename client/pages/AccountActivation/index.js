/* @flow */

import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { type match as TypeMatch } from 'react-router';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { type StateRoot } from 'Shared/store/types';

type Props = {
  match: TypeMatch,
};

const AccountActivationPage = ({ match }: Props) => {
  const countryLanguage = `${match.params.country}-${match.params.language}`;
  const question = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

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

// default export needed for loadable component
export default AccountActivationPage; // eslint-disable-line import/no-default-export
