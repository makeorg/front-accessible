/* @flow */
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import 'url-search-params-polyfill';
import { type QuestionType } from 'Shared/types/question';
import { type StateRoot } from 'Shared/store/types';
import { PasswordRecovery } from 'Client/features/auth/PasswordRecovery';
import {
  PasswordRecoveryWrapperStyle,
  PasswordRecoveryContentStyle,
} from 'Client/features/auth/PasswordRecovery/style';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { selectPasswordRecovery } from 'Shared/store/selectors/user.selector';

const PasswordRecoveryPage = () => {
  const { country, language } = useParams();

  const passwordRecovery = useSelector((state: StateRoot) =>
    selectPasswordRecovery(state)
  );

  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const { validToken } = passwordRecovery;

  if (!validToken) {
    const countryLanguage = `${country}-${language}`;
    const redirectPath = !question
      ? `/${countryLanguage}`
      : `/${countryLanguage}/consultation/${question.slug}/consultation`;

    return (
      <Redirect
        path="/:country-:language/password-recovery/:userId/:resetToken"
        to={redirectPath}
      />
    );
  }

  return (
    <PasswordRecoveryWrapperStyle>
      <PasswordRecoveryContentStyle>
        <PasswordRecovery />
      </PasswordRecoveryContentStyle>
    </PasswordRecoveryWrapperStyle>
  );
};

// default export needed for loadable component
export default PasswordRecoveryPage; // eslint-disable-line import/no-default-export
