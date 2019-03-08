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
import {
  selectSequenceQuestion,
  selectSequenceQuestionConfiguration,
} from 'Shared/store/selectors/sequence.selector';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
  fetchQuestion: (questionSlug: string) => void,
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
      const { match, question, fetchQuestion } = this.props;

      if (!question) {
        fetchQuestion(match.params.questionSlug);
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
  return {
    question: selectSequenceQuestion(state),
    questionConfiguration: selectSequenceQuestionConfiguration(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: (questionSlug: string) => {
    dispatch(fetchQuestionData(questionSlug)).then((question: Question) => {
      dispatch(
        fetchQuestionConfigurationData(questionSlug, question.questionId)
      );
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
