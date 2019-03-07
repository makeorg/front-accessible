/* @flow */
import React, { type Node } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { match as TypeMatch } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { MetaTags } from 'Client/app/MetaTags';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import {
  fetchQuestionData,
  fetchQuestionConfigurationData,
} from 'Shared/store/actions/sequence';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
  fetchQuestion: (questionSlug: string) => void,
  fetchQuestionConfiguration: (questionSlug: string) => void,
  match: TypeMatch,
};

export const PageQuestionWrapper = ({
  children,
  questionConfiguration,
}: {
  children: Node,
  questionConfiguration: QuestionConfiguration,
}) => {
  const { metas } = questionConfiguration.wording;
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
    componentDidMount() {
      const {
        match,
        question,
        fetchQuestion,
        questionConfiguration,
        fetchQuestionConfiguration,
      } = this.props;

      if (!question) {
        fetchQuestion(match.params.questionSlug);
      }

      if (!questionConfiguration) {
        fetchQuestionConfiguration(match.params.questionSlug);
      }
    }

    render() {
      const { question, questionConfiguration } = this.props;
      if (!question || !questionConfiguration) return null;
      return (
        <PageQuestionWrapper questionConfiguration={questionConfiguration}>
          <Component
            question={question}
            questionConfiguration={questionConfiguration}
          />
        </PageQuestionWrapper>
      );
    }
  };

const mapStateToProps = state => {
  const { question, questionConfiguration } = state.sequence;

  return {
    question,
    questionConfiguration,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestionConfiguration: (questionSlug: string) => {
    dispatch(fetchQuestionConfigurationData(questionSlug));
  },
  fetchQuestion: (questionSlug: string) => {
    dispatch(fetchQuestionData(questionSlug));
  },
});

export const withQuestionData = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  callQuestionData
);
