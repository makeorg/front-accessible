// @flow
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { PresentationTileWithTitleStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { DescriptionImageStyle } from 'Client/features/consultation/Styled/Presentation';
import { useMobile } from 'Client/hooks/useMedia';
import { Presentation } from '../../Presentation';

type Props = {
  question: TypeQuestion,
};
export const PresentationTile = ({ question }: Props) => {
  const isMobile = useMobile();
  return (
    <>
      {!isMobile && question.descriptionImage && (
        <DescriptionImageStyle
          src={question.descriptionImage}
          style={{ maxWidth: '360px' }}
          alt=""
        />
      )}
      <TileWithTitle
        as={
          question.descriptionImage ? PresentationTileWithTitleStyle : undefined
        }
        title={i18n.t('consultation.presentation.title')}
      >
        <Presentation question={question} />
      </TileWithTitle>
    </>
  );
};
