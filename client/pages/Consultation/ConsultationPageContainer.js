import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { type ProposalType } from 'Shared/types/proposal';
import { searchProposals } from 'Shared/helpers/proposal';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

type State = {
  proposals: ProposalType[],
  selectedTagIds: Array<string>,
};

export class ConsultationPageContainer extends React.Component<Props, State> {
  state = {
    proposals: [],
    selectedTagIds: [],
  };

  async componentDidMount() {
    const { question } = this.props;
    const { selectedTagIds } = this.state;
    const proposals = await searchProposals(
      question.questionId,
      selectedTagIds
    );
    this.setState({ proposals });
  }

  /** Todo: export to function and Test logic */
  handleSelectTag = async tagId => {
    const { selectedTagIds } = this.state;
    const { question } = this.props;
    const foundTagId = selectedTagIds.includes(tagId);
    const newSelectedTagIds = foundTagId
      ? selectedTagIds.filter(selectedTagId => selectedTagId !== tagId)
      : [tagId, ...selectedTagIds];

    const proposals = await searchProposals(
      question.questionId,
      newSelectedTagIds
    );

    this.setState({
      proposals,
      selectedTagIds: newSelectedTagIds,
    });
  };

  render() {
    const { question, questionConfiguration } = this.props;
    const { proposals, selectedTagIds } = this.state;

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
        proposals={proposals}
        selectedTagIds={selectedTagIds}
        handleSelectTag={this.handleSelectTag}
      />
    );
  }
}
