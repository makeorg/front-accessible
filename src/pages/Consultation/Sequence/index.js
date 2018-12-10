/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import OperationService from 'Api/OperationService';
import { InnerContent } from 'Components/Elements/MainElements';
import ProposalSubmitContainer from 'Containers/ProposalSubmit';
import SequenceContainer from 'Containers/Sequence';
import Logger from 'Services/Logger';

class SequencePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null
    };

    this.getQuestion = this.getQuestion.bind(this);
  }

  componentDidMount() {
    const { match, country } = this.props;
    this.getQuestion(match.params.questionSlug, country);
  }

  getQuestion = (questionSlug: string, country: string) => {
    OperationService
      .getOperation(questionSlug, country)
      .then((question) => {
        this.setState({ question });
      })
      .catch((error) => {
        Logger.logError(error);
      });
  }

  render() {
    const { isSequenceCollapsed } = this.props;
    const { question } = this.state;

    if (!question) {
      return null;
    }

    return (
      <InnerContent className={isSequenceCollapsed ? 'locked-content' : ''}>
        <ProposalSubmitContainer question={question} />
        <SequenceContainer question={question} />
      </InnerContent>
    );
  }
}

const mapStateToProps = (state) => {
  const { country } = state.appConfig;

  return {
    country
  };
};

export default connect(mapStateToProps)(SequencePage);
