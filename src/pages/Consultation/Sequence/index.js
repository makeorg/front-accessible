/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchQuestionData, fetchQuestionConfigurationData } from 'Actions/sequence';
import MetaTags from 'Components/MetaTags';
import { SequenceContent } from 'Components/Elements/MainElements';
import MainFooterContainer from 'Containers/MainFooter';
import SequenceContentLoader from './ContentLoader';

type Props = {
  question: Object,
  questionConfiguration: Object,
  fetchQuestion: Function,
  fetchQuestionConfiguration: Function
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
          <SequenceContent>
            <MetaTags
              title={metas.title}
              description={metas.description}
              picture={metas.picture}
            />
            <SequenceContentLoader
              question={question}
              questionConfiguration={questionConfiguration}
              isSequenceCollapsed={isSequenceCollapsed}
            />
          </SequenceContent>
          <MainFooterContainer
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
  fetchQuestionConfiguration: (questionSlug: String) => {
    dispatch(fetchQuestionConfigurationData(questionSlug));
  },
  fetchQuestion: (questionSlug: String) => {
    dispatch(fetchQuestionData(questionSlug));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequencePage);
