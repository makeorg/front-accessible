import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { RedLink } from 'Client/ui/Elements/LinkElements';

type Props = {
  questionConfiguration: QuestionConfiguration,
};

export const PresentationComponent = (props: Props) => {
  const { questionConfiguration } = props;
  return (
    <ParagraphStyle id="presentation_text">
      {questionConfiguration.consultation.presentation}
      <RedLink href={questionConfiguration.aboutUrl} target="_blank">
        {i18n.t('consultation.presentation.link_text')}
      </RedLink>
    </ParagraphStyle>
  );
};
