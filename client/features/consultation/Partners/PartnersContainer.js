import React from 'react';
import { connect } from 'react-redux';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { PartnersComponent } from './PartnersComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

class PartnersClass extends React.Component<Props> {
  render() {
    const { question, questionConfiguration } = this.props;

    return (
      <PartnersComponent
        questionConfiguration={questionConfiguration}
        questionSlug={question && question.slug}
        country={question && question.country}
        language={question && question.language}
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

export const PartnersContainer = connect(mapStateToProps)(PartnersClass);
