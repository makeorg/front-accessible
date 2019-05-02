// @flow
import React from 'react';
import { type Question } from 'Shared/types/question';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { TagService } from 'Shared/api/TagService';
import { Logger } from 'Shared/services/Logger';
import { TagFilterComponent } from './TagFilterComponent';

type Props = {
  question: Question,
  selectedTagIds: string[],
  handleSelectTag: TypeTag => void,
};

type State = {
  /** List of tags */
  tags: TypeTag[],
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
      />
    );
  }
}

export const TagFilterContainer = TagFilterClass;
