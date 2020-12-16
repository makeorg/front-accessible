// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { useDispatch, useSelector } from 'react-redux';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notifications';
import { ParticipateHeader } from 'Client/features/consultation/Header';
import { ParticipateHighlights } from 'Client/features/consultation/Highlights';
import { ParticipateNavigation } from 'Client/features/consultation/Navigation/Participate';
import {
  ParticipateContentStyle,
  ParticipateInnerStyle,
  ParticipateTitleStyle,
} from './style';

const ExplorePage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!question.canPropose) {
      dispatch(
        displayNotificationBanner(
          VOTE_ONLY_MESSAGE,
          NOTIFICATION_LEVEL_INFORMATION,
          { questionId: question.questionId },
          true
        )
      );
    }
  }, [question, dispatch]);

  return (
    <ThemeProvider theme={question.theme}>
      <MetaTags
        title={i18n.t('meta.explore.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ParticipateHeader />
      <ParticipateHighlights />
      <ParticipateNavigation />
      <ParticipateContentStyle>
        <ParticipateTitleStyle>explore title</ParticipateTitleStyle>
        <ParticipateInnerStyle>content</ParticipateInnerStyle>
      </ParticipateContentStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default ExplorePage; // eslint-disable-line import/no-default-export
