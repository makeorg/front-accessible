import React from 'react';
import type { QuestionConfiguration } from 'Shared/types/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
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
    <React.Fragment>
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
          sidebar
        </ConsultationPageSidebarStyle>
      </ConsultationPageWrapperStyle>
    </React.Fragment>
  );
};
