import React from 'react';
import { TagType } from 'Shared/types/proposal';
import { Tag } from 'Client/ui/Elements/Tag';
import { i18n } from 'Shared/i18n';
import { TagFilterStyle, TagFilterIntroStyle } from '../Styled/TagFilter';

type Props = {
  /** List of tags */
  tags: Array<TagType>,
  /** List of select tag id */
  selectedTagIds: Array<string>,
  /** Show all tags in the filter or not */
  showAll: boolean,
  /** Function to toggle show all tags */
  toggleShowAll: () => void,
  /** Function to handle tag selection */
  handleSelectTag: () => void,
};

const filterShowAllTags = (index, showAll) => showAll || index < 6;

export const TagFilterComponent = (props: Props) => {
  const {
    tags,
    selectedTagIds,
    showAll,
    handleSelectTag,
    toggleShowAll,
  } = props;

  return (
    <TagFilterStyle>
      <TagFilterIntroStyle>
        {i18n.t('consultation.tags.intro')}
      </TagFilterIntroStyle>
      {tags
        .filter((tag, index) => filterShowAllTags(index, showAll))
        .map(tag => (
          <Tag
            name={tag.label}
            key={tag.tagId}
            selected={selectedTagIds.includes(tag.tagId)}
            onClick={() => handleSelectTag(tag.tagId)}
          />
        ))}
      <Tag
        name={
          showAll
            ? i18n.t('consultation.tags.show_less')
            : i18n.t('consultation.tags.show_all')
        }
        selected
        onClick={toggleShowAll}
        key="all"
      />
    </TagFilterStyle>
  );
};