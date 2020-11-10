// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { useMobile, useScreenWidth } from 'Client/hooks/useMedia';
import { MobileDescriptionImageStyle } from '../Styled/Presentation';

type Props = {
  question: QuestionType,
};

export const MobileDescriptionImage = ({ question }: Props) => {
  const isMobile = useMobile();
  const screenWidth = useScreenWidth();

  return (
    <>
      {isMobile && question.descriptionImage && (
        <MobileDescriptionImageStyle
          src={question.descriptionImage}
          alt={question.descriptionImageAlt || ''}
          width={screenWidth}
        />
      )}
    </>
  );
};
