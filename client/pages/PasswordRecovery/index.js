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
import { ROUTE_PASSWORD_RECOVERY } from 'Shared/routes';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { getHomeLink, getParticipateLink } from 'Shared/helpers/url';

const PasswordRecoveryPage = () => {
  const { country } = useParams();

  const passwordRecovery = useSelector((state: StateRoot) =>
    selectPasswordRecovery(state)
  );

  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const { validToken } = passwordRecovery;

  if (!validToken) {
    const redirectPath = !question
      ? getHomeLink(country)
      : getParticipateLink(country, question.slug);

    return <Redirect path={ROUTE_PASSWORD_RECOVERY} to={redirectPath} />;
  }

  return (
    <>
      <MetaTags title={i18n.t('meta.password-recovery.title')} />
      <PasswordRecoveryWrapperStyle>
        <PasswordRecoveryContentStyle>
          <PasswordRecovery />
        </PasswordRecoveryContentStyle>
      </PasswordRecoveryWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default PasswordRecoveryPage; // eslint-disable-line import/no-default-export
