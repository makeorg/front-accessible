// @flow
import React, { type Node } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
  fetchQuestionData,
  fetchQuestionConfigurationData,
  fetchQuestionResults,
} from 'Shared/store/actions/sequence';
import { selectQuestionData } from 'Shared/store/selectors/questions.selector';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { NotFoundPage } from '../NotFound';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
  questionResults: TypeQuestionResults,
  fetchQuestion: (questionSlug: string) => void,
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
  class FetchQuestionClass extends React.Component<Props> {
    constructor(props: Props) {
      super(props);
      if (props.question) {
        apiClient.questionId = props.question.questionId;
        apiClient.operationId = props.question.operationId;
      }
    }

    componentDidMount() {
      const {
        match,
        question,
        questionConfiguration,
        fetchQuestion,
      } = this.props;

      if (!question || !questionConfiguration) {
        fetchQuestion(match.params.questionSlug);
      }

      if (question && !isInProgress(question) && !question.displayResults) {
        window.location = question.aboutUrl;
      }
    }

    render() {
      const { question, questionConfiguration, questionResults } = this.props;
      if (!question) {
        return <NotFoundPage />;
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
    }
  };

const mapStateToProps = (state, ownProps) => {
  return { ...selectQuestionData(state, ownProps.match.params.questionSlug) };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionSlug: string) => {
    dispatch(fetchQuestionData(questionSlug)).then(question => {
      if (!question) {
        return;
      }
      apiClient.questionId = question.questionId;
      apiClient.operationId = question.operationId;

      if (question.displayResults) {
        dispatch(fetchQuestionResults(questionSlug));
      }

      dispatch(fetchQuestionConfigurationData(questionSlug));
    });
  },
});

export const withQuestionData = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  callQuestionData
);
