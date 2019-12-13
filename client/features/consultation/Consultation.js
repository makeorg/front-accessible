// @flow
import React, { useState, useEffect, useMemo } from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type TypeTag } from 'Shared/types/tag';
import { useMobile } from 'Client/hooks/useMedia';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import { ConsultationPageContentStyle } from 'Client/pages/Operation/Styled';
import { MetaTags } from 'Client/app/MetaTags';
import { trackDisplayConsultation } from 'Shared/services/Tracking';
import { SORT_ALGORITHM } from 'Shared/api/ProposalApiService';
import { TagService } from 'Shared/api/TagService';
import { PopularProposals } from 'Client/features/proposal/PopularProposals';
import { ConsultationSidebar } from './Sidebar';
import { SortAndFilter } from './SortAndFilter';

type Props = {
  question: TypeQuestion,
};

export const ConsultationContent = ({ question }: Props) => {
  // Sorting
  const AVAILABLE_SORTS_KEYS: string[] = useMemo(
    () => Object.keys(SORT_ALGORITHM),
    []
  );
  const [sort, setSort] = useState<string>(AVAILABLE_SORTS_KEYS[0]);

  // Filtering
  const [tags, setTags] = useState<TypeTag[]>([]);

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

  const selectedTags = tags.filter(tag => tag.isSelected);

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
        <SortAndFilter
          sort={sort}
          setSort={setSort}
          tags={tags}
          setTags={setTags}
          resetTags={resetTags}
        />
        <ParticipateBanner question={question} />
        <InfiniteProposals
          question={question}
          sortTypeKey={sort}
          tags={selectedTags.map(tag => tag.tagId)}
        />
        <PopularProposals question={question} />
      </ConsultationPageContentStyle>
    </React.Fragment>
  );
};
