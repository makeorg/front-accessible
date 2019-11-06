import React from 'react';
import { type Question } from 'Shared/types/question';
import { ConsultationProposalComponent } from './ProposalComponent';

type Props = {
  question: Question,
};

export class ConsultationProposalContainer extends React.Component<Props> {
  render() {
    return <ConsultationProposalComponent {...this.props} />;
  }
}
