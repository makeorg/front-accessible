import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
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
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { SkipLink } from 'Client/app/Styled/MainElements';
import {
  ConsultationPageWrapperStyle,
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
} from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  selectedTagIds: string[],
  handleSelectTag: () => void,
};

export const ConsultationPageComponent = (props: Props) => {
  const {
    questionConfiguration,
    question,
    selectedTagIds,
    handleSelectTag,
  } = props;

  const { metas } = questionConfiguration.wording;

  return (
    <React.Fragment>
      <MetaTags
        title={metas.title}
        description={metas.description}
        picture={metas.picture}
      />
      <SkipLink as="a" href="#intro ">
        {i18n.t('skip_links.intro')}
      </SkipLink>
      <SkipLink as="a" href="#main ">
        {i18n.t('skip_links.main')}
      </SkipLink>
      <SkipLink as="a" href="#sidebar">
        {i18n.t('skip_links.sidebar')}
      </SkipLink>
      <IntroBanner
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageWrapperStyle>
        <ConsultationPageSidebarStyle
          id="sidebar"
          as="aside"
          bottomAffix={questionConfiguration.isGreatCause}
        >
          <Collapse
            title={i18n.t('consultation.presentation.title')}
            forceExpand
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
          <HiddenOnMobileStyle aria-hidden>
            <SidebarTile title={i18n.t('consultation.sharing.title')}>
              <Sharing />
            </SidebarTile>
          </HiddenOnMobileStyle>
        </ConsultationPageSidebarStyle>
        <ConsultationPageContentStyle id="main">
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
        <HiddenOnDesktopStyle>
          <MobileSharing />
        </HiddenOnDesktopStyle>
      </ConsultationPageWrapperStyle>
    </React.Fragment>
  );
};
