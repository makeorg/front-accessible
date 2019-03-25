import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

type State = {
  selectedTagIds: string[],
};

export class ConsultationPageContainer extends React.Component<Props, State> {
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

    /* const proposals = await searchProposals(
      question.questionId,
      newSelectedTagIds
    ); */

    this.setState({
      selectedTagIds: newSelectedTagIds,
    });
  };

  trackPresentationCollpase = (action: string) => {
    Tracking.trackOpenLearnMore(action);
  };

  render() {
    const { question, questionConfiguration } = this.props;
    const { selectedTagIds } = this.state;

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
        selectedTagIds={selectedTagIds}
        handleSelectTag={this.handleSelectTag}
        trackPresentationCollpase={this.trackPresentationCollpase}
      />
    );
  }
}
