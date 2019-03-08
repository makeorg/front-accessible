import React from 'react';
import { connect } from 'react-redux';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import {
  selectSequenceQuestion,
  selectSequenceQuestionConfiguration,
} from 'Shared/store/selectors/sequence.selector';
import { PresentationComponent } from './PresentationComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

class PresentationClass extends React.Component<Props> {
  render() {
    const { question, questionConfiguration } = this.props;

    return (
      <PresentationComponent
        question={question}
        questionConfiguration={questionConfiguration}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    question: selectSequenceQuestion(state),
    questionConfiguration: selectSequenceQuestionConfiguration(state),
  };
};

export const PresentationContainer = connect(mapStateToProps)(
  PresentationClass
);
