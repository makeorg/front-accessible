// @flow
import { useMobile } from 'Client/hooks/useMedia';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Collapse } from 'Client/ui/Elements/Collapse';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { Presentation } from '../../Presentation';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
};
export const PresentationTile = ({
  question,
  questionConfiguration,
}: Props) => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <Collapse title={i18n.t('consultation.presentation.title')} withTileStyle>
        <Presentation
          questionConfiguration={questionConfiguration}
          question={question}
        />
      </Collapse>
    );
  }

  return (
    <TileWithTitle title={i18n.t('consultation.presentation.title')}>
      <Presentation
        questionConfiguration={questionConfiguration}
        question={question}
      />
    </TileWithTitle>
  );
};
