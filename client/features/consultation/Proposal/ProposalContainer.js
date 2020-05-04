import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { ConsultationProposalComponent } from './ProposalComponent';

type Props = {
  question: QuestionType,
};

export class ConsultationProposalContainer extends React.Component<Props> {
  render() {
    const { question } = this.props;
    return <ConsultationProposalComponent question={question} />;
  }
}
