// @flow

import React from 'react';
import { trackTag } from 'Shared/services/Tracking';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { Tag } from 'Client/ui/Elements/Tag';
import { i18n } from 'Shared/i18n';
import { TagStyle, TagButtonStyle } from 'Client/ui/Elements/Tag/Styled';
import {
  TagFilterWrapperStyle,
  TagSeparatorStyle,
  TagListStyle,
  TagListItemStyle,
  TagFilterIntroStyle,
} from '../Styled/TagFilter';

type Props = {
  /** List of tags */
  tags: TypeTag[],
  /** List of select tag id */
  selectedTagIdList: string[],
  /** Show all tags in the filter or not */
  showAll: boolean,
  /** Function to toggle show all tags */
  toggleShowAll: () => void,
  /** Function to handle tag selection */
  handleSelectTag: (tagId: TypeTag) => void,
};

const filterShowAllTags = (index, showAll) => showAll || index < 6;

export const TagFilterComponent = (props: Props) => {
  const {
    tags,
    selectedTagIdList,
    showAll,
    handleSelectTag,
    toggleShowAll,
  } = props;

  const displayShowAll = tags.length > 5;

  return (
    <TagFilterWrapperStyle aria-labelledby="tag_filter_title">
      <TagFilterIntroStyle
        id="tag_filter_title"
        dangerouslySetInnerHTML={{
          __html: i18n.t('consultation.tags.intro'),
        }}
      />
      <TagListStyle>
        {tags
          .filter((tag, index) => filterShowAllTags(index, showAll))
          .map(tag => {
            const isSelected = selectedTagIdList.includes(tag.tagId);
            return (
              <TagListItemStyle key={tag.tagId}>
                <Tag
                  name={tag.label}
                  key={tag.tagId}
                  isSelected={isSelected}
                  onClick={() => {
                    trackTag(tag.label, isSelected ? 'deselect' : 'select');
                    handleSelectTag(tag);
                  }}
                  isAButton
                />
              </TagListItemStyle>
            );
          })}
        {displayShowAll && (
          <TagListItemStyle>
            <TagStyle
              onClick={toggleShowAll}
              className="selected"
              as={TagButtonStyle}
            >
              {showAll ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: i18n.t('consultation.tags.show_less'),
                  }}
                />
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: i18n.t('consultation.tags.show_all'),
                  }}
                />
              )}
            </TagStyle>
          </TagListItemStyle>
        )}
      </TagListStyle>
      <TagSeparatorStyle />
    </TagFilterWrapperStyle>
  );
};
