import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { SequencePageComponent } from './SequencePageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export class SequencePageContainer extends React.Component<Props> {
  componentDidMount() {
    Tracking.trackDisplaySequence();
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
