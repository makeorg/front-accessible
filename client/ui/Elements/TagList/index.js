// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { useMobile } from 'Client/hooks/useMedia';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton/index';
import {
  TagListStyle,
  TagListElementStyle,
  TagListHeaderStyle,
  TagElementUnderlinedStyle,
  TaglistWrapperStyle,
  TagListFooterStyle,
  CenterButtonStyle,
} from './style';

type Tag = {
  label: string,
  isSelected: boolean,
  tagId: string,
};

type Props = {
  /** Array of tags to populate the list */
  tags: Tag[],
  /** Has header or not */
  hasHeader: boolean,
  /** Function to execute when we select one tag */
  setTags: (args: Tag[]) => void,
  /** close the panel, closePanel prop is sent by SelectPanel */
  closePanel?: () => void,
  /** Function that reset the tags */
  resetTags: () => void,
  /** count of tags */
  tagsSelected: number,
  /** Function sets if the parent select should be highlighted or not  */
  setHighlighted?: (args: boolean) => void,
};

const TagListHeader = ({ setReset, tagsSelected }) => (
  <TagListHeaderStyle>
    <span>{i18n.t('consultation.tags.count', { count: tagsSelected })}</span>
    <TagElementUnderlinedStyle onClick={setReset}>
      {i18n.t('consultation.reset')}
    </TagElementUnderlinedStyle>
  </TagListHeaderStyle>
);

export const TagList = ({
  tags,
  hasHeader = true,
  setTags,
  closePanel,
  resetTags,
  tagsSelected = 0,
  setHighlighted,
}: Props) => {
  const isMobile = useMobile();
  const updateSelectedTags = (tag: Tag) => {
    const newTags = tags.map(tagItem => ({
      ...tagItem,
      isSelected:
        tagItem.tagId === tag.tagId ? !tagItem.isSelected : tagItem.isSelected,
    }));
    setTags(newTags);
    if (setHighlighted) {
      setHighlighted(newTags.filter(t => t.isSelected === true).length > 0);
    }
  };

  const setReset = () => {
    resetTags();
    if (setHighlighted) {
      setHighlighted(false);
    }
    if (closePanel) {
      closePanel();
    }
  };

  return (
    <TaglistWrapperStyle>
      {hasHeader && (
        <TagListHeader setReset={setReset} tagsSelected={tagsSelected} />
      )}
      <TagListStyle>
        {tags.map(tag => (
          <TagListElementStyle
            key={tag.tagId}
            isSelected={tag.isSelected}
            onClick={() => updateSelectedTags(tag)}
          >
            <span>{tag.label}</span>
            {tag.isSelected && <span>x</span>}
          </TagListElementStyle>
        ))}
      </TagListStyle>
      {isMobile && (
        <TagListFooterStyle onClick={closePanel}>
          {tagsSelected > 0 ? (
            <CenterButtonStyle>
              <SubmitButton
                label={i18n.t('consultation.proposal.see_proposals')}
              />
            </CenterButtonStyle>
          ) : (
            <span>{i18n.t('consultation.close')}</span>
          )}
        </TagListFooterStyle>
      )}
    </TaglistWrapperStyle>
  );
};
