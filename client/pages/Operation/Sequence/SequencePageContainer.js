import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { trackDisplaySequence } from 'Shared/services/Tracking';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { SequencePageComponent } from './SequencePageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

class BaseSequencePageContainer extends React.Component<Props> {
  componentDidMount() {
    trackDisplaySequence();
  }

  render() {
    const { question, questionConfiguration } = this.props;
    return (
      <SequencePageComponent
        question={question}
        questionConfiguration={questionConfiguration}
      />
    );
  }
}

export const SequencePageContainer = withDepartmentCheck(
  BaseSequencePageContainer
);
