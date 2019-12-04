// @flow
import React from 'react';
import { useMobile } from 'Client/hooks/useMedia';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { LocalActors } from 'Client/ui/Elements/LocalActors';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { i18n } from 'Shared/i18n';

type Props = {
  question: TypeQuestion,
};

export const LocalActorsTile = ({ question }: Props) => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <Collapse title={i18n.t('consultation.local_actors.title')} withTileStyle>
        <LocalActors questionId={question.questionId} slug={question.slug} />
      </Collapse>
    );
  }

  return (
    <TileWithTitle title={i18n.t('consultation.local_actors.title')}>
      <LocalActors questionId={question.questionId} slug={question.slug} />
    </TileWithTitle>
  );
};
