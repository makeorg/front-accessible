// @flow
import React from 'react';
import { type TagType } from 'Shared/types/tag';
import { i18n } from 'Shared/i18n';
import { trackTag } from 'Shared/services/Tracking';
import { useMobile } from 'Client/hooks/useMedia';
import { SvgClose } from 'Client/ui/Svg/elements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { FLUSH_TAGS_TRIGGER } from 'Shared/constants/ids';
import {
  TagListStyle,
  TagButtonElementStyle,
  TagListHeaderStyle,
  TagElementUnderlinedStyle,
  TaglistWrapperStyle,
  TagListFooterStyle,
  CenterButtonStyle,
  TagLabelStyle,
  ProposalCountStyle,
} from './style';
import { ScreenReaderItemStyle } from '../AccessibilityElements';
import { ActiveButtonStyle } from '../Buttons/style';

type Props = {
  /** Array of tags to populate the list */
  tags: TagType[],
  /** Function to execute when we select one tag */
  setTags: (args: TagType[]) => void,
  /** close the panel, closePanel prop is sent by SelectPanel */
  closePanel?: () => void,
  /** Function that reset the tags */
  resetTags: () => void,
  /** count of tags */
  tagsSelected?: number,
};

const TagListHeader = ({ setReset, tagsSelected }) => (
  <TagListHeaderStyle>
    <span>{i18n.t('consultation.tags.count', { count: tagsSelected })}</span>
    {tagsSelected > 0 && (
      <TagElementUnderlinedStyle id={FLUSH_TAGS_TRIGGER} onClick={setReset}>
        {i18n.t('consultation.reset')}
      </TagElementUnderlinedStyle>
    )}
  </TagListHeaderStyle>
);

export const TagList = ({
  tags,
  setTags,
  closePanel,
  resetTags,
  tagsSelected = 0,
}: Props) => {
  const isMobile = useMobile();
  const updateSelectedTags = (tag: TagType) => {
    trackTag(tag.label, tag.isSelected ? 'unselect' : 'select');
    const newTags = tags.map(tagItem => ({
      ...tagItem,
      isSelected:
        tagItem.tagId === tag.tagId ? !tagItem.isSelected : tagItem.isSelected,
    }));
    setTags(newTags);
  };

  const setReset = () => {
    resetTags();
    if (closePanel) {
      closePanel();
    }
  };

  return (
    <TaglistWrapperStyle>
      <TagListStyle>
        {tags
          .filter(tag => tag.proposalCount > 0)
          .map(tag => (
            <li key={tag.tagId}>
              <TagButtonElementStyle
                isSelected={tag.isSelected}
                onClick={() => updateSelectedTags(tag)}
                aria-live="polite"
                id={`stake_trigger_${tag.tagId}`}
              >
                <ScreenReaderItemStyle>
                  {tag.isSelected
                    ? i18n.t('consultation.tags.remove_filter')
                    : i18n.t('consultation.tags.add_filter')}
                </ScreenReaderItemStyle>
                <TagLabelStyle>
                  {tag.label}
                  <ProposalCountStyle isSelected={tag.isSelected}>
                    {`(${tag.proposalCount})`}
                  </ProposalCountStyle>
                </TagLabelStyle>
                {tag.isSelected && (
                  <SvgClose
                    style={{ width: '10px', fill: BasicColors.PureWhite }}
                    aria-hidden
                  />
                )}
              </TagButtonElementStyle>
            </li>
          ))}
      </TagListStyle>
      {isMobile && (
        <TagListFooterStyle onClick={closePanel}>
          {tagsSelected > 0 ? (
            <CenterButtonStyle>
              <ActiveButtonStyle>
                {i18n.t('consultation.proposal.see_proposals')}
              </ActiveButtonStyle>
            </CenterButtonStyle>
          ) : (
            <span>{i18n.t('consultation.close')}</span>
          )}
        </TagListFooterStyle>
      )}
      <TagListHeader setReset={setReset} tagsSelected={tagsSelected} />
    </TaglistWrapperStyle>
  );
};
