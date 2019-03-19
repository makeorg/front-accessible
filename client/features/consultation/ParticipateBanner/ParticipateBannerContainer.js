import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { getSequenceLink } from 'Shared/helpers/url';
import { Tracking } from 'Shared/services/Tracking';
import { ParticipateBannerComponent } from './ParticipateBannerComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export class ParticipateBannerContainer extends React.Component<Props> {
  trackParticipateButton = () => {
    Tracking.trackOpenSequence();
  };

  render() {
    const { question, questionConfiguration } = this.props;
    const { theme } = questionConfiguration;
    const sequenceLink = getSequenceLink(
      question.slug,
      question.country,
      question.language
    );

    return (
      <ParticipateBannerComponent
        styleTheme={theme}
        sequenceLink={sequenceLink}
        trackParticipateButton={this.trackParticipateButton}
      />
    );
  }
}
