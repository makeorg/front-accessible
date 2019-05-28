// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Tracking } from 'Shared/services/Tracking';
import { Founders } from '../Founders';
import { SidebarNewWindowLink } from '../SidebarLink';

type Props = {
  questionConfiguration: TypeQuestionConfiguration,
};

export const PresentationComponent = (props: Props) => {
  const { questionConfiguration } = props;
  const founders = questionConfiguration.partners.filter(
    partner => partner.isFounder
  );
  return (
    <React.Fragment>
      <ParagraphStyle
        id="presentation_text"
        dangerouslySetInnerHTML={{
          __html: questionConfiguration.consultation.presentation,
        }}
      />
      <SidebarNewWindowLink
        linkUrl={questionConfiguration.aboutUrl}
        linkText={i18n.t('consultation.presentation.link_text')}
        tracking={() => Tracking.trackClickLearnMore()}
      />
      <Founders
        founders={founders}
        isGreatCause={questionConfiguration.isGreatCause}
      />
    </React.Fragment>
  );
};
