/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import MetaTags from 'Components/MetaTags';
import { InnerContent, SequenceContent } from 'Components/Elements/MainElements';
import ProposalSubmitContainer from 'Containers/ProposalSubmit';
import SequenceContainer from 'Containers/Sequence';
import MainFooterContainer from 'Containers/MainFooter';
import { fetchQuestionData, fetchQuestionConfigurationData } from 'Actions/sequence';

type Props = {
  country: String,
  language: String,
  question: Object,
  questionConfiguration: Object,
  fetchQuestion: Function,
  fetchQuestionConfiguration: Function
};

class SequencePage extends React.Component<Props> {
  componentDidMount() {
    const {
      match,
      country,
      language,
      question,
      fetchQuestion,
      questionConfiguration,
      fetchQuestionConfiguration
    } = this.props;

    if (!question) {
      fetchQuestion(match.params.questionSlug, country, language);
    }

    if (!questionConfiguration) {
      fetchQuestionConfiguration(match.params.questionSlug, country);
    }
  }

  render() {
    const { isSequenceCollapsed, question, questionConfiguration } = this.props;

    if (!questionConfiguration) {
      return null;
    }

    const { metas } = questionConfiguration;

    return (
      <ThemeProvider theme={questionConfiguration.theme}>
        <SequenceContent>
          <MetaTags
            title={metas.title}
            description={metas.description}
            picture={metas.picture}
          />
          {question
            && (
              <InnerContent className={isSequenceCollapsed ? 'locked-content' : ''}>
                <ProposalSubmitContainer question={question} />
                <SequenceContainer
                  question={question}
                  questionConfiguration={questionConfiguration}
                />
              </InnerContent>
            )
          }
          <MainFooterContainer
            questionConfiguration={questionConfiguration}
          />
        </SequenceContent>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { country, language } = state.appConfig;
  const { question, questionConfiguration } = state.sequence;

  return {
    isSequenceCollapsed,
    country,
    language,
    question,
    questionConfiguration
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestionConfiguration: (questionSlug: String, country: String) => {
    dispatch(fetchQuestionConfigurationData(questionSlug, country));
  },
  fetchQuestion: (questionSlug: String, country: String, language: String) => {
    dispatch(fetchQuestionData(questionSlug, country, language));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequencePage);
