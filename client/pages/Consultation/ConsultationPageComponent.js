import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { Presentation } from 'Client/features/consultation/Presentation';
import {
  ConsultationPageWrapperStyle,
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
} from './Styled';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

export const ConsultationPageComponent = (props: Props) => {
  const { questionConfiguration } = props;

  if (!questionConfiguration) {
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
          left content
        </ConsultationPageContentStyle>
        <ConsultationPageSidebarStyle as="aside">
          <Presentation />
        </ConsultationPageSidebarStyle>
      </ConsultationPageWrapperStyle>
    </React.Fragment>
  );
};
