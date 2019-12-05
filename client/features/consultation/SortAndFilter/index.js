// @flow
import React, { useMemo } from 'react';
import { type TypeTag } from 'Shared/types/tag';
import { i18n } from 'Shared/i18n';
import { useMobile } from 'Client/hooks/useMedia';
import { ConsultationIconStyle } from 'Client/pages/Operation/Styled';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { SelectPanel } from 'Client/ui/Elements/SelectPanel';
import { TagList } from 'Client/ui/Elements/TagList';
import { SortedList } from 'Client/ui/Elements/SortedList';
import { SORT_ALGORITHM } from 'Shared/api/ProposalApiService';
import { TagTooltip } from 'Client/ui/Elements/TagTooltip';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  TagSectionTitle,
  FiltersContainerStyle,
  SeparatorStyle,
  ResetStyle,
  TextStyle,
  SelectContainerStyle,
} from '../Styled/TagFilter';

type Props = {
  sort: string,
  setSort: (arg: string) => void,
  tags: TypeTag[],
  setTags: (args: TypeTag[]) => void,
  resetTags: () => void,
};

export const SortAndFilter = ({
  sort,
  setSort,
  tags,
  setTags,
  resetTags,
}: Props) => {
  const AVAILABLE_SORTS_KEYS = useMemo(() => Object.keys(SORT_ALGORITHM), []);

  const isMobile = useMobile();

  const hasTags = !!(tags.length > 0);
  const selectedTags = tags.filter(tag => tag.isSelected);
  const selectedTagsCount = selectedTags.length;

  return (
    <>
      <TagSectionTitle as="h3" id="tag_list">
        <ConsultationIconStyle aria-hidden>
          <SvgThumbsUp style={{ width: '18px', height: '18px' }} />
        </ConsultationIconStyle>
        {i18n.t('common.vote_on_proposals')}
      </TagSectionTitle>
      <ColumnElementStyle>
        {hasTags && !isMobile && <TagTooltip />}
        <FiltersContainerStyle>
          {!isMobile && <TextStyle>{i18n.t('consultation.sortby')}</TextStyle>}
          <SelectContainerStyle>
            <SelectPanel text={i18n.t(`consultation.sort.${sort}`)} exposeClose>
              <SortedList
                currentSort={sort}
                availableSorts={AVAILABLE_SORTS_KEYS}
                setSort={setSort}
              />
            </SelectPanel>
            {!isMobile && hasTags && <SeparatorStyle>|</SeparatorStyle>}
            {hasTags && (
              <SelectPanel
                text={
                  isMobile
                    ? i18n.t(`consultation.tags.select_mobile`)
                    : i18n.t(`consultation.tags.select`)
                }
                exposeClose
                shouldHighlight={selectedTagsCount > 0}
                selectedElements={selectedTagsCount}
              >
                <TagList
                  tags={tags}
                  setTags={setTags}
                  resetTags={resetTags}
                  tagsSelected={selectedTagsCount}
                />
              </SelectPanel>
            )}
            {!isMobile && selectedTagsCount > 0 && (
              <ResetStyle onClick={resetTags}>
                {i18n.t('consultation.reset')}
              </ResetStyle>
            )}
          </SelectContainerStyle>
        </FiltersContainerStyle>
      </ColumnElementStyle>
    </>
  );
};