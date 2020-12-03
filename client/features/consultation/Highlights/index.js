import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { Image } from 'Client/ui/Image';
import { useDesktop } from 'Client/hooks/useMedia';
import { Figures } from './Figures';
import {
  HigthlightsColumnStyle,
  HigthlightsWrapperStyle,
  ImageWrapperStyle,
} from './style';
import { Progress } from './Progress';

export const ParticipateHighlights = () => {
  const isDesktop = useDesktop();
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  return (
    <HigthlightsWrapperStyle>
      <HigthlightsColumnStyle className="half">
        <HigthlightsColumnStyle className="right-spacing left-spacing">
          <Figures />
        </HigthlightsColumnStyle>
        <HigthlightsColumnStyle className="right-spacing">
          <Progress />
        </HigthlightsColumnStyle>
      </HigthlightsColumnStyle>
      {isDesktop && (
        <HigthlightsColumnStyle className="half left-spacing">
          <ImageWrapperStyle>
            <Image
              src={question.descriptionImage}
              alt={question.descriptionImageAlt}
              width={555}
            />
          </ImageWrapperStyle>
        </HigthlightsColumnStyle>
      )}
    </HigthlightsWrapperStyle>
  );
};
