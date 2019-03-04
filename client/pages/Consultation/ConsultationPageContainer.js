import React from 'react';
import { connect } from 'react-redux';
import { match as TypeMatch } from 'react-router';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import {
  fetchQuestionData,
  fetchQuestionConfigurationData,
} from 'Shared/store/actions/sequence';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
  fetchQuestion: () => void,
  fetchQuestionConfiguration: () => void,
  match: TypeMatch,
};

class ConsultationPageClass extends React.Component<Props> {
  componentDidMount() {
    const {
      match,
      question,
      fetchQuestion,
      questionConfiguration,
      fetchQuestionConfiguration,
    } = this.props;

    if (!question) {
      fetchQuestion(match.params.questionSlug);
    }

    if (!questionConfiguration) {
      fetchQuestionConfiguration(match.params.questionSlug);
    }
  }

  render() {
    const { question, questionConfiguration } = this.props;

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
      />
    );
  }
}

const mapStateToProps = state => {
  const { question, questionConfiguration } = state.sequence;

  return {
    question,
    questionConfiguration,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestionConfiguration: (questionSlug: string) => {
    dispatch(fetchQuestionConfigurationData(questionSlug));
  },
  fetchQuestion: (questionSlug: string) => {
    dispatch(fetchQuestionData(questionSlug));
  },
});

export const ConsultationPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsultationPageClass);
