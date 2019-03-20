import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ConsultationProposalComponent } from './ProposalComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export class ConsultationProposalContainer extends React.Component<Props> {
  render() {
    return <ConsultationProposalComponent {...this.props} />;
  }
}
