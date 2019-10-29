// @flow

import React, { useState, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { useMobile } from 'Client/hooks/useMedia';
import { TagFilter } from 'Client/features/consultation/TagsFilter';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import {
  ConsultationPageContentStyle,
  ConsultationIconStyle,
} from 'Client/pages/Consultation/Styled';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { MetaTags } from 'Client/app/MetaTags';
import { trackDisplayConsultation } from 'Shared/services/Tracking';
import { updateRequestContext } from 'Shared/helpers/apiService';
import { TagSectionTitle } from '../../Styled/TagFilter';
import { ConsultationPannelSidebar } from '../../Sidebar/ConsultationPannel';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
  question: TypeQuestion,
};

const toggleTagIdInList = (tagIdList: string[], tagId: string): string[] => {
  const listHasTagId = tagIdList.includes(tagId);
  const newTagIdList = listHasTagId
    ? tagIdList.filter(selectedTagId => selectedTagId !== tagId)
    : [tagId, ...tagIdList];

  return newTagIdList;
};

export const ConsultationPanelContent = ({
  questionConfiguration,
  question,
}: Props) => {
  const [selectedTagIdList, setSelectedTagIdList] = useState([]);
  const isMobile = useMobile();
  const renderMobileProposal = question.canPropose && isMobile;
  const renderDesktopProposal = question.canPropose && !isMobile;

  const handleSelectTag = (tag: TypeTag) => {
    const newSelectedTagIdList = toggleTagIdInList(
      selectedTagIdList,
      tag.tagId
    );

    setSelectedTagIdList(newSelectedTagIdList);
  };

  useEffect(() => {
    if (question) {
      updateRequestContext(question);
      trackDisplayConsultation('consultation');
    }
  }, [question]);

  return (
    <React.Fragment>
      <MetaTags
        title={i18n.t('meta.consultation.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      {renderMobileProposal && (
        <ConsultationProposal
          question={question}
          questionConfiguration={questionConfiguration}
        />
      )}
      <ConsultationPannelSidebar
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageContentStyle id="main">
        {renderDesktopProposal && (
          <ConsultationProposal
            question={question}
            questionConfiguration={questionConfiguration}
          />
        )}
        <TagSectionTitle as="h3" id="tag_list">
          <ConsultationIconStyle aria-hidden>
            <SvgThumbsUp style={{ width: '18px', height: '18px' }} />
          </ConsultationIconStyle>
          {i18n.t('common.vote_on_proposals')}
        </TagSectionTitle>
        <TagFilter
          question={question}
          handleSelectTag={handleSelectTag}
          selectedTagIdList={selectedTagIdList}
        />
        <ParticipateBanner question={question} />
        <InfiniteProposals question={question} tags={selectedTagIdList} />
      </ConsultationPageContentStyle>
    </React.Fragment>
  );
};
