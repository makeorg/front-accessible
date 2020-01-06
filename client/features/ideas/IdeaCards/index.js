// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { IdeasPageTitleStyle } from 'Client/pages/Consultation/style';
import { type Question as TypeQuestion } from 'Shared/types/question';

import { IdeaCard } from '../IdeaCard';

type Props = {
  question: TypeQuestion,
};

export const IdeaCards = ({ question }: Props) => {
  console.log('====>', question);

  return (
    <>
      <IdeasPageTitleStyle>
        {i18n.t('idea_card.title', { count: 10 })}
      </IdeasPageTitleStyle>
      <IdeaCard position={1} />
    </>
  );
};
