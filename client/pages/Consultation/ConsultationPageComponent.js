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
};

export const ConsultationPageComponent = (props: Props) => {
  const { questionConfiguration, question, proposals } = props;

  if (!questionConfiguration || !question) {
    return null;
  }
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
          <TagFilter question={question} />
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
          <SidebarTile title={i18n.t('consultation.presentation.title')}>
            <Presentation />
          </SidebarTile>
          {questionConfiguration.partners && <Partners />}
          <SidebarTile title={i18n.t('consultation.sharing.title')}>
            <Sharing />
          </SidebarTile>
        </ConsultationPageSidebarStyle>
      </ConsultationPageWrapperStyle>
    </React.Fragment>
  );
};
