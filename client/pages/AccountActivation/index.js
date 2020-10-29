/* @flow */

import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { type StateRoot } from 'Shared/store/types';
import { ROUTE_ACCOUNT_ACTIVATION } from 'Shared/routes';

const AccountActivationPage = () => {
  const { country } = useParams();
  const question = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const redirectPath = !question
    ? `/${country}`
    : `/${country}/consultation/${question.slug}/consultation`;

  return <Redirect path={ROUTE_ACCOUNT_ACTIVATION} to={redirectPath} />;
};

// default export needed for loadable component
export default AccountActivationPage; // eslint-disable-line import/no-default-export
