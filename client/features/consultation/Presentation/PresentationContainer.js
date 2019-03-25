import React from 'react';
import { connect } from 'react-redux';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import {
  selectSequenceQuestion,
  selectSequenceQuestionConfiguration,
} from 'Shared/store/selectors/sequence.selector';
import { Tracking } from 'Shared/services/Tracking';
import { PresentationComponent } from './PresentationComponent';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

class PresentationClass extends React.Component<Props> {
  trackLearnMore = () => {
    Tracking.trackClickLearnMore();
  };

  render() {
    const { questionConfiguration } = this.props;

    return (
      <PresentationComponent
        questionConfiguration={questionConfiguration}
        trackLearnMore={this.trackLearnMore}
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
