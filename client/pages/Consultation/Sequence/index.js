/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { fetchQuestionData, fetchQuestionConfigurationData } from 'Shared/store/actions/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { SequenceFooter } from 'Client/features/sequence/Footer';
import { match as TypeMatch } from 'react-router';
import { SequencePageContentStyle } from './Styled';
import { SequencePageContentLoader } from './ContentLoader';

type Props = {
  question: Object,
  questionConfiguration: Object,
  fetchQuestion: Function,
  fetchQuestionConfiguration: Function,
  match: TypeMatch,
  isSequenceCollapsed: boolean
};

type State = {
  windowHeight: string
}

class SequencePageContainer extends React.Component<Props, State> {
  state = {
    windowHeight: '100vh'
  }

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


    this.getWindowHeight();
    window.addEventListener('resize', this.getWindowHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowHeight);
  }

  getWindowHeight = () => {
    this.setState({ windowHeight: `${window.innerHeight}px` });
  };

  render() {
    const { isSequenceCollapsed, question, questionConfiguration } = this.props;
    const { windowHeight } = this.state;

    if (!questionConfiguration) {
      return null;
    }

    const { metas } = questionConfiguration.wording;

    return (
      <ThemeProvider theme={questionConfiguration.theme}>
        <React.Fragment>
          <SequencePageContentStyle height={windowHeight}>
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
          </SequencePageContentStyle>
          <SequenceFooter
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

export const SequencePage = connect(mapStateToProps, mapDispatchToProps)(SequencePageContainer);

// default export needed for loadable component
export default SequencePage; // eslint-disable-line import/no-default-export
