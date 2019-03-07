import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { ProposalService } from 'Shared/api/ProposalService';
import { ProposalType } from 'Shared/types/proposal';
import { Logger } from 'Shared/services/Logger';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

type State = {
  proposals: ProposalType[],
};

export class ConsultationPageContainer extends React.Component<Props, State> {
  state = {
    proposals: [],
  };

  async componentDidMount() {
    const { question } = this.props;
    try {
      const response = await ProposalService.searchProposals(
        question.questionId
      );
      this.setState({ proposals: response.results });
    } catch (error) {
      Logger.logError('searchProposals error', error);
    }
  }

  render() {
    const { question, questionConfiguration } = this.props;
    const { proposals } = this.state;

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
        proposals={proposals}
      />
    );
  }
}
