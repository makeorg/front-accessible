// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { type Location } from 'react-router';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { getActionLink, getConsultationLink } from 'Shared/helpers/url';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
  location: Location,
};

class ConsultationPage extends React.Component<Props> {
  componentDidMount() {
    Tracking.trackDisplayConsultation();
  }

  render() {
    const { question, questionConfiguration, location } = this.props;
    const consultationLink = getConsultationLink(
      question.country,
      question.language,
      question.slug
    );
    const actionLink = getActionLink(
      question.country,
      question.language,
      question.slug
    );

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
        consultationLink={consultationLink}
        actionLink={actionLink}
        location={location}
      />
    );
  }
}

export const ConsultationPageContainer = withRouter(ConsultationPage);
