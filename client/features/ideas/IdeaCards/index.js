// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { TopIdeasPageTitleStyle } from 'Client/pages/Consultation/style';
import { type TopIdea as TypeTopIdea } from 'Shared/types/topIdea';

import { IdeaCard } from '../IdeaCard';

type Props = {
  topIdeas: TypeTopIdea[],
};

export const IdeaCards = ({ topIdeas }: Props) => {
  return (
    <>
      <TopIdeasPageTitleStyle>
        {i18n.t('idea_card.title', { count: 10 })}
      </TopIdeasPageTitleStyle>
      {topIdeas.map((topIdea, index) => (
        <IdeaCard position={index + 1} topIdea={topIdea} />
      ))}
    </>
  );
};
