/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import OperationService from 'Api/OperationService';
import { InnerContent, SequenceContent } from 'Components/Elements/MainElements';
import ProposalSubmitContainer from 'Containers/ProposalSubmit';
import SequenceContainer from 'Containers/Sequence';
import MainFooterContainer from 'Containers/MainFooter';
import Logger from 'Services/Logger';
import SequenceService from 'Api/SequenceService';

class SequencePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null,
      questionConfiguration: null
    };

    this.getQuestion = this.getQuestion.bind(this);
  }

  componentDidMount() {
    const { match, country, language } = this.props;
    this.getQuestion(match.params.questionSlug, country, language);
  }

  getQuestion = (questionSlug: string, country: string, language: string) => {
    OperationService
      .getOperation(questionSlug, country, language)
      .then((question) => {
        this.setState({ question });
      })
      .catch((error) => {
        Logger.logError(error);
      });


    SequenceService.fetchConfiguration(questionSlug, country)
      .then(questionConfiguration => this.setState({ questionConfiguration }))
      .catch(error => error);
  }

  render() {
    const { isSequenceCollapsed } = this.props;
    const { question, questionConfiguration } = this.state;

    if (!question || !questionConfiguration) {
      return null;
    }

    return (
      <ThemeProvider theme={questionConfiguration.theme}>
        <SequenceContent>
          <InnerContent className={isSequenceCollapsed ? 'locked-content' : ''}>
            <ProposalSubmitContainer question={question} />
            <SequenceContainer
              question={question}
              questionConfiguration={questionConfiguration}
            />
          </InnerContent>
          <MainFooterContainer
            questionConfiguration={questionConfiguration}
          />
        </SequenceContent>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { country, language } = state.appConfig;

  return {
    country,
    language
  };
};

export default connect(mapStateToProps)(SequencePage);
