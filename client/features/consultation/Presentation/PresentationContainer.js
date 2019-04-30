import React from 'react';
import { connect } from 'react-redux';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import {
  selectSequenceQuestion,
  selectSequenceQuestionConfiguration,
} from 'Shared/store/selectors/sequence.selector';
import { PresentationComponent } from './PresentationComponent';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

const PresentationClass = (props: Props) => {
  const { questionConfiguration } = props;

  return (
    <PresentationComponent questionConfiguration={questionConfiguration} />
  );
};

const mapStateToProps = state => {
  return {
    question: selectSequenceQuestion(state),
    questionConfiguration: selectSequenceQuestionConfiguration(state),
  };
};

export const PresentationContainer = connect(mapStateToProps)(
  PresentationClass
);
