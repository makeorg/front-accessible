// @flow

import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { isGreatCause } from 'Shared/helpers/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { useMobile } from 'Client/hooks/useMedia';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Presentation } from 'Client/features/consultation/Presentation';
import { Partners } from 'Client/features/consultation/Partners';
import { Sharing } from 'Client/features/sharing';
import { TagFilter } from 'Client/features/consultation/TagsFilter';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import {
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
  ConsultationIconStyle,
} from 'Client/pages/Consultation/Styled';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { MetaTags } from 'Client/app/MetaTags';
import { TagSectionTitle } from '../../Styled/TagFilter';

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
      <ConsultationPageSidebarStyle
        id="sidebar_content"
        as="aside"
        aria-label={i18n.t('common.sidebar_area')}
        bottomAffix={isGreatCause(question.operationKind)}
      >
        <Collapse
          title={i18n.t('consultation.presentation.title')}
          forceExpand
          trackCollapse={(action: string) =>
            Tracking.trackOpenLearnMore(action)
          }
          questionId={question.questionId}
        >
          <Presentation
            questionConfiguration={questionConfiguration}
            question={question}
          />
        </Collapse>
        {isGreatCause(question.operationKind) && (
          <Collapse
            title={i18n.t('consultation.partners.intro_title')}
            forceExpand
          >
            <Partners
              questionConfiguration={questionConfiguration}
              question={question}
            />
          </Collapse>
        )}
        {!isMobile && (
          <TileWithTitle title={i18n.t('consultation.sharing.title')}>
            <Sharing />
          </TileWithTitle>
        )}
      </ConsultationPageSidebarStyle>
      <ConsultationPageContentStyle id="main">
        {renderDesktopProposal && (
          <ConsultationProposal
            question={question}
            questionConfiguration={questionConfiguration}
          />
        )}
        <ParticipateBanner
          question={question}
          questionConfiguration={questionConfiguration}
        />
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
        <InfiniteProposals question={question} tags={selectedTagIdList} />
      </ConsultationPageContentStyle>
    </React.Fragment>
  );
};
