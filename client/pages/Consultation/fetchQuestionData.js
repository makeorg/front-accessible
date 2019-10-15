// @flow
import React, { type Node, useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
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
  fetchQuestionResults,
  loadQuestion,
} from 'Shared/store/actions/sequence';
import { selectQuestionData } from 'Shared/store/selectors/questions.selector';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
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
                apiClient.questionId = questionDetail.questionId;
                apiClient.operationId = questionDetail.operationId;
                dispatch(loadQuestion(questionDetail));
                if (questionDetail.displayResults) {
                  dispatch(fetchQuestionResults(questionDetail.slug));
                }
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
    }, [match.params.questionSlug]);

    useEffect(() => {
      if (question && !isInProgress(question) && !question.displayResults) {
        window.location = question.aboutUrl;
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
