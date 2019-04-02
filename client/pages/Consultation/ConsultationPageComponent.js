import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { type TabsContent } from 'Shared/types/tabs';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { Tabs } from 'Client/ui/Tabs';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { HiddenOnDesktopStyle } from 'Client/ui/Elements/HiddenElements';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
  tabsContent: TabsContent[],
};

export const ConsultationPageComponent = (props: Props) => {
  const { questionConfiguration, question, tabsContent } = props;

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
        <Tabs tabsContent={tabsContent} />
      </ConsultationPageWrapperStyle>
      <HiddenOnDesktopStyle>
        <MobileSharing />
      </HiddenOnDesktopStyle>
    </React.Fragment>
  );
};
