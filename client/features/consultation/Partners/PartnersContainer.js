import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { getSequenceLink } from 'Shared/helpers/url';
import { Tracking } from 'Shared/services/Tracking';
import { PartnersComponent } from './PartnersComponent';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
};

export class PartnersContainer extends React.Component<Props> {
  trackParticipateButton = () => {
    Tracking.trackParticipatePartners();
  };

  trackMoreLink = () => {
    Tracking.trackSeeMorePartners();
  };

  render() {
    const { question, questionConfiguration } = this.props;
    const sequenceLink = getSequenceLink(
      question.country,
      question.language,
      question.slug
    );
    return (
      <PartnersComponent
        sequenceLink={sequenceLink}
        questionConfiguration={questionConfiguration}
        trackParticipateButton={this.trackParticipateButton}
        trackMoreLink={this.trackMoreLink}
      />
    );
  }
}
