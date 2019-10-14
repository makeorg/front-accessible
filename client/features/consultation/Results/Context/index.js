import React from 'react';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { i18n } from 'Shared/i18n';
import { trackClickLearnMore } from 'Shared/services/Tracking';
import { SidebarNewWindowLink } from '../../Sidebar/Link';

type Props = {
  aboutUrl: string,
  context: string,
};

export const ResultsContext = ({ aboutUrl, context }: Props) => {
  return (
    <ParagraphStyle>
      {context}
      &nbsp;
      <SidebarNewWindowLink
        linkUrl={aboutUrl}
        linkText={i18n.t('consultation.presentation.link_text')}
        tracking={() => trackClickLearnMore()}
      />
    </ParagraphStyle>
  );
};
