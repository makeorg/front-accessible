import React from 'react';
import { i18n } from 'Shared/i18n';
import { IdeasPageTitleStyle } from 'Client/pages/Consultation/style';

import { IdeaCard } from '../IdeaCard';

export const IdeaCards = () => {
  return (
    <>
      <IdeasPageTitleStyle>
        {i18n.t('idea_card.title', { count: 10 })}
      </IdeasPageTitleStyle>
      <IdeaCard />
    </>
  );
};
