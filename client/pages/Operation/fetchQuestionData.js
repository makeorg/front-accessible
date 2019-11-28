// @flow
import React, { type Node, useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { type match as TypeMatch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { isInProgress } from 'Shared/helpers/date';
import { MetaTags } from 'Client/app/MetaTags';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import {
  loadQuestion,
  unloadCurrentQuestion,
} from 'Shared/store/actions/sequence';
import { selectQuestionData } from 'Shared/store/selectors/questions.selector';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { updateCurrentQuestion } from 'Shared/store/actions/question';
import { NotFoundPage } from '../NotFound';

type Props = {
  question: TypeQuestion,
  questionResults: TypeQuestionResults,
  match: TypeMatch,
};

export const PageQuestionWrapper = ({
  children,
  question,
}: {
  children: Node,
  question: TypeQuestion,
}) => {
  const { metas } = question.wording;
  return (
    <ThemeProvider theme={question.theme}>
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
    const { match, question, questionResults } = props;
    const dispatch = useDispatch();
    const [alternativeContent, setAlternativeContent] = React.useState(
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
    const questions = useSelector(state => state.questions);
    const currentQuestionSlug = useSelector(state => state.currentQuestion);
    const updateQuestion = () => {
      QuestionApiService.getDetail(match.params.questionSlug)
        .then(questionDetail => {
          dispatch(loadQuestion(questionDetail));
        })
        .catch(error => {
          if (error.message === '404') {
            setAlternativeContent(<NotFoundPage />);
          }
        });
    };

    useEffect(() => {
      if (question) {
        dispatch(updateCurrentQuestion(question.slug));
      }

      return () => {
        dispatch(unloadCurrentQuestion());
      };
    }, [question]);

    useEffect(() => {
      if (!question) {
        updateQuestion();
      }
    }, [match.params.questionSlug]);

    useEffect(() => {
      if (question && !isInProgress(question) && !question.displayResults) {
        window.location = question.aboutUrl;
      }
    }, [question]);

    useEffect(() => {
      // Try to find related questions
      const operationsQuestions =
        question && question.operation && question.operation.questions;
      if (operationsQuestions) {
        operationsQuestions.map(async relQuestion => {
          // Check is question has been already fetched
          const isRelQuestionInState =
            questions[relQuestion.questionSlug] !== undefined;
          // If not, they fetch/store it
          if (!isRelQuestionInState) {
            const res = await QuestionApiService.getDetail(
              relQuestion.questionSlug,
              {}
            );
            dispatch({
              type: 'QUESTION_ADD_ALL',
              payload: res,
            });
          }
        });
      }
    }, [question]);

    if (!question || question.slug !== currentQuestionSlug) {
      return alternativeContent;
    }

    return (
      <PageQuestionWrapper
        questionResults={questionResults}
        question={question}
      >
        <Component question={question} questionResults={questionResults} />
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
