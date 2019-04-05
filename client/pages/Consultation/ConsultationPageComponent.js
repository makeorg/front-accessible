import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { HiddenOnDesktopStyle } from 'Client/ui/Elements/HiddenElements';
import { TabPanel } from 'react-tabs';
import {
  TabsWrapperStyle,
  TabListStyle,
  TabStyle,
} from 'Client/ui/Elements/Tabs';
import { ConsultationPanelContent } from 'Client/features/consultation/TabsContent/Panel/Consultation';
import { ActionsPanelContent } from 'Client/features/consultation/TabsContent/Panel/Actions';
import { ConsultationTabContent } from 'Client/features/consultation/TabsContent/Tab/Consultation';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  selectedTagIds: string[],
  handleSelectTag: () => void,
  trackPresentationCollpase: () => void,
  trackMoreLink: () => void,
};

export const ConsultationPageComponent = (props: Props) => {
  const {
    questionConfiguration,
    question,
    selectedTagIds,
    handleSelectTag,
    trackPresentationCollpase,
    trackMoreLink,
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
        <TabsWrapperStyle>
          <TabListStyle>
            <TabStyle>
              <ConsultationTabContent question={question} />
            </TabStyle>
            <TabStyle>{i18n.t('consultation.tabs.action')}</TabStyle>
          </TabListStyle>
          <TabPanel>
            <ConsultationPanelContent
              question={question}
              questionConfiguration={questionConfiguration}
              selectedTagIds={selectedTagIds}
              handleSelectTag={handleSelectTag}
              trackPresentationCollpase={trackPresentationCollpase}
            />
          </TabPanel>
          <TabPanel>
            <ActionsPanelContent
              questionConfiguration={questionConfiguration}
              trackMoreLink={trackMoreLink}
            />
          </TabPanel>
        </TabsWrapperStyle>
      </ConsultationPageWrapperStyle>
      <HiddenOnDesktopStyle>
        <MobileSharing />
      </HiddenOnDesktopStyle>
    </React.Fragment>
  );
};
