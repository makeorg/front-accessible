import React from 'react';
import { type Question } from 'Shared/types/question';
import { TagType } from 'Shared/types/proposal';
import { TagService } from 'Shared/api/TagService';
import { Logger } from 'Shared/services/Logger';
import { Tracking } from 'Shared/services/Tracking';
import { TagFilterComponent } from './TagFilterComponent';

type Props = {
  question: Question,
  selectedTagIds?: string[],
  handleSelectTag: () => void,
};

type State = {
  /** List of tags */
  tags?: TagType[],
  /** Show all tags in the filter or not */
  showAll: boolean,
};

class TagFilterClass extends React.Component<Props, State> {
  state = {
    tags: [],
    showAll: false,
  };

  /** Todo: export to function and Test logic */
  toggleShowAll = () => {
    this.setState(prevState => ({
      ...prevState,
      showAll: !prevState.showAll,
    }));
  };

  trackTag = (questionId: string, label: string, isSelected: boolean) => {
    const { question } = this.props;
    Tracking.trackTag(
      question.questionId,
      label,
      isSelected ? 'select' : 'deselect'
    );
  };

  componentDidMount = () => {
    const { question } = this.props;
    const { questionId, country, language } = question;
    TagService.getList(questionId, country, language)
      .then(tags => {
        this.setState({ tags });
      })
      .catch(error => Logger.logError(error));
  };

  render() {
    const { tags, showAll } = this.state;
    const { selectedTagIds, handleSelectTag } = this.props;

    if (!tags.length) {
      return null;
    }

    return (
      <TagFilterComponent
        tags={tags}
        showAll={showAll}
        selectedTagIds={selectedTagIds}
        handleSelectTag={handleSelectTag}
        toggleShowAll={this.toggleShowAll}
        trackTag={this.trackTag}
      />
    );
  }
}

export const TagFilterContainer = TagFilterClass;
