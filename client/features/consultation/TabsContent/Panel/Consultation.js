import React from 'react';
import { i18n } from 'Shared/i18n';
import { SidebarTile } from 'Client/ui/Elements/SidebarTile';
import { Presentation } from 'Client/features/consultation/Presentation';
import { Partners } from 'Client/features/consultation/Partners';
import { Sharing } from 'Client/features/sharing';
import { TagFilter } from 'Client/features/consultation/TagsFilter';
import { Collapse } from 'Client/ui/Elements/Collapse';
import {
  HiddenOnMobileStyle,
  HiddenOnDesktopStyle,
} from 'Client/ui/Elements/HiddenElements';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import {
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
} from 'Client/pages/Consultation/Styled';
import { ConsultationPanelInnerStyle } from '../../Styled/Tabs';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  selectedTagIds: string[],
  handleSelectTag: () => void,
  trackPresentationCollpase: (action: string) => void,
};

export const ConsultationPanelContent = (props: Props) => {
  const {
    questionConfiguration,
    question,
    selectedTagIds,
    handleSelectTag,
    trackPresentationCollpase,
  } = props;

  return (
    <ConsultationPanelInnerStyle>
      {question.canPropose && (
        <HiddenOnDesktopStyle>
          <ConsultationProposal
            question={question}
            questionConfiguration={questionConfiguration}
          />
        </HiddenOnDesktopStyle>
      )}
      <ConsultationPageSidebarStyle
        id="sidebar"
        as="aside"
        bottomAffix={questionConfiguration.isGreatCause}
      >
        <Collapse
          title={i18n.t('consultation.presentation.title')}
          forceExpand
          trackCollapse={trackPresentationCollpase}
          questionId={question.questionId}
        >
          <Presentation />
        </Collapse>
        {questionConfiguration.isGreatCause && (
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
        <HiddenOnMobileStyle>
          <SidebarTile title={i18n.t('consultation.sharing.title')}>
            <Sharing />
          </SidebarTile>
        </HiddenOnMobileStyle>
      </ConsultationPageSidebarStyle>
      <ConsultationPageContentStyle id="main">
        {question.canPropose && (
          <HiddenOnMobileStyle>
            <ConsultationProposal
              question={question}
              questionConfiguration={questionConfiguration}
            />
          </HiddenOnMobileStyle>
        )}
        <ParticipateBanner
          question={question}
          questionConfiguration={questionConfiguration}
        />
        <TagFilter
          question={question}
          handleSelectTag={handleSelectTag}
          selectedTagIds={selectedTagIds}
        />
        <InfiniteProposals question={question} tags={selectedTagIds} />
      </ConsultationPageContentStyle>
    </ConsultationPanelInnerStyle>
  );
};
