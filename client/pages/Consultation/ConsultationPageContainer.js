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

  render() {
    const { question, questionConfiguration, location } = this.props;
    const { selectedTagIds } = this.state;
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
        selectedTagIds={selectedTagIds}
        consultationLink={consultationLink}
        actionLink={actionLink}
        location={location}
        handleSelectTag={this.handleSelectTag}
      />
    );
  }
}

export const ConsultationPageContainer = withRouter(ConsultationPage);
