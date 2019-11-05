// @flow
import React, { type Node, useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { type match as TypeMatch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { isInProgress } from 'Shared/helpers/date';
import { MetaTags } from 'Client/app/MetaTags';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import {
  fetchQuestionConfigurationData,
  loadQuestion,
} from 'Shared/store/actions/sequence';
import { selectQuestionData } from 'Shared/store/selectors/questions.selector';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { updateCurrentQuestion } from 'Shared/store/actions/question';
import { updateRequestContext } from 'Shared/helpers/apiService';
import { NotFoundPage } from '../NotFound';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
  questionResults: TypeQuestionResults,
  match: TypeMatch,
};

export const PageQuestionWrapper = ({
  children,
  questionConfiguration,
  question,
}: {
  children: Node,
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
}) => {
  const { metas } = question.wording;
  return (
    <ThemeProvider theme={questionConfiguration.theme}>
      <React.Fragment>
        <MetaTags
          title={metas.title}
          description={metas.description}
          picture={metas.picture}
        />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

const callQuestionData = Component =>
  function FetchQuestionClass(props: Props) {
    const { match, question, questionConfiguration, questionResults } = props;
    const dispatch = useDispatch();
    const currentQuestionState = useSelector(state => state.currentQuestion);
    const [alternativeContent, setAlternativeContent] = React.useState(
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
    const updateQuestion =
      question && questionConfiguration
        ? () => {}
        : () => {
            QuestionApiService.getDetail(match.params.questionSlug)
              .then(questionDetail => {
                dispatch(loadQuestion(questionDetail));
                dispatch(fetchQuestionConfigurationData(questionDetail.slug));
              })
              .catch(error => {
                if (error.message === '404') {
                  setAlternativeContent(<NotFoundPage />);
                }
              });
          };

    useEffect(() => {
      updateQuestion();
      if (question && currentQuestionState !== match.params.questionSlug) {
        updateRequestContext(question);
        dispatch(updateCurrentQuestion(question.slug));
      }
    }, [match.params.questionSlug]);

    const questionsInState = useSelector(state => state.questions);

    useEffect(() => {
      if (question && !isInProgress(question) && !question.displayResults) {
        window.location = question.aboutUrl;
      }
      // Try to find related questions
      const operationsQuestions =
        question && question.operation && question.operation.questions;
      if (operationsQuestions) {
        operationsQuestions.map(async relQuestion => {
          // Check is question has been already fetched
          const isRelQuestionInState =
            questionsInState[relQuestion.questionSlug] !== undefined;
          // If not, they fetch/store it
          if (!isRelQuestionInState) {
            const res = await QuestionApiService.getDetail(
              relQuestion.questionSlug,
              {},
              true // allow to get questionResults and questionConfiguration at once
            );
            dispatch({
              type: 'QUESTION_ADD_ALL',
              payload: res,
            });
          }
        });
      }
    }, [question]);

    if (!question || !questionConfiguration) {
      return alternativeContent;
    }

    return (
      <PageQuestionWrapper
        questionResults={questionResults}
        questionConfiguration={questionConfiguration}
        question={question}
      >
        <Component
          question={question}
          questionConfiguration={questionConfiguration}
          questionResults={questionResults}
        />
      </PageQuestionWrapper>
    );
  };

const mapStateToProps = (state, ownProps) => {
  const questionData = selectQuestionData(
    state,
    ownProps.match.params.questionSlug
  );

  if (!questionData) {
    return { ...ownProps };
  }

  return {
    ...questionData,
  };
};

export const withQuestionData = compose(
  connect(mapStateToProps),
  callQuestionData
);
