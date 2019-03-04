/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import {
  fetchQuestionData,
  fetchQuestionConfigurationData,
} from 'Shared/store/actions/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { SequenceFooter } from 'Client/features/sequence/Footer';
import { match as TypeMatch } from 'react-router';
import { SequencePageContentLoader } from './ContentLoader';
import { SequencePageContentStyle } from './Styled';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
  fetchQuestion: Function,
  fetchQuestionConfiguration: Function,
  match: TypeMatch,
  isSequenceCollapsed: boolean,
};

class SequencePageContainer extends React.Component<Props> {
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
    const { isSequenceCollapsed, question, questionConfiguration } = this.props;

    if (!questionConfiguration) {
      return null;
    }

    const { metas } = questionConfiguration.wording;

    return (
      <ThemeProvider theme={questionConfiguration.theme}>
        <React.Fragment>
          <MetaTags
            title={metas.title}
            description={metas.description}
            picture={metas.picture}
          />
          <SequencePageContentStyle>
            <SequencePageContentLoader
              question={question}
              questionConfiguration={questionConfiguration}
              isSequenceCollapsed={isSequenceCollapsed}
            />
          </SequencePageContentStyle>
          <SequenceFooter questionConfiguration={questionConfiguration} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  const { isSequenceCollapsed } = state.sequence;
  const { question, questionConfiguration } = state.sequence;

  return {
    isSequenceCollapsed,
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

export const SequencePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SequencePageContainer);

// default export needed for loadable component
export default SequencePage; // eslint-disable-line import/no-default-export
