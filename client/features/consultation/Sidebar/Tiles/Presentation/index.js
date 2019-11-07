// @flow
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { PresentationTileWithTitleStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { DescriptionImageStyle } from 'Client/features/consultation/Styled/Presentation';
import { useMobile } from 'Client/hooks/useMedia';
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
  return (
    <>
      {!isMobile && question.descriptionImage && (
        <DescriptionImageStyle src={question.descriptionImage} alt="" />
      )}
      <TileWithTitle
        as={
          question.descriptionImage ? PresentationTileWithTitleStyle : undefined
        }
        title={i18n.t('consultation.presentation.title')}
      >
        <Presentation
          questionConfiguration={questionConfiguration}
          question={question}
        />
      </TileWithTitle>
    </>
  );
};
