// @flow
import React, { type Node, useState, useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useParams } from 'react-router';
import { QuestionService } from 'Shared/services/Question';
import { useDispatch, useSelector } from 'react-redux';
import { loadQuestion } from 'Shared/store/actions/sequence';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { updateCurrentQuestion } from 'Shared/store/reducers/questions/actions';
import { isInProgress } from 'Shared/helpers/date';
import { NotFoundPage } from '../NotFound';

type Props = {
  children: Node,
  withRedirect?: boolean,
};

export const QuestionWrapper = ({ children, withRedirect }: Props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const { country } = useParams();
  const currentQuestion: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const currentQuestionSlug = useSelector(
    (state: StateRoot) => state.currentQuestion
  );
  const { questionSlug } = params;
  const [alternativeContent, setAlternativeContent] = useState(
    <MiddlePageWrapperStyle>
      <Spinner />
    </MiddlePageWrapperStyle>
  );

  const updateQuestion = () => {
    QuestionService.getDetail(
      questionSlug,
      () => setAlternativeContent(<NotFoundPage />),
      country
    ).then(questionDetail => {
      if (questionDetail) {
        dispatch(loadQuestion(questionDetail));
      }
    });
  };

  useEffect(() => {
    if (currentQuestionSlug !== questionSlug) {
      dispatch(updateCurrentQuestion(questionSlug));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionSlug, questionSlug]);

  useEffect(() => {
    if (!currentQuestion) {
      updateQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionSlug]);

  if (!currentQuestion || questionSlug !== currentQuestionSlug) {
    return alternativeContent;
  }

  if (withRedirect && !isInProgress(currentQuestion)) {
    if (typeof window === 'object') {
      window.location = currentQuestion.aboutUrl;
    }
    return alternativeContent;
  }

  return children;
};
