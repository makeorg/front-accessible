// @flow
import React, { useState, useEffect, useMemo } from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { useMobile } from 'Client/hooks/useMedia';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import {
  ConsultationPageContentStyle,
  ConsultationIconStyle,
} from 'Client/pages/Operation/Styled';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { MetaTags } from 'Client/app/MetaTags';
import { trackDisplayConsultation } from 'Shared/services/Tracking';

import { SelectPanel } from 'Client/features/SelectPanel';
import { TagList } from 'Client/ui/Elements/TagList';
import { SortedList } from 'Client/ui/Elements/SortedList';
import { SORT_ALGORITHM } from 'Shared/api/ProposalApiService';
import { TagService } from 'Shared/api/TagService';
import { TagTooltip } from 'Client/ui/Elements/TagTooltip/index';
import {
  TagSectionTitle,
  FiltersContainerStyle,
  SeparatorStyle,
  ResetStyle,
  TextStyle,
  SelectContainerStyle,
} from './Styled/TagFilter';
import { ConsultationSidebar } from './Sidebar';

type Props = {
  question: TypeQuestion,
};

export const ConsultationContent = ({ question }: Props) => {
  // Sorting
  const AVAILABLE_SORTS_KEYS = useMemo(() => Object.keys(SORT_ALGORITHM), []);
  const [sort, setSort] = useState(AVAILABLE_SORTS_KEYS[0]);

  // Filtering
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const questionTags = await TagService.getList(
        question.questionId,
        question.country,
        question.language
      );
      const extendedTags = questionTags.map(tag => ({
        ...tag,
        isSelected: false,
      }));
      setTags(extendedTags);
    };
    if (question) {
      fetchTags();
    }
  }, [question]);

  const isMobile = useMobile();
  const renderMobileProposal = question.canPropose && isMobile;
  const renderDesktopProposal = question.canPropose && !isMobile;

  useEffect(() => {
    if (question) {
      trackDisplayConsultation('consultation');
    }
  }, [question]);

  const resetTags = () => {
    setTags(tags.map(tag => ({ ...tag, isSelected: false })));
  };

  const hasTags = !!(tags.length > 0);
  const selectedTags = tags.filter(tag => tag.isSelected);
  const selectedTagsCount = selectedTags.length;

  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.consultation.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      {renderMobileProposal && <ConsultationProposal question={question} />}
      <ConsultationSidebar question={question} />
      <ConsultationPageContentStyle id="main">
        {renderDesktopProposal && <ConsultationProposal question={question} />}
        <TagSectionTitle as="h3" id="tag_list">
          <ConsultationIconStyle aria-hidden>
            <SvgThumbsUp style={{ width: '18px', height: '18px' }} />
          </ConsultationIconStyle>
          {i18n.t('common.vote_on_proposals')}
        </TagSectionTitle>
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
                  hasHeader
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
        {hasTags && !isMobile && <TagTooltip />}
        <ParticipateBanner question={question} />
        <InfiniteProposals
          question={question}
          sortTypeKey={sort}
          tags={selectedTags.map(tag => tag.tagId)}
        />
      </ConsultationPageContentStyle>
    </React.Fragment>
  );
};
