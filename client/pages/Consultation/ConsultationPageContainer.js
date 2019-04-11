import React from 'react';
import { withRouter } from 'react-router-dom';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { ROUTE_CONSULTATION, ROUTE_ACTION } from 'Shared/routes';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

type State = {
  selectedTagIds: string[],
};

class ConsultationPage extends React.Component<Props, State> {
  state = {
    selectedTagIds: [],
  };

  componentDidMount() {
    Tracking.trackDisplayConsultation();
  }

  /** Todo: export to function and Test logic */
  handleSelectTag = async tagId => {
    const { selectedTagIds } = this.state;
    const foundTagId = selectedTagIds.includes(tagId);
    const newSelectedTagIds = foundTagId
      ? selectedTagIds.filter(selectedTagId => selectedTagId !== tagId)
      : [tagId, ...selectedTagIds];

    this.setState({
      selectedTagIds: newSelectedTagIds,
    });
  };

  trackPresentationCollpase = (action: string) => {
    Tracking.trackOpenLearnMore(action);
  };

  trackMoreLink = () => {
    Tracking.trackSeeMorePartners();
  };

  render() {
    const { question, questionConfiguration, match, location } = this.props;
    const { countryLanguage } = match.params;
    const { selectedTagIds } = this.state;
    const consultationLink = ROUTE_CONSULTATION.replace(
      ':countryLanguage',
      countryLanguage
    ).replace(':questionSlug', question.slug);
    const actionLink = ROUTE_ACTION.replace(
      ':countryLanguage',
      countryLanguage
    ).replace(':questionSlug', question.slug);

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
        selectedTagIds={selectedTagIds}
        consultationLink={consultationLink}
        actionLink={actionLink}
        location={location}
        handleSelectTag={this.handleSelectTag}
        trackPresentationCollpase={this.trackPresentationCollpase}
        trackMoreLink={this.trackMoreLink}
      />
    );
  }
}

export const ConsultationPageContainer = withRouter(ConsultationPage);
