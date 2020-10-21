// @flow
import React, { useMemo, useEffect } from 'react';
import { type TagType } from 'Shared/types/tag';
import { i18n } from 'Shared/i18n';
import { useMobile } from 'Client/hooks/useMedia';
import { SelectPanel } from 'Client/ui/Elements/SelectPanel';
import { TagList } from 'Client/ui/Elements/TagList';
import { SortedList } from 'Client/ui/Elements/SortedList';
import { PROPOSALS_FEED_ALGORITHMS } from 'Shared/api/ProposalApiService';
import { Tip } from 'Client/ui/Elements/Notifications/Tip';
import { TAGS_LIST, SORT_LIST, TAGS_SECTION } from 'Shared/constants/ids';
import { useDispatch } from 'react-redux';
import {
  clearNotificationTip,
  displayNotificationTip,
} from 'Shared/store/actions/notifications';
import { TAGS_TIP } from 'Shared/constants/notifications';
import { TagsTip } from 'Client/app/Notifications/Tip/Tags';
import {
  TagSectionTitle,
  FiltersWrapperStyle,
  FiltersContainerStyle,
  SeparatorStyle,
  ResetStyle,
  TextStyle,
  SelectContainerStyle,
} from '../Styled/TagFilter';

type Props = {
  sort: string,
  setSort: (arg: string) => void,
  tags: TagType[],
  setTags: (args: TagType[]) => void,
  resetTags: () => void,
};

export const SortAndFilter = ({
  sort,
  setSort,
  tags,
  setTags,
  resetTags,
}: Props) => {
  const AVAILABLE_SORTS_KEYS = useMemo(
    () => Object.keys(PROPOSALS_FEED_ALGORITHMS),
    []
  );

  const isMobile = useMobile();
  const dispatch = useDispatch();

  const hasTags = !!(tags.length > 0);
  const selectedTags = tags.filter(tag => tag.isSelected);
  const selectedTagsCount = selectedTags.length;

  useEffect(() => {
    dispatch(displayNotificationTip(TAGS_TIP, <TagsTip />, undefined, true));
    return () => dispatch(clearNotificationTip());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TagSectionTitle as="h3" id={TAGS_SECTION}>
        {i18n.t('common.vote_on_proposals')}
      </TagSectionTitle>
      <FiltersWrapperStyle>
        {hasTags && !isMobile && <Tip />}
        <FiltersContainerStyle>
          {!isMobile && <TextStyle>{i18n.t('consultation.sortby')}</TextStyle>}
          <SelectContainerStyle>
            <SelectPanel
              id={SORT_LIST}
              text={i18n.t(`consultation.sort.${sort}`)}
              exposeClose
            >
              <SortedList
                currentSort={sort}
                availableSorts={AVAILABLE_SORTS_KEYS}
                setSort={setSort}
              />
            </SelectPanel>
            {!isMobile && hasTags && <SeparatorStyle>|</SeparatorStyle>}
            {hasTags && (
              <SelectPanel
                id={TAGS_LIST}
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
      </FiltersWrapperStyle>
    </>
  );
};
