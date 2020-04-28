// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { LocalActors } from 'Client/features/flipping/LocalActors';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { i18n } from 'Shared/i18n';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SIDEBAR_ACTIVE_ACTORS } from 'Shared/constants/featureFlipping';

type Props = {
  question: QuestionType,
};

export const LocalActorsTile = ({ question }: Props) => {
  const isSidebarActiveActors = checkIsFeatureActivated(
    CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
    question.activeFeatures
  );

  if (!isSidebarActiveActors) {
    return null;
  }

  return (
    <TileWithTitle title={i18n.t('consultation.local_actors.title')}>
      <LocalActors questionId={question.questionId} slug={question.slug} />
    </TileWithTitle>
  );
};
