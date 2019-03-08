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
import { ProposalCardTagged } from 'Client/features/proposal/ProposalCardTagged';
import { ProposalType } from 'Shared/types/proposal';
import { TagFilter } from 'Client/features/consultation/TagsFilter';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { HiddenOnMobileStyle } from 'Client/ui/Elements/HiddenElements';
import {
  ConsultationPageWrapperStyle,
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
  ProposalCardTaggedStyle,
} from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  proposals: ProposalType[],
  selectedTagIds: string[],
  handleSelectTag: () => void,
};

export const ConsultationPageComponent = (props: Props) => {
  const {
    questionConfiguration,
    question,
    proposals,
    selectedTagIds,
    handleSelectTag,
  } = props;

  const { metas } = questionConfiguration.wording;

  return (
    <React.Fragment aria-describedby="presentation_text">
      <MetaTags
        title={metas.title}
        description={metas.description}
        picture={metas.picture}
      />
      <IntroBanner />
      <ConsultationPageWrapperStyle>
        <ConsultationPageContentStyle>
          <TagFilter
            question={question}
            handleSelectTag={handleSelectTag}
            selectedTagIds={selectedTagIds}
          />
          {proposals &&
            proposals.map(proposal => (
              <ProposalCardTaggedStyle>
                <ProposalCardTagged
                  key={proposal.id}
                  questionConfiguration={questionConfiguration}
                  proposal={proposal}
                />
              </ProposalCardTaggedStyle>
            ))}
        </ConsultationPageContentStyle>
        <ConsultationPageSidebarStyle as="aside">
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
          <HiddenOnMobileStyle>
            <SidebarTile title={i18n.t('consultation.sharing.title')}>
              <Sharing />
            </SidebarTile>
          </HiddenOnMobileStyle>
        </ConsultationPageSidebarStyle>
      </ConsultationPageWrapperStyle>
    </React.Fragment>
  );
};
