/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchQuestionData, fetchQuestionConfigurationData } from 'Actions/sequence';
import MetaTags from 'Components/MetaTags';
import { SequenceFooterContainer } from 'Containers/Sequence/Footer';
import { match as TypeMatch } from 'react-router';
import { SequencePageContent } from './Styled';
import { SequencePageContentLoader } from './ContentLoader';

type Props = {
  question: Object,
  questionConfiguration: Object,
  fetchQuestion: Function,
  fetchQuestionConfiguration: Function,
  match: TypeMatch,
  isSequenceCollapsed: boolean
};

class SequencePage extends React.Component<Props> {
  componentDidMount() {
    const {
      match,
      question,
      fetchQuestion,
      questionConfiguration,
      fetchQuestionConfiguration
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
          <SequencePageContent>
            <MetaTags
              title={metas.title}
              description={metas.description}
              picture={metas.picture}
            />
            <SequencePageContentLoader
              question={question}
              questionConfiguration={questionConfiguration}
              isSequenceCollapsed={isSequenceCollapsed}
            />
          </SequencePageContent>
          <SequenceFooterContainer
            questionConfiguration={questionConfiguration}
          />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { question, questionConfiguration } = state.sequence;

  return {
    isSequenceCollapsed,
    question,
    questionConfiguration
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestionConfiguration: (questionSlug: string) => {
    dispatch(fetchQuestionConfigurationData(questionSlug));
  },
  fetchQuestion: (questionSlug: string) => {
    dispatch(fetchQuestionData(questionSlug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequencePage);
