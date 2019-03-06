import React from 'react';
import { type Question } from 'Shared/types/question';
import { TagType } from 'Shared/types/proposal';
import { TagService } from 'Shared/api/TagService';
import { Logger } from 'Shared/services/Logger';
import { TagFilterComponent } from './TagFilterComponent';

type Props = {
  question: Question,
};

type State = {
  /** List of tags */
  tags?: Array<TagType>,
  /** List of selected tag Id */
  selectedTagIds?: Array<string>,
  /** Show all tags in the filter or not */
  showAll: boolean,
};

class TagFilterClass extends React.Component<Props, State> {
  state = {
    tags: [],
    selectedTagIds: [],
    showAll: false,
  };

  /** Todo: export to function and Test logic */
  toggleShowAll = () => {
    this.setState(prevState => ({
      ...prevState,
      showAll: !prevState.showAll,
    }));
  };

  /** Todo: export to function and Test logic */
  handleSelectTag = tagId => {
    this.setState(prevState => {
      const { selectedTagIds } = prevState;
      const foundTagId = selectedTagIds.includes(tagId);
      const newSelectedTagIds = foundTagId
        ? selectedTagIds.filter(selectedTagId => selectedTagId !== tagId)
        : [tagId, ...selectedTagIds];

      return {
        ...prevState,
        selectedTagIds: newSelectedTagIds,
      };
    });
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
    const { tags, selectedTagIds, showAll } = this.state;

    if (!tags) {
      return null;
    }

    return (
      <TagFilterComponent
        tags={tags}
        selectedTagIds={selectedTagIds}
        showAll={showAll}
        handleSelectTag={this.handleSelectTag}
        toggleShowAll={this.toggleShowAll}
      />
    );
  }
}

export const TagFilterContainer = TagFilterClass;
